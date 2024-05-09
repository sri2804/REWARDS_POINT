import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import for navigation links
import './Navigation.css';
const SideNav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        Close
      </button>
      <nav>
        <ul>
          {data.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
