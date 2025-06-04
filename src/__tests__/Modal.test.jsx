import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../components/Modal';

describe('Modal component', () => {
  test('renders children', () => {
    render(<Modal onClose={() => {}}><p>Content</p></Modal>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('calls onClose when overlay is clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();
    const { container } = render(<Modal onClose={onClose}><p>Content</p></Modal>);
    await user.click(container.firstChild);
    expect(onClose).toHaveBeenCalled();
  });

  test('does not call onClose when content is clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();
    render(<Modal onClose={onClose}><p>Content</p></Modal>);
    await user.click(screen.getByText('Content'));
    expect(onClose).not.toHaveBeenCalled();
  });
});
