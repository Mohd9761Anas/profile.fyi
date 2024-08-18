import React from "react";

const Nav = ({ cartItemCount, toggleCart }) => {
  return (
    <div className="nav">
      <div className="nav-brand">profile</div>
      <div className="nav-items">
        
        <div className="nav-cart" onClick={toggleCart}>
          Cart ({cartItemCount})
        </div>
      </div>
    </div>
  );
};

export default Nav;