import React, { useState, useEffect } from 'react';

const Menu = ({ addToCart, addToFavourites }) => {
  const [items, setFood] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/food')
      .then(res => res.json())
      .then(data => setFood(data));
  }, []);

  const filteredFood = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
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
          filteredFood.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>${item.price}</p>

              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => addToFavourites(item)}>Add to Favourites</button>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
