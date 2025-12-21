import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

test('renders correct label', () => {
  render(<ThemeToggle isDark={false} onToggle={() => {}} />);
  expect(screen.getByText('Тёмная тема')).toBeInTheDocument();
});

test('calls onToggle when clicked', () => {
  const onToggle = jest.fn();
  render(<ThemeToggle isDark={false} onToggle={onToggle} />);
  fireEvent.click(screen.getByRole('button'));
  expect(onToggle).toHaveBeenCalledTimes(1);
});
