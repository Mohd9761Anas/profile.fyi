import React from "react";

const CartSummary = ({ total, discount, finalAmount }) => {
  return (
    <div className="cart-summary">
      <h2>Your Cart Summary</h2>
      <div className="summary-item">
        <span className="summary-label">Total:</span>
        <span className="summary-value">${total.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Discount:</span>
        <span className="summary-value">${discount.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Total Amount:</span>
        <span className="summary-value">${finalAmount.toFixed(2)}</span>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CartSummary;
