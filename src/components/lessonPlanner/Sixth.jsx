import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ellipse295 from './images/Ellipse 295.png';
import ellipse29 from './images/Ellipse 295 (2).png';
import chimpu from './images/Chimpu.png';
import moneyIcons from './images/Money Icons.png';
import rectangle1292 from './images/Rectangle 1292.png';
import rectangle1293 from './images/Rectangle 1293.png';
import rectangle1294 from './images/Rectangle 1294.png';
import vector from './images/Vector (6).png';
import line56 from './images/Line 56.png';
import line57 from './images/Line 57.png';
import tick from './images/tick.png';
import rectangle1296 from './images/Rectangle 1296.png';
import arrow from './images/arrow.png';
import line from './images/line.png';

import "./lessonPlanner.css";
import { GetStarted } from './GetStarted';


export const Sixth = () => {
  return (
<>



    <Container fluid>
      {/* Header Section */}
      <Row className="text-center py-5">

  <Col
    md={4}
    xs={12}
    className="d-flex flex-column justify-content-center align-items-center align-items-md-start"
  >
    <h1 className="font-weight-bold text-black">
      Manual <br />
      <span className="text-warning">Lesson</span>
      <br />
      Planning
    </h1>
  </Col>

  <Col
    md={4}
    xs={12}
    className="d-flex justify-content-center align-items-center my-3 my-md-0"
  >
    <span className="display-1 font-weight-bold text-black">VS</span>
  </Col>


  <Col
    md={4}
    xs={12}
    className="d-flex flex-column justify-content-center align-items-center align-items-md-end"
  >
    <h1 className="font-weight-bold text-black">
      AI <br />
      <span className="text-primary">Lesson</span>
      <br />
      Planner
    </h1>
  </Col>
</Row>



      {/* Content Section */}
      <Row className="justify-content-center py-5">

        <Col md={3} xs={12} className="mb-4">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="d-flex align-items-center gap-3 mb-4">
              <div
                style={{
                  width: "35.69px",
                  height: "35.69px",
                  backgroundColor: "#EB9800",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "17.85px",
                  fontWeight: "600",
                }}
              >
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"][index]}
              </div>
              <div
                style={{
                  color: "#EB9800",
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
              >
                {
                  [
                    "Several hours per lesson",
                    "High, but time-consuming",
                    "Variable",
                    "Limited",
                    "Time-consuming adjustments",
                    "Requires effort",
                    "Time-consuming",
                    "Requires expertise",
                    "Depends on teacher’s effort",
                  ][index]
                }
              </div>
            </div>
          ))}
        </Col>


        <Col md={3} xs={12} className="d-flex flex-column align-items-center mb-4">
          <div
            style={{
              width: "100%",
              maxWidth: "361px",
              height: "100%",
              borderRadius: "18px",
              border: "1px solid rgba(0, 0, 0, 0.10)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            {[
              "Time Efficiency",
              "Customization",
              "Consistency",
              "Versatility",
              "Adaptability",
              "Alignment with Standards",
              "Cost",
              "Ease of Use",
              "Overall Effectiveness",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: index < 8 ? "30px" : "0",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </Col>


        <Col md={3} xs={12} className="mb-4">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="d-flex align-items-center gap-3 mb-4">
              <div
                style={{
                  width: "35.69px",
                  height: "35.69px",
                  backgroundColor: "#8F70EA",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "17.85px",
                  fontWeight: "600",
                }}
              >
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"][index]}
              </div>
              <div
                style={{
                  color: "#8073DA",
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
              >
                {
                  [
                    "Minutes per lesson",
                    "Extensive with minimal effort",
                    "High and standardized",
                    "High across subjects and languages",
                    "Quick and seamless adjustments",
                    "Automatic",
                    "Free/basic, premium for advanced",
                    "User-friendly",
                    "Enhanced by automation",
                  ][index]
                }
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>



{/* Save your money */}
<div className="container-fluid">
  {/* Start Your Free Plan Section */}
  <div className="row">
    <div className="col-12 col-md-4" style={{ position: 'relative' }}>
      <img 
        src={rectangle1292} 
        alt="Rectangle 1292" 
        className="img-fluid" 
        style={{
          width: '100%', 
          height: 'auto',
          objectFit: 'cover', 
          marginBottom: '1rem'
        }}
      />
      <div className="position-absolute top-50 start-0 translate-middle-y" style={{ zIndex: 10 }}>
        <div className="p-4" style={{ marginLeft: '2rem', textAlign: 'left' }}>
          <h2 className="text-white poppins-light p-2 mt-5">Save your</h2>
          <h1 className="text-white poppins-extrabold p-2">money now.</h1>
          <p className="poppins-regular text-white p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="d-flex justify-content-center position-relative">
          <img src={moneyIcons} alt="Money Icons" className="img-fluid" />
          <div className="position-absolute top-50 start-50 translate-middle">
            <img src={chimpu} alt="Chimpu" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    {/* Start Now Section */}
    <div className="col-12 col-md-8 mt-5">
      <h1 className="poppins-light mt-5">Start now</h1>
      <h1 className="p-4 poppins-light">your free plan.</h1>
    </div>
  </div>

  {/* Rectangles Section */}
  <div className="row">
    {/* For Teachers Rectangle */}
    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center" style={{ height: '35rem', position: 'relative' }}>
      <img
        src={rectangle1293}
        alt="Rectangle 1293"
        className="img-fluid"
        style={{ marginTop: '37px', width: '100%', height: '31rem', zIndex: 0 }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '80%',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            color: 'black',
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: 0, color: 'black' }}>For Teachers</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: 0, color: 'black' }}>Free</p>
        </div>
        <img
          src={line56}
          alt="Divider Line"
          style={{ width: '10%', margin: '0 auto 1rem 1rem', display: 'block', float: 'left' }}
        />
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '4rem',
            color: 'black',
          }}
        >
          Plan includes:
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            justifyContent: 'flex-start',
          }}
        >
          <img src={vector} alt="Tick" style={{ width: '20px', marginRight: '10px' }} />
          <p style={{ margin: 0, color: 'black' }}>Create Quizzes.</p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            justifyContent: 'flex-start',
          }}
        >
          <img src={vector} alt="Tick" style={{ width: '20px', marginRight: '10px' }} />
          <p style={{ margin: 0, color: 'black' }}>Download Quizzes.</p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            justifyContent: 'flex-start',
          }}
        >
          <img src={vector} alt="Tick" style={{ width: '20px', marginRight: '10px' }} />
          <p style={{ margin: 0, color: 'black' }}>Share Quizzes.</p>
        </div>
        <button
          className="bg-colors text-black mt-3 p-3 rounded"
          style={{
            position: 'absolute',
            top: '105%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'block',
          }}
        >
          Start Free Plan
        </button>
      </div>
    </div>

    {/* Premium Rectangle */}
    <div className="col-12 col-md-6 mb-4 d-flex justify-content-end" style={{ height: '35rem', position: 'relative' }}>
      <img
        src={rectangle1294}
        alt="Rectangle 1294"
        className="img-fluid"
        style={{ marginTop: '37px', width: '100%', height: '31rem', zIndex: 0 }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '80%',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            color: 'white',
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: 0 }}>Premium</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: 0 }}>Free</p>
        </div>
        <img
          src={line57}
          alt="Divider Line"
          style={{ width: '10%', margin: '0 auto 1rem 1rem', display: 'block', float: 'left' }}
        />
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '4rem',
            color: 'white',
          }}
        >
          Extensive customization option:
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            justifyContent: 'flex-start',
          }}
        >
          <img src={tick} alt="Tick" style={{ width: '20px', marginRight: '10px' }} />
          <p style={{ margin: 0, color: 'white' }}>Class-based tracking.</p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            justifyContent: 'flex-start',
          }}
        >
          <img src={tick} alt="Tick" style={{ width: '20px', marginRight: '10px' }} />
          <p style={{ margin: 0, color: 'white' }}>Class-based Performance Analysis.</p>
        </div>
        <button
          className="bg-colors text-black mt-3 p-3 rounded"
          style={{
            position: 'absolute',
            top: '115%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'block',
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>


<GetStarted/>

</>
  )
}
