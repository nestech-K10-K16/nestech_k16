import React from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Project from "./pages/project/Project";
// import Future from "./pages/furure/Future";
const App = () => {
  return (
    <>
      <div>
        {/* <div class="nav">
          <div>
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
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Future" element={<Future />} />
        </Routes> */}
        <div className="container">
          <div className="screen">
            <span className="input"></span>
          </div>
          <div className="keyboard">
            <button className="item item-1">AC</button>
            <button className="item item-2">DEL</button>
            <button className="item item-3">+</button>
            <button className="item item-4">7</button>
            <button className="item item-5">8</button>
            <button className="item item-6">9</button>
            <button className="item item-7">-</button>
            <button className="item item-8">4</button>
            <button className="item item-9">5</button>
            <button className="item item-10">6</button>
            <button className="item item-11">*</button>
            <button className="item item-12">1</button>
            <button className="item item-13">2</button>
            <button className="item item-14">3</button>
            <button className="item item-15">/</button>
            <button className="item item-16">0</button>
            <button className="item item-17">00</button>
            <button className="item item-18">.</button>
            <button className="item item-19">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
