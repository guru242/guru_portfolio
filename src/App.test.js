import { render, screen } from '@testing-library/react';
import App from './App'; // Assuming App renders <Home /> component

test('renders the homepage text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hi, I'm Guru Prasath/i);  // Case-insensitive regex match
  expect(textElement).toBeInTheDocument();
});
