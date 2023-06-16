import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Future from "./pages/furure/Future";
const App = () => {
  return (
    <div>
      <div class="nav">
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
      </Routes>
    </div>
  );
};

export default App;
