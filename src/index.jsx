import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Project from './components/project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter hashType='slash'>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/project/:id' element={<Project/>} ></Route>
    </Routes>
  </HashRouter>
);

