import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogoutButton from '../components/LogoutButton';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    MemoryRouter: actual.MemoryRouter,
  };
});

describe('LogoutButton', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
    localStorage.setItem('userData', 'test');
  });

  test('clears storage and navigates to login', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <LogoutButton />
      </MemoryRouter>
    );
    await user.click(screen.getByRole('button', { name: /logout/i }));
    expect(localStorage.getItem('userData')).toBeNull();
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
