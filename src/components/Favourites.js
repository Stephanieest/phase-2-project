import React from 'react';

const Favourites = ({ favourites, removeFromFavourites }) => (
  <div>
    <h2>Favourites</h2>
    <div className="favourite-items">
      {favourites.length > 0 ? (
        favourites.map(item => (
          <div key={item.id} className="favourite-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={() => removeFromFavourites(item.id)}>Remove from Favourites</button>
          </div>
        ))
      ) : (
        <p>No items in your favourites</p>
      )}
    </div>
  </div>
);

export default Favourites;
