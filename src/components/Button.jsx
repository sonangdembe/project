import React from 'react';


export const Button = ({ label, onClick, type = 'button', className, disabled = false, style }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
      style={style} 
    >
      {label}
    </button>
  );
};
