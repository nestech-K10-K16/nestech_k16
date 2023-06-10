import "./App.css";
import "./main.css";

function App() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Perfect.
        </a>

        <i className="bx bx-menu-alt-left" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, me</h3>
          <h1>Perfect</h1>
          <h3>
            And a <span>Freshman of HUFLIT university</span>
          </h3>
          <p>
            My strengths in programming include: programming skills, basic
            knowledge of c# language, data structures and algorithms, databases,
            seriousness and responsibility and most importantly ability to
            learn.
          </p>
          <div className="social-media">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bx-envelope"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <a href="#" className="btn">
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src="./src/assets/images/home.png" alt="" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="./src/assets/images/things-item-1.png" alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Fullstack developer</h3>
          <ol>
            <li>Basic knowledge of programming.</li>
            <li>Knowledge of programming languages.</li>
            <li>Database knowledge.</li>
            <li>Knowledge of frameworks.</li>
            <li>Frontend development skills.</li>
            <li>Backend development skills.</li>
            <li>Teamwork skills.</li>
            <li>
              Analytical and problem-solving skills during website development.
            </li>
          </ol>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">
          Our<span> Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <ol>
              <li>HTML, CSS, JavaScript</li>
              <li>Frameworks and libraries</li>
              <li>Databases</li>
              <li>Backend development</li>
              <li>DevOps</li>
              <li>UX/UI Design</li>
              <li>SEO</li>
            </ol>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-paint"></i>
            <h3>Graphic Design</h3>
            <ol>
              <li>Graphic design basics</li>
              <li>Graphic design software</li>
              <li>Graphics and image processing skills</li>
              <li>Knowledge of marketing</li>
              <li>User experience (UX) knowledge</li>
              <li>Creative thinking and project</li>
              <li>The spirit of research and learning</li>
            </ol>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bxs-game"></i>
            <h3>Game Development</h3>
            <ol>
              <li>Programming knowledge</li>
              <li>Game design</li>
              <li>Game graphics</li>
              <li>Database</li>
              <li>Cross-platform skills</li>
              <li>Maths knowledge</li>
              <li>Skills in data analysis and statistics</li>
            </ol>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="./src/assets/images/Portfolio.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="./src/assets/images/Portfolio1.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="./src/assets/images/Portfolio2.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="./src/assets/images/Portfolio3.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="./src/assets/images/Portfolio4.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="./src/assets/images/Portfolio5.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message " className="btn" />
        </form>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Perfect | All right reserved</p>
        </div>

        <div className="footer-iconTop">
          <a href="#">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
      {/* <!-- scroll reveal --> */}
      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="https://unpkg.com/typed.js@2.0.15/dist/typed.umd.js"></script>
      <script src="./script.js"></script>
    </>
  );
}

export default App;
