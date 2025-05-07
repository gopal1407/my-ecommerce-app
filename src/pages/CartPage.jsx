import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const CartPage = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div>
      <h2>Cart</h2>
      <p data-testid="cart-count">{cartCount}</p>
      <ProductCard name="Socks" price={25} addToCart={addToCart} />
    </div>
  );
};

export default CartPage;
