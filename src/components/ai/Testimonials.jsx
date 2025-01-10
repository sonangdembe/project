import React, { useEffect } from "react";
import a from "./images/a.png";
import b from "./images/b.png";
import c from "./images/c.png";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Only animate once
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
              data-aos="zoom-in" // Apply AOS zoom-in animation
              data-aos-delay={index * 100} // Delay each item slightly
            >
              {/* Add image with infinite zoom animation */}
              <div
                className="img-container"
                style={{
                  overflow: "hidden", // Ensure the image doesn't spill outside
                  borderRadius: "15px", // Optional for rounded corners
                  width: "100%",
                  height: "500px", // Set a fixed height for all containers (match image c's height)
                  maxWidth: "700px", // Increase the max width to make it wider
                  marginBottom: "30px",
                  display: "flex", // Allow for centering
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  style={{
                    width: "100%", // Set the width to 100% of the container
                    height: "70%", // Ensure the height fills the container
                    objectFit: "cover", // Maintain aspect ratio
                    animation: "zoomInOut 10s infinite ease-in-out", // Infinite zoom effect
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
