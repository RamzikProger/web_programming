import { render, screen, fireEvent } from '@testing-library/react';
import PostCard from './PostCrad';

const props = {
  title: 'Test title',
  text: 'Long long long text for testing expand feature',
};

test('renders title', () => {
  render(<PostCard {...props} />);
  expect(screen.getByText('Test title')).toBeInTheDocument();
});

test('expands text on click', () => {
  render(<PostCard {...props} />);
  const btn = screen.getByText('Читать');
  fireEvent.click(btn);
  expect(screen.getByText('Свернуть')).toBeInTheDocument();
});
