
import React from 'react';
import icon from './images/Icon.png'
import vocab from './images/Vocabulary Builder.png'
import rubik from './images/Intersect.png'
import group15 from './images/Group 15.png'
import rectangle63 from './images/Rectangle 63.png'
import logo from './images/logo.png'

export const Last = () => {
  // Inline styles defined as objects
  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    marginTop:"10%",
  };

  const titleStyle = {
    fontSize: '51px',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    fontSize: '25px',
    fontWeight: '500',
    color: '#000',
  };

  const cardStyle = {
    width: '306px',
    height: '411px',
    borderRadius: '9px',
    background: '#fff',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25)',
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
  };

  const cardSubtitleStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#9747FF',
    opacity: '0.5',
  };

  const buttonStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    background: '#9747FF',
    borderRadius: '10px',
    border: 'none',
    padding: '10px 20px',
  };

  return (
    <>
    <div className="tools-container container-fluid px-4 py-5" style={containerStyle}>
    <div className="row justify-content-center">
      {/* Title Section */}
      <div className="col-12 text-center mb-4">
        <h1 className="tools-title" style={{ ...titleStyle, color: '#8F70EA' }}>
          Related AI Tools
        </h1>
        <h1 className="tools-title" style={{ ...titleStyle, color: '#000' }}>
          For Teachers
        </h1>
      </div>
      <div className="col-12 text-center mb-5">
        <p className="tools-description" style={descriptionStyle}>
          Explore other tools designed to make teaching easier:
        </p>
      </div>
    </div>
  
    {/* Cards Section */}
    <div className="row g-4">
      {/* AI Quiz Generator Card */}
      <div className="col-12 col-md-6 col-lg-4" >
        <div className="card custom-card h-100 p-4" style={cardStyle}>
          <div className="card-body text-center d-flex flex-column align-items-center justify-content-between">
            <img
              src={icon}
              alt="AI Quiz Generator"
              className="img-fluid rounded-circle mb-3"
            />
            <h5 className="tools-card-title" style={cardTitleStyle}>
              AI Quiz Generator
            </h5>
            <p className="tools-card-subtitle" style={cardSubtitleStyle}>
              For Teachers
            </p>
            <button className="tools-card-button mt-3" style={buttonStyle}>
              Try Creating
            </button>
          </div>
        </div>
      </div>
  
      {/* Vocabulary Builder Card */}
      <div className="col-12 col-md-6 col-lg-4 ">
        <div className="card custom-card h-100 p-4" style={cardStyle}>
          <div className="card-body text-center d-flex flex-column align-items-center justify-content-between">
            <img
              src={vocab}
              alt="Vocabulary Builder"
              className="img-fluid rounded-circle mb-3"
            />
            <h5 className="tools-card-title" style={cardTitleStyle}>
              Vocabulary Builder
            </h5>
            <p className="tools-card-subtitle" style={cardSubtitleStyle}>
              For Students
            </p>
            <button className="tools-card-button mt-3" style={buttonStyle}>
              Try Creating
            </button>
          </div>
        </div>
      </div>
  
      {/* Rubric Generator Card */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card custom-card h-100 p-4" style={cardStyle}>
          <div className="card-body text-center d-flex flex-column align-items-center justify-content-between">
            <img
              src={rubik}
              alt="Rubric Generator"
              className="img-fluid rounded-circle mb-3"
            />
            <h5 className="tools-card-title" style={cardTitleStyle}>
              Rubric Generator
            </h5>
            <p className="tools-card-subtitle" style={cardSubtitleStyle}>
              For Grading
            </p>
            <button className="tools-card-button mt-3" style={buttonStyle}>
              Try Creating
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  



  <div className="container-fluid">
  {/* Background container with rectangle63 as the background */}
  <div className="row justify-content-start mt-5" style={{ backgroundImage: `url(${rectangle63})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
    
    {/* Content on the left side */}
    <div className="col-12 col-md-3 d-flex flex-column align-items-start p-4">
      {/* Logo at the top left */}
      <img src={logo} alt="Logo" className="mb-3" style={{ width: '50%' }} />
      
      {/* Description */}
      <p>Gamified learning platform to engage young minds.</p>
    </div>

    {/* Content on the right side (Solutions, Affiliate, Others) */}
    <div className="col-12 col-md-9">
      <div className="row mt-4">
        
        {/* Solutions Section */}
        <div className="col-12 col-md-4 mb-3 ">
          <h5>Solution</h5>
          <p>Content Generator</p>
          <p>Teaching Assistance</p>
        </div>

        {/* Affiliate Section */}
        <div className="col-12 col-md-4 mb-3">
          <h5>Affiliate</h5>
          <p>Become an affiliate</p>
          <p>Affiliate Terms and Conditions</p>
          <p>Affiliate FAQ</p>
        </div>

        {/* Others Section */}
        <div className="col-12 col-md-4 mb-3">
          <h5>Others</h5>
          <p>Privacy Policy</p>
          <p>FAQ’s</p>
          <p>Contact Us</p>
        </div>
        
      </div>
    </div>
 

  {/* Footer Section */}
  <div className="row justify-content-center p-3">
    <p className="text-center m-0">© 2024 Danson Solution. All rights reserved.</p>
  </div>
  </div>
</div>


</>

  );
};

