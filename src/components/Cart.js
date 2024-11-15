import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div>
    <h2>Cart</h2>
    <div className="cart-food">
      {cart.length > 0 ? (
        cart.map(food => (
          <div key={food.id} className="cart-food">
            <h4>{food.name}</h4>
            <p>${food.price}</p>
            <button onClick={() => removeFromCart(food.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  </div>
);

export default Cart;
