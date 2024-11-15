import React, { useState, useEffect } from 'react';

const Menu = ({ addToCart, addToFavourites }) => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState('');

  // GET request to fetch food from the backend
  useEffect(() => {
    fetch('http://localhost:3001/food')
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      })
  }, []);

  // Filtering food based on search input
  const filteredFood = food.filter((foodItem) =>
    foodItem.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log('Filtered food:', filteredFood); // Debug log

  return (
    <div className="menu-container">
      <h2 className="menu-title">MENU</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search for food"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="menu-items">
        {filteredFood.length > 0 ? (
          filteredFood.map((foodItem) => (
            <div key={foodItem.id} className="food-card">
              <img
                src={foodItem.image}
                alt={foodItem.name}
                className="food-image"
              />
              <div className="food-info">
                <h4 className="food-name">{foodItem.name}</h4>
                <p className="food-description">{foodItem.description}</p>
                <p className="food-price">${foodItem.price}</p>
                <div className="food-buttons">
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(foodItem)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="add-to-favourites"
                    onClick={() => addToFavourites(foodItem)}
                  >
                    Add to Favourites
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-food">No food found</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
