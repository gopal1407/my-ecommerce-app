import React from 'react';

const ProductCard = ({ name, price, addToCart }) => (
  <div>
    <h3>{name}</h3>
    <p>${price}</p>
    <button onClick={addToCart}>Add to Cart</button>
  </div>
);

export default ProductCard;
