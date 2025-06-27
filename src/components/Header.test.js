beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((msg) => {
    if (msg.includes('ReactDOMTestUtils.act is deprecated')) return;
    console.error(msg);
  });
});

import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders site title', () => {
  render(<Header />);
  expect(screen.getByText(/Gopal's E-Commerce Site/i)).toBeInTheDocument();
});
