import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div>
    <h2>Cart</h2>
    <div className="cart-items">
      {cart.length > 0 ? (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  </div>
);

export default Cart;
