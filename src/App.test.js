import { render, screen } from '@testing-library/react';
import Connection from './App';

test('renders learn react link', () => {
  render(<Connection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
