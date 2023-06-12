import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../../constants/route';

const HeaderNavbar = () => {
  return (
    <ul>
      <Link to={ROUTE_PATH.HOME}>
        <li>HOME</li>
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
