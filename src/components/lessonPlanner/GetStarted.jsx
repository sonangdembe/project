
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Arrow from './images/Line1.png'; // Arrow image
import Line from './images/arrow1.png';  // Line image

export const GetStarted = () => {
  // Main container styles
  const containerStyle = {
    background: '#E0D5FF',
    borderRadius: '10px',
    padding: '30px',
    position: 'relative',
    width: '100%',
    maxWidth: '1240px',
    height: '292px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  // Header title
  const titleStyle = {
    color: '#8073DA',
    fontSize: '24px',
    fontWeight: '600',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '10px',
  };

  // Main heading text
  const mainTitleStyle = {
    color: 'black',
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '1.3',
    marginBottom: '10px',
  };

  // Underline style
  const lineStyle = {
    width: '220px',
    marginTop: '5px',
  };

  // Arrow styling
  const arrowStyle = {
    width: '200px',
    position: 'absolute',
    top: '50%',
    left: '59%',
    transform: 'translate(-50%, -50%)',
  };

  // Button container
  const buttonContainerStyle = {
    background: '#8073DA',
    borderRadius: '7px',
    width: '200px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    right: '40px',
    transform: 'translateY(-50%)',
  };

  // Button text
  const buttonTextStyle = {
    color: '#FFF',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <div className="container-fluid d-flex justify-content-center" style={{marginTop:'10%'}}>
      <div style={containerStyle}>
        <Row className="h-100 align-items-center w-100">
          {/* Left Section */}
          <Col xs={12} md={5} className="d-flex flex-column justify-content-center align-items-start p-5">
            <div style={titleStyle}>Get Started</div>
            <div style={mainTitleStyle}>
              Try the AI Lesson <br />
              Planner Today
            </div>
            <img src={Line} alt="Underline" style={lineStyle} />
          </Col>

          {/* Center Section: Arrow */}
          <Col xs={12} md={2} className="d-flex justify-content-center align-items-center">
            <img src={Arrow} alt="Arrow" style={arrowStyle} />
          </Col>

          {/* Right Section: Button */}
          <Col xs={12} md={5} className="position-relative">
            <div style={buttonContainerStyle}>
              <span style={buttonTextStyle}>Get Started Now</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

