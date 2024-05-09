// StaffDashboard.js
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './sideBars';
import MainContent from './MainContent';
import './StaffDashboard.css'; // Import CSS file for styling
import Profile from './pages/Profile';
const StaffDashboard = () => {
  return (
    <div className="staff-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
};

export default StaffDashboard;
