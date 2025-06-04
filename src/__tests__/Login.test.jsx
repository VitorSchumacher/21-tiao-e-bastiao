import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { act } from 'react-dom/test-utils';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Login page', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
    globalThis.fetch = jest.fn();
    localStorage.clear();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('shows error with invalid credentials', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    globalThis.fetch.mockResolvedValue({ ok: false });
    await user.type(
      screen.getByPlaceholderText(/digite seu email/i),
      'foo@test.com'
    );
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), 'bar');
    await user.click(screen.getByRole('button', { name: /entrar/i }));
    expect(screen.getByText(/usuário ou senha inválidos/i)).toBeInTheDocument();
  });

  test('navigates to dashboard on valid admin login', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    globalThis.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ slug: 's', nome: 'n', token: 't' }),
    });
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    await user.type(screen.getByPlaceholderText(/digite seu email/i), 'admin@test.com');
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), 'admin');
    await user.click(screen.getByRole('button', { name: /entrar/i }));
    expect(mockNavigate).not.toHaveBeenCalled();
    act(() => {
      jest.runAllTimers();
    });
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    expect(localStorage.getItem('userData')).toBe(
      JSON.stringify({ slug: 's', nome: 'n', token: 't' })
    );
    jest.useRealTimers();
  });

  test('shows link to register', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /cadastre-se/i })).toHaveAttribute(
      'href',
      '/register'
    );
  });
});
