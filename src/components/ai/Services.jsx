import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import img from "./images/aiCons.webp";
import img2 from "./images/deve.jpg";
import img3 from "./images/gene.jpg";
import "aos/dist/aos.css"; // Import AOS styles
import "./AI.css"; // Optional custom styles

export const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 100, // Offset to trigger animation
      easing: "ease-in-out", // Animation easing
      once: true, // Only animate once
    });
  }, []);

  const services = [
    { title: "AI Consulting ", description:'this is the demo of the text and this just for checking text', image: img },
    { title: "Custom AI Solutions", description:" is the demo of the text and this just for checking text", image: img2 },
    { title: "AI Model Deployment ", description:"is the demo of the text and this just for checking text", image: img3 },
  ];

  return (
    <div
      className="services-section py-5"
      style={{
        background: "linear-gradient(to bottom, rgba(33, 53, 85, 1), rgba(62, 88, 121, 0.8))",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}> {/* Increase container width */}
        <h4 className="display-4 fw-bold text-center  text-white mb-5" data-aos="fade-down">
          Our Services
        </h4>
        <Row className="g-4 ">
          {services.map((service, index) => (
            <Col key={index} md={4} sm={6} data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card className="service-card shadow-sm border-light rounded h-100">
                {/* Image with dynamic background */}
                <div
                  className="service-image"
                  style={{
                    backgroundImage: `url(${service.image})`, // Dynamically assign image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px", // Make image container larger
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                ></div>
                <Card.Body className="d-flex flex-column justify-content-center text-center">
                  <h4 className="text-black ">{service.title}</h4>
                  <p className="text-black fst-italic">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
