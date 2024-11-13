import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to ="/"></Link> </li>
        <li>Menu</li>
        <li>Cart</li>
        <li>Favourites</li>
      </ul>
    </nav>
  );
};

export default Navbar;
