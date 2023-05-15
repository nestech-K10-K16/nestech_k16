import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DetailScreen from '../screens/detail/index';
import HomeScreen from '../screens/home/index';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detail" element={<DetailScreen />} />
        <Route path="/detail/:id" element={<DetailScreen />} />
      </Routes>
    </div>
  );
};

export default App;
