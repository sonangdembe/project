
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa'; // Example icon

export const Button = ({ text, onClick, style, icon }) => {
  return (
    <button
      className="btn btn-light align-items-center"
      style={style} // Apply custom styles passed from the parent
      
    >
        {text}
      {icon && <span className="me-2">{icon}</span>} {/* Render icon if provided */}
      
    </button>
  );
};


