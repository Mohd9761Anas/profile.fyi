import React from "react";
import CartItem from "./cartItem";
import CartSummary from "./cartSummary";

const Cart = ({ items, removeFromCart, updateQuantity }) => {
  const total = items.reduce((sum, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    return sum + (isNaN(itemTotal) ? 0 : itemTotal);
  }, 0);

  const discountPercentage = 10;
  const discountAmount = (discountPercentage * total) / 100;
  const finalAmount = total - discountAmount;

  return (
    <div className="cart">
      <div className="cart-items-container">
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </>
        )}
      </div>
      <div className="cart-summary-container">
        <CartSummary 
          total={total} 
          discount={discountAmount} 
          finalAmount={finalAmount} 
        />
      </div>
    </div>
  );
};

export default Cart;