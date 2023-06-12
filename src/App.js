import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HeaderNavbar } from './components';
import { ROUTE_PATH } from './constants/route';
import Future from './pages/future/Future';
import Home from './pages/home/Home';
import Project from './pages/project/Project';

const App = () => {
  return (
    <div>
      <div class="nav">
        <HeaderNavbar />
      </div>
      <Routes>
        <Route path={ROUTE_PATH.HOME} element={<Home />} />
        <Route path={ROUTE_PATH.PROJECT} element={<Project />} />
        <Route path={ROUTE_PATH.FUTURE} element={<Future />} />
      </Routes>
    </div>
  );
};

export default App;
