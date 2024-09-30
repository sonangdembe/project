import React from 'react';
import logo from '../logo.png'; 

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#8172db', opacity: 1 }}>
      <div className="container-fluid">
      <a className="navbar-brand" href="/MainPlanner">
  <img src={logo} alt="ChimpVine Logo" width="185" height="56" style={{ fill: 'white' }} />
</a>

      </div>
    </nav>
  );
};