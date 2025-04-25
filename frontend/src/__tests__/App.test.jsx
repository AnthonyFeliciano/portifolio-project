import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders both welcome and test messages', () => {
  render(<App />);
  
  const welcomeElement = screen.getByText(/Bem-vindo ao sistema de gerenciamento de usuários/i);
  expect(welcomeElement).toBeInTheDocument();

  const testElement = screen.getByText(/ESSE TITULO É APENAS PARA TESTE/i);
  expect(testElement).toBeInTheDocument();
});
