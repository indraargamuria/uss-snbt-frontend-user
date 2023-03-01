import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Catalog from './userpages/Catalog';
import Dashboard from './userpages/Dashboard';
import Home from './userpages/Home';
import TryOutPrepare from './userpages/TryOutPrepare';
import Login from './userpages/Login';
import TryOut from './userpages/TryOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/catalog" element={ <Catalog />}></Route>
        <Route path="/dashboard" element={ <Dashboard />}></Route>
        <Route path="/tryoutprepare" element={ <TryOutPrepare />}></Route>
        <Route path="/login" element={ <Login />}></Route>
        <Route path="/tryout" element={ <TryOut />}></Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
