import React, { useEffect } from "react";
import a from "./images/a.png";
import b from "./images/b.png";
import c from "./images/c.png";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; 

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This company transformed our business with AI.",
      name: "John Doe team",
      image: a,
    },
    {
      quote: "Amazing service and great results!",
      name: "Jane Smith team",
      image: b,
    },
    {
      quote: "Highly recommend their AI solutions.",
      name: "Michael Brown team",
      image: c,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
    });
  }, []);

  return (
    <div
      className="testimonials-section py-5 bg-light"
      style={{
        background: "linear-gradient(to bottom, rgba(62, 88, 121, 0.8), rgba(33, 53, 85, 1))",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}>
        <h5 className="display-4 fw-bold text-center mb-5">
          Our Projects
        </h5>
        <Row className="justify-content-center g-5">
          {testimonials.map((testimonial, index) => (
            <Col
              key={index}
              md={4}
              sm={6}
              className="text-center"
              data-aos="zoom-in" 
              data-aos-delay={index * 100} 
            >
              
              <div
                className="img-container"
                style={{
                  overflow: "hidden", 
                  borderRadius: "15px",
                  width: "100%",
                  height: "500px", 
                  maxWidth: "700px", 
                  marginBottom: "30px",
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "70%", 
                    objectFit: "cover", 
                    animation: "zoomInOut 10s infinite ease-in-out", 
                  }}
                />
              </div>
              <blockquote className="blockquote text-white">
                <p className="mb-0" style={{ fontSize: "20px", fontStyle: "italic" }}>
                  {testimonial.quote}
                </p>
                <footer className="blockquote-footer text-white mt-2" style={{ fontSize: "18px" }}>
                  {testimonial.name}
                </footer>
              </blockquote>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
