import React, { useState, useEffect } from 'react';

const Menu = ({ addToCart, addToFavourites }) => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/food')
      .then(res => res.json())
      .then(data => setFood(data));
  }, []);

  const filteredFood = food.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
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
          filteredFood.map((food) => (
            <div key={food.id}>
              <img src={food.image} alt={food.name} />
              <h4>{food.name}</h4>
              <p>{food.description}</p>
              <p>${food.price}</p>

              <button onClick={() => addToCart(food)}>Add to Cart</button>
              <button onClick={() => addToFavourites(food)}>Add to Favourites</button>
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
