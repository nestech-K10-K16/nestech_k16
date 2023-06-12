import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbar = () => {
  return (
    <ul>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <li>
        <a href="/Project">Project</a>
      </li>
      <li>
        <a href="/Future">Future</a>
      </li>
    </ul>
  );
};

export default HeaderNavbar;
