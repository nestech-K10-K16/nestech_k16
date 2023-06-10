import React from 'react';
import { IMG_Logo } from '../assets';

const Header = () => {
  return (
    <header>
      <div class="container">
        <nav class="navbar">
          <div class="navbar__logo">
            <img src={IMG_Logo} alt="my logo" />
          </div>

          <ul class="navbar__links">
            <li class="navbar__link">
              <a href="#works">Work</a>
            </li>
            <li class="navbar__link">
              <a href="#things">About</a>
            </li>
            <li class="navbar__link">
              <a href="#works">Resume</a>
            </li>
            <a href="#footer">
              <button class="navbar__btn">Contact</button>
            </a>
          </ul>

          <div class="navbar__icons">
            <div class="navbar__icon"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
