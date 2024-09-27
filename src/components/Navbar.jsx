import React from 'react';
import logo from '../logo.png'; 

export const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <img src={logo} alt="Logo" style={styles.logo} />
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    backgroundColor: '#8172db',
    height: '80px',
  },
  logo: {
    width: '150px', 
    height: '50px', 
    margin: '0 5px',
    filter: 'brightness(0) invert(1)',
  },
};
