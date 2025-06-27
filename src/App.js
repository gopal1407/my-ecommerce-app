// src/App.js

import React from 'react';

function MainApp() {
  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  return (
    <div>
      <h1>Gopal's E-Commerce Site</h1>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default MainApp;
