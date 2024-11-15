import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home🏡</Link>
        </li>
        <li>
          <Link to="/menu">Menu🍕🍔🥓🍗🍰🍪</Link>
        </li>
        <li>
          <Link to="/cart">Cart🛒</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites✨</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

