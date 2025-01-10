
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa'; 

export const Button = ({ text, onClick, style, icon }) => {
  return (
    <button
      className="btn btn-light align-items-center"
      style={style} 
      
    >
        {text}
      {icon && <span className="me-2">{icon}</span>} 
      
    </button>
  );
};


