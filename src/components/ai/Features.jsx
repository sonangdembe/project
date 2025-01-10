import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCog, FaChartLine, FaRobot } from "react-icons/fa"; // Icons from react-icons

export const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaCog className="animated-icon" size={40} />,
      title: "AI Automation",
      desc: "Streamline your processes with AI-powered automation.",
    },
    {
      id: 2,
      icon: <FaChartLine className="animated-icon" size={40} />,
      title: "Data Analytics",
      desc: "Unlock insights from your data with powerful analytics tools.",
    },
    {
      id: 3,
      icon: <FaRobot className="animated-icon" size={40} />,
      title: "Predictive Models",
      desc: "Anticipate future trends using AI-driven predictive models.",
    },
    {
      id: 4,
      icon: <FaChartLine className="animated-icon" size={40} />,
      title: "Data Analytics",
      desc: "Unlock insights from your data with powerful analytics tools.",
    },
    {
      id: 5,
      icon: <FaRobot className="animated-icon" size={40} />,
      title: "Predictive Models",
      desc: "Anticipate future trends using AI-driven predictive models.",
    },
    {
      id: 6,
      icon: <FaCog className="animated-icon" size={40} />,
      title: "AI Automation",
      desc: "Streamline your processes with AI-powered automation.",
    },
  ];

  return (
    <div
      className="features-section py-5"
      style={{
        background: "linear-gradient(to bottom, rgba(62, 88, 121, 0.8), rgba(33, 53, 85, 1))",
        animation: "gradientAnimation 10s infinite",
      }}
    >
      <Container
        fluid
        className="features-container mb-5 mt-5"
        style={{
          maxWidth: "85%",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <h1 className="display-2 fw-bold text-center mb-5">Our Features</h1>
        <Row className="text-white g-5">
          {features.map(({ id, icon, title, desc }) => (
            <Col key={id} lg={4} md={6} sm={12} className="d-flex justify-content-center">
              <Card
                className="feature-card shadow-sm border-light text-white rounded h-100"
                style={{
                  backgroundColor: "rgba(33, 53, 85, 0.1)", 
                }}
              >
                <Card.Body className="text-center">
                  <div className="mb-3">{icon}</div>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{desc}</Card.Text>
                  <Button variant="primary" href="#learn-more" className="animated-button">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;
