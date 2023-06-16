import { IMG_project } from "../../assets/images";
import "./style.css";

function Project() {
  return (
    <main>
      <div class="container">
        <div class="card">
          <p>
            starting from May we have a project of sbsweb company about
            FRONT-END field, by the end of May I will finish my project and hope
            to achieve good results
            <a href="https://gymstore24h.000webhostapp.com/">
              <h3 class="click-here">CLICK HERE</h3>
            </a>
          </p>
        </div>
        <div class="img-content">
          <img src={IMG_project} alt="" />
        </div>
      </div>
    </main>
  );
}
export default Project;
