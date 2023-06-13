import React, { useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className={`app-container ${isNavbarOpen ? '' : 'navbar-closed'}`}>
      <div className="side-navbar">
        <button className="toggle-button" onClick={toggleNavbar}>
          {isNavbarOpen ? 'CLOSE' : 'OPEN'}
        </button>
        {isNavbarOpen && (
          <ul>
            <li><Link to={{ pathname: "/HomePage", state: { value: 1 } }}>Home Page</Link></li>
            <li><Link to={{ pathname: "/MyProfile", state: { value: 1 } }}>My Profile</Link></li>
            <li><Link to={{ pathname: "/MyHistory", state: { value: 1 } }}>My Games History</Link></li>            
            <li>Contact</li>
          </ul>
        )}
      </div>
      

      <div className="content" >
      
        <Outlet>
          
        </Outlet>
      </div>
    </div>
  );
}

export default App;