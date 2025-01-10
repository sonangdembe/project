import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Hero = () => {
  const [startCount, setStartCount] = useState(false);
  const countersRef = useRef(null);

  const animateCounters = () => {
    const counters = countersRef.current.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 100; 
      let count = 0;

      const updateCounter = () => {
        count = Math.min(count + increment, target);
        counter.innerText = Math.floor(count);
        if (count < target) {
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) observer.unobserve(countersRef.current);
    };
  }, []);

  useEffect(() => {
    if (startCount) {
      animateCounters();
    }
  }, [startCount]);

  return (
    <div
      className="hero-section text-white py-5"
      style={{
        background: "linear-gradient(to bottom, rgba(33, 53, 85, 1), rgba(62, 88, 121, 0.8))",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container fluid>
        <h4 className="display-4 fw-bold text-center m-5">Our Achievement</h4>
        <Row className="align-items-center g-0">
          <Col md={6} className="text-start px-5 ">
            <h1 className="display-3 fw-bold m-5" style={{ color: '#FFC145' }}>AI Innovations</h1>
            <p className="lead m-5 fst-italic">
              Revolutionizing industries with cutting-edge AI solutions.
            </p>
            <Button variant="light" size="lg" className='m-5 ' style={{ backgroundColor: '#5CB338' }}>
              Get Started
            </Button>
          </Col>

          <Col md={6} className="d-flex justify-content-center align-items-center ">
            <div
              className="d-grid gap-4"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)", 
                textAlign: "center",
                borderCollapse: "collapse",
              }}
              ref={countersRef}
            >
              <div className="counter-box">
                <h1 className="fs-5 mb-0" style={{ color: '#FFB200' }}>Currently Enrolled</h1>
                <h3 className="counter" data-target="9999">0</h3>
              </div>

              <div className="counter-box">
                <h1 className="fs-5 mb-0" style={{ color: '#FFB200' }}>Goals Achieved</h1>
                <h3 className="counter" data-target="9987">0</h3>
              </div>

              <div className="counter-box">
                <h1 className="fs-5 mb-0" style={{ color: '#FFB200' }}>Projects Completed</h1>
                <h3 className="counter" data-target="1500">0</h3>
              </div>

              <div className="counter-box">
                <h1 className="fs-5 mb-0" style={{ color: '#FFB200' }}>AI Experts Trained</h1>
                <h3 className="counter" data-target="1200">0</h3>
              </div>

              <div className="counter-box">
                <h1 className="fs-5 mb-0" style={{ color: '#FFB200' }}>Innovative Products</h1>
                <h3 className="counter" data-target="450">0</h3>
              </div>

              <div className="counter-box">
                <h1 className="fs-5 mb-0" style={{ color: '#FFB200' }}>Years of Experience</h1>
                <h3 className="counter" data-target="25">0</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
