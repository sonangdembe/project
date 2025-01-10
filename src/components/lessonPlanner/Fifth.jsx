import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import './lessonPlanner.css';
import Books from './images/books.png';
import Stars from './images/star.png';
import Pen from './images/pen.png';
import line55 from './images/Line 55.png';
import rectangle1288 from './images/Rectangle 1288.png';
import groupt38239 from './images/Group 38239.png';
import rectangle1291 from './images/Rectangle 1291.png';
import group38236 from './images/Group 38236.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageStyle = {
  width: '52px',
  height: '55px',
};

const TestimonialRectangle = ({ image, name, role, testimonial }) => (
  <div className="position-relative mb-4 mx-auto" style={{ width: '100%', maxWidth: '400px' }}>
    <img src={line55} alt="Line" className="img-fluid" />
    <img src={rectangle1288} alt="Rectangle" className="img-fluid w-100" />
    <div className="position-absolute top-0 start-0 text-left" style={{ zIndex: 1, padding: '1rem', width: '100%' }}>
      <img src={groupt38239} alt="Group" className="img-fluid p-4" />
      <p className="poppins-medium mt-3" style={{ marginLeft: '1rem' }}>{testimonial}</p>
    </div>
    <div
  className={`position-absolute w-100 w-md-75`} 
  style={{
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
  }}
>
  <img src={rectangle1291} alt="Rectangle Bottom" className="img-fluid"
  
  
  />
  <div
    className="d-flex align-items-center position-absolute"
    style={{
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      height: '90%'
    }}
  >
    <img
      src={group38236}
      alt="Inside Rectangle"
      className="img-fluid"
      style={{ maxWidth: '30%', padding: '1px' }}
    />
    <div className="text-white ms-3">
      <p className="mt-3 poppins-bold">{name}</p>
      <p className="poppins-regular">{role}</p>
    </div>
  </div>
</div>

  </div>
);

export const Fifth = () => {
  const testimonials = [
    {
      name: 'Sarah T',
      role: '5th Grade Teacher, California',
      testimonial:
        'The AI Lesson Planner has revolutionized my planning process. I save so much time, and my lesson plans are more structured.',
    },
    {
      name: 'Emma R',
      role: 'Middle School Teacher, Texas',
      testimonial:
        'With the AI Lesson Planner, I can quickly adapt my plans to different classes. The customization options are fantastic, and my students benefit ',
    },
    {
      name: 'James W',
      role: 'High School Science Teacher, New York',
      testimonial:
        "I love how intuitive and fast the AI Lesson Planner is. It’s become an essential tool in my teaching toolkit, helping me create balanced.",
    },
  ];
  return (
    <div className="py-4">
      <Container fluid>
        <Row className="mb-5 mt-5 text-center">
          <Col>
            <h1 className="text-center" style={{ fontSize: '2.5rem', fontWeight: '700', fontFamily: 'Poppins', color: '#8073DA' }}>
              WAY OF PLANNING CLASSROOM
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center g-4">
          {[{
              image: Books,
              title: 'Daily Lesson Planning',
              text: 'Create detailed daily lesson plans that cover all essential components of effective teaching.',
            },
            {
              image: Stars,
              title: 'Weekly and Monthly Outlines',
              text: 'Develop comprehensive weekly and monthly lesson outlines to ensure continuity and progression in learning.',
            },
            {
              image: Pen,
              title: 'Differentiated Instruction',
              text: 'Generate lesson plans tailored to different learning abilities and needs, ensuring all students are catered for.',
            },
          ].map((card, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <div
                className="card shadow-sm mx-auto"
                style={{
                  maxWidth: '339px',
                  border: '5px solid #8073DA',
                  backgroundColor: 'white',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                <div className="text-center mt-4">
                  <img src={card.image} alt="Icon" style={imageStyle} />
                </div>
                <div className="card-body">
                  <h5 className="card-title poppins-light">{card.title}</h5>
                  <div className="border-top border-primary my-2 mx-auto" style={{ width: '49px' }}></div>
                  <p className="card-text poppins-regular">{card.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 d-flex flex-column flex-md-row justify-content-around">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4} sm={12} className="d-flex justify-content-center">
              <TestimonialRectangle
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
