import React, { useState } from 'react';
import './Quiz.css';
import img from './images/img.png';
import img1 from './images/img2.png';

export const HomePage = () => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    console.log(
      `%cSelected Level: ${level}`,
      'font-family: "Lacquer", serif; font-weight: 400; font-size: 16px; color: #000;'
    );
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100 position-relative"
      style={{ backgroundColor: '#fbe8d7' }}
    >
      {/* Image at the left bottom */}
      <img
        src={img}
        alt="img"
        className="position-absolute"
        style={{
          bottom: '0',
          left: '0',
          width: '150px',
          height: 'auto',
        }}
      />

      {/* Image at the right top */}
      <img
        src={img1}
        alt="img1"
        className="position-absolute"
        style={{
          top: '0',
          right: '0',
          width: '150px',
          height: 'auto',
        }}
      />

      {/* Quiz Title Button */}
    
        <button
          className="btn shadow fw-bold text-center lacquer-regular mb-5"
          style={{
            width: '90%',
            maxWidth: '500px',
            fontSize: '3rem',
            lineHeight: '1.5',
            borderRadius: '40px',
          }}
        >
          Quiz
          <hr
            className="my-2 lacquer-regular"
            style={{ width: '100%', margin: '0 auto' }}
          />
          Choose Your Level
        </button>
   

      {/* Level Selection Buttons */}
      <div className="container lacquer-regular">
        <div className="row">
          {/* Basic */}
          <div className="col-12 mb-3">
            <button
              onClick={() => handleLevelSelect('Basic')}
              className="btn w-100"
              style={{
                backgroundColor: '#f6bd99 ',
                borderColor: '#d3e6f6',
                height: '60px',
                borderRadius: '30px',
                fontSize: '1.5rem',
              }}
            >
              Basic
            </button>
          </div>

          {/* Intermediate */}
          <div className="col-12 mb-3">
            <button
              onClick={() => handleLevelSelect('Intermediate')}
              className="btn w-100"
              style={{
                backgroundColor: '#d3e6f6',
                borderColor: '#f6bd99',
                height: '60px',
                borderRadius: '30px',
                fontSize: '1.5rem',
              }}
            >
              Intermediate
            </button>
          </div>

          {/* Professional */}
          <div className="col-12">
            <button
              onClick={() => handleLevelSelect('Professional')}
              className="btn w-100"
              style={{
                backgroundColor: '#ffc5bd',
                borderColor: '#ffc5bd',
                height: '60px',
                borderRadius: '30px',
                fontSize: '1.5rem',
              }}
            >
              Professional
            </button>
          </div>
        </div>
      </div>

      {/* Selected Level Message */}
      {selectedLevel && (
        <div className="mt-4 text-center">
          <h2 className="fw-semibold lacquer-regular">
            You selected the <span className="text-primary">{selectedLevel}</span> level!
          </h2>
        </div>
      )}
    </div>
  );
};
