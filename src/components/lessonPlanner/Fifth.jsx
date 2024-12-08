import React from 'react';
import './lessonPlanner.css';
import group38226 from './images/Group 38226.png';
import group38227 from './images/Group 38227.png';
import group38228 from './images/Group 38228.png';
import line55 from './images/Line 55.png';
import rectangle1288 from './images/Rectangle 1288.png';
import groupt38239 from './images/Group 38239.png';
import rectangle1291 from './images/Rectangle 1291.png';
import group38236 from './images/Group 38236.png';

// Reusable TestimonialRectangle Component
const TestimonialRectangle = ({ image, name, role, testimonial }) => (
  <div className="position-relative mb-4" style={{ width: '100%', maxWidth: '400px' }}>
    {/* Background Layers */}
    <img src={line55} alt="Line" className="img-fluid" style={{ maxWidth: '100%' }} />
    <img src={rectangle1288} alt="Rectangle" className="img-fluid" style={{ width: '100%' }} />

    {/* Content */}
    <div className="position-absolute top-0 start-0 text-left" style={{ zIndex: 1, padding: '1rem', width: '100%' }}>
      <img src={groupt38239} alt="Group" className="img-fluid p-4" style={{ maxWidth: '100%', height: '100%' }} />
      <p className="poppins-medium" style={{ marginLeft: '1rem', paddingTop: '7rem' }}>
        {testimonial}
      </p>
    </div>

    {/* Footer with Group Image Inside Rectangle */}
    <div
      className="position-absolute"
      style={{
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
      }}
    >
      {/* Rectangle Bottom */}
      <img src={rectangle1291} alt="Rectangle Bottom" className="img-fluid" style={{ width: '100%' }} />

      {/* Content Inside Rectangle */}
      <div
        className="d-flex align-items-center position-absolute"
        style={{
          top: '50%', // Adjust as needed for vertical alignment
          left: '40%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
        }}
      >
        {/* Group Image Positioned Inside Rectangle */}
        <img
          src={group38236}
          alt="Inside Rectangle"
          className="img-fluid"
          style={{
            maxWidth: '30%',
            padding: '1px',
          }}
        />
        <div className="text-white" style={{ marginLeft: '1rem', whiteSpace: 'nowrap' }}>
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
        'The AI Lesson Planner has revolutionized my planning process. I save so much time, and my lesson plans are more structured and engaging than ever before.',
    },
    {
      name: 'Emma R',
      role: 'Middle School Teacher, Texas',
      testimonial:
        'With the AI Lesson Planner, I can quickly adapt my plans to different classes. The customization options are fantastic, and my students benefit from well-organized lessons.',
    },
    {
      name: 'James W',
      role: 'High School Science Teacher, New York',
      testimonial:
        "I love how intuitive and fast the AI Lesson Planner is. It’s become an essential tool in my teaching toolkit, helping me create balanced and effective lesson plans.",
    },
  ];

  return (
    <>
      <h1 className="custom-bg poppins-bold text-center" style={{ marginTop: '15rem' }}>
        WAY OF PLANNING CLASSROOM
      </h1>

      {/* Flexbox for the images with responsive adjustments */}
      <div className="d-flex justify-content-between flex-wrap" style={{ margin: '4rem 7rem 4rem 4rem' }}>
        <div className="col-12 col-md-4 mb-3">
          <img src={group38226} alt="img" className="mx-3 img-fluid" />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src={group38227} alt="" className="mx-3 img-fluid" />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src={group38228} alt="" className="mx-3 img-fluid" />
        </div>
      </div>

      <h1 className="custom-bg poppins-bold text-center" style={{ margin: '8rem 0 5rem 0' }}>
        TEACHER TESTIMONIALS
      </h1>

      {/* Render Testimonials Dynamically */}
      <div className="d-flex justify-content-between flex-column-reverse flex-md-row" style={{ margin: '4rem', padding: 'rem' }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialRectangle
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </>
  );
};
