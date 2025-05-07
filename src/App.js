import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  return (
    <div>
      <Header />
      <h2>Featured Product</h2>
      <ProductCard name="T-Shirt" price={49} addToCart={handleAddToCart} />
    </div>
  );
}

export default App;
