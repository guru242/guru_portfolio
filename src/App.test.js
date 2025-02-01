import { render, screen } from '@testing-library/react';
import App from './App';

test("renders the homepage text", () => {
  render(<App />);
  const textElement = screen.getByText(/Hi, I'm Guru Prasath/i); // ✅ Updated text
  expect(textElement).toBeInTheDocument();
});
