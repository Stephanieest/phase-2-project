import React from 'react';

const Favourites = ({ favourites, removeFromFavourites }) => (
  <div>
    <h2>Favourites</h2>
    <div className="favourite-foods">
      {favourites.length > 0 ? (
        favourites.map(food => (
          <div key={food.id} className="favourite-food">
            <h4>{food.name}</h4>
            <img src={food.image} alt={food.name} className="cart-food-image" />
            <p>${food.price}</p>
            <button onClick={() => removeFromFavourites(food.id)}>Remove from Favourites</button>
          </div>
        ))
      ) : (
        <p>No food in your favourites</p>
      )}
    </div>
  </div>
);

export default Favourites;
