import React from "react";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const quantity = item.quantity || 1;

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-text">{item.text}</p>
        <p className="cart-item-price">${(item.price * quantity).toFixed(2)}</p>
        <div className="quantity-control">
          <button
            className="quantity-button"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button
            className="quantity-button"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;