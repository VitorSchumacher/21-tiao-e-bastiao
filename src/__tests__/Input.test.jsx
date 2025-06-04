import { render, screen } from '@testing-library/react';
import Input from '../components/Input';

describe('Input component', () => {
  test('renders label and placeholder', () => {
    render(<Input label="Name" placeholder="Enter name" />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  test('shows error message when provided', () => {
    render(<Input error="Required" />);
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});
