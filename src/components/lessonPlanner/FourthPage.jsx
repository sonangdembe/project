import React from 'react';
import rectangle68 from './images/Rectangle 68.png';
import vector1 from './images/Vector (1).png';
import blob from './images/Blob.png';
import shapebg from './images/Shape bg.png';
import group38253 from './images/Group 38253.png';
import "./lessonPlanner.css";



export const FourthPage = () => {
  return (
    <>
      <h2 className=" poppins-bold custom-bg text-center" style={{ margin: '10rem 0 5rem 0' }}>FEATURES</h2>

      <div
        className="container-fluid mt-5"
        style={{
          paddingLeft: '0', 
          paddingRight: '0', 
          margin: '0', 
          position: 'relative', 
        }}
      >
        
        <img
          src={blob}
          alt="Blob"
          className="position-absolute"
          style={{
            left: '0', 
            top: '0', 
            zIndex: -1, 
            width: '23%', 
            height: 'auto',
            minHeight: '50%', 
          }}
        />

        
        <img
          src={shapebg}
          alt="Shape BG"
          className="position-absolute"
          style={{
            right: '0', 
            top: '30%', 
            zIndex: -1, 
            width: '30%', 
            height: 'auto',
            minHeight: '30%', 
          }}
        />

        
        <img
          src={group38253}
          alt="Group 38253"
          className="position-absolute"
          style={{
            right: '10%', 
            top: '78%', 
            zIndex: -1, 
            width: '15%', 
            height: 'auto', 
          }}
        />

        <div className="row justify-content-center">
        
          {[
            {
              title: 'Multi-Language Support',
              description: 'Generate lesson plans in multiple languages, catering to diverse classrooms.',
            },
            {
              title: 'Customizable Components',
              description: 'Adjust each part of the lesson plan to meet specific classroom requirements.',
            },
            {
              title: 'Alignment with Standards',
              description: 'Ensure your lesson plans meet educational standards and best practices.',
            },
            {
              title: 'Variety of Teaching Methods',
              description: 'Incorporate a mix of teaching strategies to enhance student engagement and understanding.',
            },
            {
              title: 'Instant Lesson Creation',
              description: 'Generate detailed lesson plans in seconds, saving you valuable preparation time.',
            },
            {
              title: 'Downloadable Format',
              description: 'Download lesson plans in PDF or Word format for easy sharing and printing.',
            },
            {
              title: 'Secure Cloud Storage',
              description: 'Save and access your generated lesson plans anytime, anywhere.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
              style={{
                padding: '15px',
                flexBasis: '30%',
                zIndex: 1, 
              }}
            >
              <div
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
                <div className="position-relative d-inline-block">
                  <img src={rectangle68} alt="Rectangle" className="img-fluid w-100" />
                  <img
                    src={vector1}
                    alt="Vector 1"
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ width: '40px', height: '20px' }}
                  />
                </div>
                <p className="poppins-bold pt-4 ">{feature.title}</p>
                <p className="poppins-medium ">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
