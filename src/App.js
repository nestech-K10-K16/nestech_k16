import React from "react";
import "./App.css";
import { IMG_anh, IMG_facebook, IMG_tiktok, IMG_youtube } from "./img/img";
import { Routes, Route } from "react-router-dom";
import HomePage from "";
import ProjectPage from "./project";
import FuturePage from "./future";
const App = () => {
  return (
    <>
      <div>
        <div class="nav">
          <ul>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <a href="/Project">Project</a>
            </li>
            <li>
              <a href="/Future">Future</a>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<>HomePage</>} />
          <Route path="/Project" element={<>ProjectPage</>} />
          <Route path="/Future" element={<>FuturePage</>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
