import React from 'react';
import rectangle68 from './images/Rectangle 68.png';
import vector1 from './images/Vector (1).png';
import vector2 from './images/Vector (2).png';  // Example for Step 2
import vector from './images/Vector.png';  // Example for Step 3
import vector3 from './images/Vector (3).png';  // Example for Step 4
import vector4 from './images/Vector (4).png';  // Example for Step 5
import vector5 from './images/Vector (5).png'; 
import group38251 from './images/Group 38251.png';
import shapebg from './images/Shape bg.png';
import blob from './images/Blob.png';
import group38253 from './images/Group 38253.png';
import "./lessonPlanner.css";

export const FourthPage = () => {
  return (
    <>
      <h2 className="poppins-bold custom-bg text-center" style={{ margin: '10rem 0 5rem 0' , padding:'2px'}}>FEATURES</h2>

      <div className="container-fluid mt-5" style={{ paddingLeft: '0', paddingRight: '0', margin: '', position: 'relative' }}>
        <div className="row justify-content-center">
          {[
            {
              title: 'Multi-Language Support',
              description: 'Generate lesson plans in multiple languages, catering to diverse classrooms.',
              image: vector1,
            },
            {
              title: 'Customizable Components',
              description: 'Adjust each part of the lesson plan to meet specific classroom requirements.',
              image: vector2,
            },
            {
              title: 'Alignment with Standards',
              description: 'Ensure your lesson plans meet educational standards and best practices.',
              image: vector,
            },
            {
              title: 'Variety of Teaching Methods',
              description: 'Incorporate a mix of teaching strategies to enhance student engagement and understanding.',
              image: vector3,
            },
            {
              title: 'Instant Lesson Creation',
              description: 'Generate detailed lesson plans in seconds, saving you valuable preparation time.',
              image: vector4,
            },
            {
              title: 'Downloadable Format',
              description: 'Download lesson plans in PDF or Word format for easy sharing and printing.',
              image: vector5,
            },
            {
              title: 'Secure Cloud Storage',
              description: 'Save and access your generated lesson plans anytime, anywhere.',
              image: group38251,
            },
          ].map((feature, index) => (
            <div
  key={index}
  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
  style={{
    padding: '15px',
    zIndex: 1,
  }}
>
  <div
    className="d-flex flex-column align-items-center justify-content-center text-center" // Center content in div
    style={{
      border: '1px solid #0000001A',
      borderRadius: '5px',
      width: '100%',
      padding: '20px',
      minHeight: '10px',
      backgroundPosition: 'center',
      opacity: 1,
    }}
  >
    <div
      className="position-relative"
      style={{
        width: '20%',
      }}
    >
      {/* Rectangle Image */}
      <img
        src={rectangle68}
        alt="Rectangle"
        className="img-fluid w-100 d-block mx-auto"
      />
      {/* Centered Image */}
      <img
        src={feature.image}
        alt={`Vector ${index + 1}`}
        className="position-absolute top-50 start-50 translate-middle"
        style={{ width: '40px', height: '20px' }}
      />
    </div>
    {/* Text Container */}
    <div
      style={{
        textAlign: 'left', // Align text to the left
        maxWidth: '90%', // Set a consistent width for text
      }}
    >
      <p className="poppins-bold pt-4">{feature.title}</p>
      <p className="poppins-medium">{feature.description}</p>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </>
  );
};

