import "./header-style.css";
import { img_banner, img_logo } from "../../assets";

export default function header() {
  return (
    <header>
      <section id="first-section">
        <nav className="first-section__header">
          <div className="first-section__header__logo">
            <img src={img_logo} alt=""></img>
          </div>

          <ul className="first-section__header__menu">
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Resume">Resume</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="first-section__content-header">
          <div className="first-section__content-header__left-side">
            <h1>Hello, I am Lisa</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              a est culpa soluta modi beatae unde incidunt dolorem placeat
              maiores?
            </p>

            <button className="first-section__content-header__left-side__btn-view">
              <h4>View more</h4>
            </button>

            <div class="first-section__content-header__left-side__banner-socials">
              <a href="#">
                <i class="fa-brands fa-facebook fa-xl" style={{color: "#000000"}}></i>
              </a>

              <a href="#">
                <i class="fa-brands fa-linkedin fa-xl" style={{color: "#000000"}}></i>
              </a>

              <a href="#">
                <i class="fa-brands fa-github fa-xl" style={{color: "#000000"}}></i>
              </a>
            </div>
          </div>

          <div className="first-section__content-header__right-side">
            <img src={img_banner} alt=""></img>
          </div>
        </div>
      </section>
    </header>
  );
}
