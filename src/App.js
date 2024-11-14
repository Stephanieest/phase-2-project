import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Favourites from './components/Favourites';
import './App.css';

function App() {

  const [cart, setCart] = useState([])
  const [favourites, setFavourites] = useState([])
  const [alertMessage, setAlertMessage] = useState([])
  const [menuFood, setMenuFood] = useState([])

  useEffect(() => {
    fetch('http://localhost:5001/food')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then(data => setMenuFood(data.food || []))
      .catch(err => {
        console.error('Error fetching menu food', err)
        setMenuFood([])
      })
  }, [])

  // Function to add an item to the cart
const addToCart = (item) => {
  setCart((prevCart) => [...prevCart, item]); // Update cart by adding the new item
  setAlertMessage(`Added ${item.name} to cart!`); // Show alert for the added item
};

// Function to remove an item from the cart
const removeFromCart = (itemId) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== itemId)); // Remove the item with the matching id
  setAlertMessage('Item removed from cart!'); // Show alert that the item was removed
};

// Function to add an item to favourites
const addToFavourites = (item) => {
  setFavourites((prevFavourites) => [...prevFavourites, item]); // Add item to favourites
  setAlertMessage(`Added ${item.name} to favourites!`); // Show alert for the added favourite item
};

// Function to remove an item from favourites
const removeFromFavourites = (itemId) => {
  setFavourites((prevFavourites) => prevFavourites.filter((item) => item.id !== itemId)); // Remove item from favourites
  setAlertMessage('Item removed from favourites!'); // Show alert for removed item
};



 return (
    <Router>
      <Navbar />
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={<Menu food={Menufood} addToCart={addToCart} addToFavourites={addToFavourites} />}
        />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route
          path="/favourites"
          element={<Favourites favourites={favourites} removeFromFavourites={removeFromFavourites} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
