import { render, screen } from '@testing-library/react';
import SecretNumber from './SecretNumber';

test('renders title', () => {
  render(<SecretNumber />);
  const titleElement = screen.getByText(/Secret Number Game/i);
  expect(titleElement).toBeInTheDocument();
});

