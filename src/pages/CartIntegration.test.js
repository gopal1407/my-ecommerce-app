import { render, screen, fireEvent } from '@testing-library/react';
import MainApp from '../App';  // ✅ using new name

test('cart updates on adding a product', () => {
  render(<MainApp />);
  fireEvent.click(screen.getByText(/Add to Cart/i));
  // Add assertion or mock alert logic here
});
