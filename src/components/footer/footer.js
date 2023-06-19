import { img_footer } from "../../assets";
import "./footer-style.css";

export default function footer() {
  return (
    <footer>
      <section id="fourth-section">
        <div className="fourth-section__footer">
          <div className="fourth-section__footer__left-side">
            <h1>Ready to make something amazing?</h1>

            <div className="fourth-section__footer__left-side__contact">
            <div className="fourth-section__footer__left-side__contact__phone">
              <i class="fa-solid fa-phone"></i>
              <p>90-123-4557</p>
            </div>

            <div className="fourth-section__footer__left-side__contact__email">
              <i class="fa-regular fa-envelope"></i>
              <p>mail@example.com</p>
            </div>
            </div>

            <div className="fourth-section__footer__left-side__socials">
              <i class="fa-brands fa-facebook fa-xl"></i>
              <i class="fa-brands fa-linkedin fa-xl"></i>
              <i class="fa-brands fa-github fa-xl"></i>
            </div>
          </div>

          <div className="fourth-section__footer__right-side">
            <img src={img_footer} alt=""></img>
          </div>
        </div>
      </section>
    </footer>
  );
}
