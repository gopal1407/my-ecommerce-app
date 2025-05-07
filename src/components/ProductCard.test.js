import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product name and price', () => {
  render(<ProductCard name="Shoes" price={99} addToCart={() => {}} />);
  expect(screen.getByText(/Shoes/)).toBeInTheDocument();
  expect(screen.getByText(/\$99/)).toBeInTheDocument();
});

test('calls addToCart on button click', () => {
  const mockAdd = jest.fn();
  render(<ProductCard name="Shoes" price={99} addToCart={mockAdd} />);
  fireEvent.click(screen.getByText(/Add to Cart/i));
  expect(mockAdd).toHaveBeenCalledTimes(1);
});
