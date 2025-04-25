import { render, screen } from '@testing-library/react';
import App from './../App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bem-vindo ao sistema de gerenciamento de usuários/i);
  expect(linkElement).toBeInTheDocument();
});
