import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import ProductList from './components/productsList';
import Cart from './components/cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="App">
      <Nav cartItemCount={cartItems.length} toggleCart={toggleCart} />
      {showCart ? (
        <Cart items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>
      ) : (
        <ProductList addToCart={addToCart} />
      )}
    </div>
  );
}

export default App;