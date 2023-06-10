import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import './App.css';
import {
  IMG_Banner,
  IMG_Logo,
  IMG_ThingsDecorateLeft,
  IMG_ThingsDecorateRight,
} from './assets';
import Header from './components/header';

library.add(fab);

const App = () => {
  useEffect(() => {
    const menu = document.querySelector('.navbar__links');
    const menuButton = document.querySelector('.navbar__icons');
    const logo = document.querySelector('.navbar__logo');
    const overlay = document.querySelector('#overlay');

    menuButton.addEventListener('click', () => {
      menu.classList.toggle('navbar__open');
      menuButton.classList.toggle('open');
    });

    overlay.addEventListener('click', () => {
      menu.classList.toggle('navbar__open');
      menuButton.classList.toggle('open');
      overlay.classList.toggle('show');
    });

    logo.addEventListener('click', () => {
      alert('reload');
    });
  }, []);

  return (
    <div>
      <section id="overlay"></section>
      <Header />
      <section id="banner">
        <div class="container">
          <div class="banner__img">
            <img src={IMG_Banner} alt="image of women" />
          </div>

          <div class="banner__heading">
            <h1>Hello, I am Lisa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              a est culpa soluta modi beatae unde incidunt dolorem placeat
              maiores?
            </p>
            <button class="banner__btn">View more</button>
            <div class="banner__socials">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="things">
        <div class="container">
          <div class="things__dec">
            <img src={IMG_ThingsDecorateLeft} alt="dec left" />
          </div>
          <div class="things__dec">
            <img src={IMG_ThingsDecorateRight} alt="dec left" />
          </div>
          <h2>Thing I Do</h2>
          <div class="things__item">
            <img
              src={require('./assets/images/things-item-1.png')}
              alt="image things 1"
            />
            <div class="things__item--heading">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                quo, consequatur maiores explicabo numquam doloribus mollitia
                quos quibusdam iusto iste repudiandae eveniet facere,
                necessitatibus consectetur quam velit aut minima voluptas.
              </p>
            </div>
          </div>
          <div class="things__item">
            <img src="./assets/images/things-item-2.png" alt="image things 2" />
            <div class="things__item--heading">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                quo, consequatur maiores explicabo numquam doloribus mollitia
                quos quibusdam iusto iste repudiandae eveniet facere,
                necessitatibus consectetur quam velit aut minima voluptas.
              </p>
            </div>
          </div>
          <div class="things__item">
            <img
              src="./assets/images/things-item-3.png"
              alt="image things 3s"
            />
            <div class="things__item--heading">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                quo, consequatur maiores explicabo numquam doloribus mollitia
                quos quibusdam iusto iste repudiandae eveniet facere,
                necessitatibus consectetur quam velit aut minima voluptas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="works">
        <div class="container">
          <div class="things__dec">
            <img src="./assets/images/things-dec-r.png" alt="dec left" />
          </div>
          <div class="things__dec">
            <img src="./assets/images/things-dec-r.png" alt="dec left" />
          </div>
          <h2>Recent Works</h2>
          <div class="works__img">
            <div class="works__img--single">
              <img src="./assets/images/work-1.png" alt="work-1" />
            </div>
            <div class="works__img--single">
              <img src="./assets/images/work-2.png" alt="work-2" />
            </div>

            <div class="works__img--single">
              <img src="./assets/images/work-3.png" alt="work-3" />
            </div>
            <div class="works__img--single">
              <img src="./assets/images/work-4.png" alt="work-4" />
            </div>
          </div>

          <div class="works__btn">
            <a href="#">
              <button>View Works</button>
            </a>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="container">
          <div class="things__dec">
            <img src="./assets/images/things-dec-l.png" alt="dec left" />
          </div>
          <div class="footer__img">
            <img src="./assets/images/footer-img.png" alt="footer" />
          </div>
          <div class="footer__heading">
            <h1>Ready to make something amazing?</h1>
          </div>
          <div class="footer__contact">
            <a href="tel:01234567">
              <i class="fa-solid fa-phone"></i>
              <p>90-123-4557</p>
            </a>
            <a href="mailto:mail@example.com">
              <i class="fa-regular fa-envelope"></i>
              <p>mail@example.com</p>
            </a>
          </div>
          <div class="banner__socials">
            <FontAwesomeIcon icon="fab fa-facebook" />
            <FontAwesomeIcon icon="fab fa-linkedin" />
            <FontAwesomeIcon icon="fab fa-github" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
