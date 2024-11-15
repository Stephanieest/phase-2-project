import React, { useState, useEffect } from 'react';

const Menu = ({ addToCart, addToFavourites }) => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState('');

  // GET request to fetch food from the backend
  useEffect(() => {
    fetch('http://localhost:5001/food')
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.error('Error fetching food:', error));
  }, []);

  // Filtering food based on search input
  const filteredFood = food.filter((foodItem) =>
    foodItem.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>MENU</h2>
      <input
        type="text"
        placeholder="Search for food"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredFood.length > 0 ? (
          filteredFood.map((foodItem) => (
            <div key={foodItem.id}>
              <img src={foodItem.image} alt={foodItem.name} />
              <h4>{foodItem.name}</h4>
              <p>{foodItem.description}</p>
              <p>${foodItem.price}</p>
              <button onClick={() => addToCart(foodItem)}>Add to Cart</button>
              <button onClick={() => addToFavourites(foodItem)}>Add to Favourites</button>
            </div>
          ))
        ) : (
          <p>No food found</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
