import {
  img_thing_item_1,
  img_thing_item_2,
  img_thing_item_3,
  img_work_1,
  img_work_2,
  img_work_3,
  img_work_4,
} from "../../assets";
import "./main-style.css";

export default function main() {
  return (
    <main>
      <section id="second-section">
        <div className="second-section__about">
          <h1>Thing I Do</h1>

          <div className="second-section__about__about-1">
            <img src={img_thing_item_1} alt="" />

            <div className="second-section__about__about-1__heading">
              <h3>Lorem ipsum dolor sit amet.</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                quo, consequatur maiores explicabo numquam doloribus mollitia
                quos quibusdam iusto iste repudiandae eveniet facere,
                necessitatibus consectetur quam velit aut minima voluptas.
              </p>
            </div>
          </div>

          <div className="second-section__about__about-2">
            <img src={img_thing_item_2} alt=""></img>

            <div className="second-section__about__about-2__heading">
              <h3>Lorem ipsum dolor sit amet.</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                quo, consequatur maiores explicabo numquam doloribus mollitia
                quos quibusdam iusto iste repudiandae eveniet facere,
                necessitatibus consectetur quam velit aut minima voluptas.
              </p>
            </div>
          </div>

          <div className="second-section__about__about-3">
            <img src={img_thing_item_3} alt=""></img>

            <div className="second-section__about__about-3__heading">
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

      <section id="thirt-section">
        <div className="thirt-section__work">
          <h1>Recent Works</h1>

          <div className="thirt-section__work__image-container">
            <img src={img_work_1} alt=""></img>
            <img src={img_work_2} alt=""></img>
            <img src={img_work_3} alt=""></img>
            <img src={img_work_4} alt=""></img>
          </div>

          <button className="thirt-section__work__btn-view">
            <h3>View Works</h3>
          </button>
        </div>
      </section>
    </main>
  );
}
