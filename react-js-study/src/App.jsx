import './App.css';
import {
  IMG_BannerImg,
  IMG_ThingDecLeft,
  IMG_ThingDecRight,
} from './assets/images';
import './main.css';

function App() {
  return (
    <div>
      <section id="overlay"></section>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="57"
                height="57"
                viewBox="0 0 57 57"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="-1.553"
                    y1="-0.068"
                    x2="2.471"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#54b192" />
                    <stop offset="1" stopColor="#1ce39f" />
                  </linearGradient>
                </defs>
                <g id="Logo" transform="translate(-115 -38)">
                  <circle
                    id="Ellipse_58"
                    data-name="Ellipse 58"
                    cx="28.5"
                    cy="28.5"
                    r="28.5"
                    transform="translate(115 38)"
                    fill="url(#linear-gradient)"
                  />
                  <text
                    id="Li."
                    transform="translate(128 76)"
                    fill="#3f3d56"
                    fontSize="29"
                    fontFamily="Helvetica"
                  >
                    <tspan x="0" y="0">
                      Li.
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>
            <ul className="navbar__links">
              <li className="navbar__link">
                <a href="#works">Work</a>
              </li>
              <li className="navbar__link">
                <a href="#things">About</a>
              </li>
              <li className="navbar__link">
                <a href="#works">Resume</a>
              </li>
              <a href="#footer">
                <button className="navbar__btn">Contact</button>
              </a>
            </ul>

            <div className="navbar__icons">
              <div className="navbar__icon"></div>
            </div>
          </nav>
        </div>
      </header>

      <section id="banner">
        <div className="container">
          <div className="banner__img">
            <img src={IMG_BannerImg} alt="image of women" />
          </div>

          <div className="banner__heading">
            <h1>Hello, I am Lisa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              a est culpa soluta modi beatae unde incidunt dolorem placeat
              maiores?
            </p>
            <a href="#">
              <button className="banner__btn">View more</button>
            </a>
            <div className="banner__socials">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="things">
        <div className="container">
          <div className="things__dec">
            <img src={IMG_ThingDecLeft} alt="dec left" />
          </div>
          <div className="things__dec">
            <img src={IMG_ThingDecRight} alt="dec left" />
          </div>
          <h2>Thing I Do</h2>
          <div className="things__item">
            <img src="./assets/images/things-item-1.png" alt="image things 1" />
            <div className="things__item--heading">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                quo, consequatur maiores explicabo numquam doloribus mollitia
                quos quibusdam iusto iste repudiandae eveniet facere,
                necessitatibus consectetur quam velit aut minima voluptas.
              </p>
            </div>
          </div>
          <div className="things__item">
            <img src="./assets/images/things-item-2.png" alt="image things 2" />
            <div className="things__item--heading">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                quo, consequatur maiores explicabo numquam doloribus mollitia
                quos quibusdam iusto iste repudiandae eveniet facere,
                necessitatibus consectetur quam velit aut minima voluptas.
              </p>
            </div>
          </div>
          <div className="things__item">
            <img
              src="./assets/images/things-item-3.png"
              alt="image things 3s"
            />
            <div className="things__item--heading">
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
        <div className="container">
          <div className="things__dec">
            <img src={IMG_ThingDecRight} alt="dec left" />
          </div>
          <div className="things__dec">
            <img src={IMG_ThingDecRight} alt="dec left" />
          </div>
          <h2>Recent Works</h2>
          <div className="works__img">
            <div className="works__img--single">
              <img src="./assets/images/work-1.png" alt="work-1" />
            </div>
            <div className="works__img--single">
              <img src="./assets/images/work-2.png" alt="work-2" />
            </div>

            <div className="works__img--single">
              <img src="./assets/images/work-3.png" alt="work-3" />
            </div>
            <div className="works__img--single">
              <img src="./assets/images/work-4.png" alt="work-4" />
            </div>
          </div>

          <div className="works__btn">
            <a href="#">
              <button>View Works</button>
            </a>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="things__dec">
            <img src="./assets/images/things-dec-l.png" alt="dec left" />
          </div>
          <div className="footer__img">
            <img src="./assets/images/footer-img.png" alt="footer" />
          </div>
          <div className="footer__heading">
            <h1>Ready to make something amazing?</h1>
          </div>
          <div className="footer__contact">
            <a href="tel:01234567">
              <i className="fa-solid fa-phone"></i>
              <p>90-123-4557</p>
            </a>
            <a href="mailto:mail@example.com">
              <i className="fa-regular fa-envelope"></i>
              <p>mail@example.com</p>
            </a>
          </div>
          <div className="banner__socials">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </footer>

      <script
        src="https://kit.fontawesome.com/1c39565260.js"
        crossOrigin="anonymous"
      ></script>
      <script src="./js/main.js"></script>
    </div>
  );
}

export default App;
