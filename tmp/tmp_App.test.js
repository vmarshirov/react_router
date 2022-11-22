import { render, screen } from '@testing-library/react';
import Tmp_App from './App';

test('renders learn react link', () => {
  render(<Tmp_App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
