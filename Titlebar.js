// Titlebar.js

import React from 'react';
import './Titlebar.css';
import logo from './images/logo-removebg-preview.png';
import Navbar from './Navbar';

const Titlebar = ({ user, onLogout }) => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Rewards Point Dashboard</h2>
      </div>
      {/* <div className='nav'>
        <Navbar/>
      </div> */}
      <div className="userdetails">
        <h2>Welcome, {user.name}</h2>
        <img src={user.picture} alt="User" />
        <button onClick={onLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Titlebar;
