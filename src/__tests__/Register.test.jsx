import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Register from '../pages/Register';
import { act } from 'react-dom/test-utils';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Register page', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
    globalThis.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('shows validation error when passwords mismatch', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    await user.selectOptions(screen.getByRole('combobox'), '1');
    await user.type(screen.getByPlaceholderText(/digite seu nome/i), 'Foo');
    await user.type(screen.getByPlaceholderText(/digite seu email/i), 'foo@test.com');
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), '123456');
    await user.type(screen.getByPlaceholderText(/confirme sua senha/i), '654321');
    await user.click(screen.getByRole('button', { name: /cadastrar/i }));
    expect(screen.getByText(/senhas não conferem/i)).toBeInTheDocument();
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  test('submits form and redirects on success', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    globalThis.fetch.mockResolvedValue({ ok: true });
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    await user.selectOptions(screen.getByRole('combobox'), '1');
    await user.type(screen.getByPlaceholderText(/digite seu nome/i), 'Foo');
    await user.type(screen.getByPlaceholderText(/digite seu email/i), 'foo@test.com');
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), '123456');
    await user.type(screen.getByPlaceholderText(/confirme sua senha/i), '123456');
    await user.click(screen.getByRole('button', { name: /cadastrar/i }));
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://code-race-qfh4.onrender.com/usuario',
      expect.objectContaining({ method: 'POST' })
    );
    expect(mockNavigate).not.toHaveBeenCalled();
    act(() => {
      jest.runAllTimers();
    });
    expect(mockNavigate).toHaveBeenCalledWith('/', {
      state: { registrationSuccess: true },
    });
    jest.useRealTimers();
  });
});
