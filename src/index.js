import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserCatalog from './userpages/UserCatalog';
import UserDashboard from './userpages/UserDashboard';
import UserHome from './userpages/UserHome';
import UserTryOutPrepare from './userpages/UserTryOutPrepare';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />}></Route>
        <Route path="/catalog" element={<UserCatalog />}></Route>
        <Route path="/dashboard" element={<UserDashboard />}></Route>
        <Route path="/tryoutprepare" element={<UserTryOutPrepare />}></Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
