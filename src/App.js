import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = () => <p className="main-title-text"></p>;

const App = (...props) => {
  return (
    <BrowserRouter>
      <MainTitleText>YBK의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-wrtie" element={<PostWritePage />} />
        <Route path="post-view" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
