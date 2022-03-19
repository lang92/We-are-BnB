import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from 'components';
import { Main, Test } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
