import React from "react";

const Card = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-text">{product.text}</p>
        <p className="card-price">${product.price}</p>
        <button className="card-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;