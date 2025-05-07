import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // or a specific page with Cart

test('cart updates on adding a product', () => {
  render(<App />);
  const addButton = screen.getByText(/Add to Cart/i);
  fireEvent.click(addButton);
  expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
});
