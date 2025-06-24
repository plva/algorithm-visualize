import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

test('renders Hello World message', () => {
  render(<HelloWorld />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
}); 