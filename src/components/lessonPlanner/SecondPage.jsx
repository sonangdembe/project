import React from 'react';
import vector from './images/Vector.png';
import ellipse from './images/Ellipse 1.png';
import rectangle from './images/Rectangle 40.png';
import polygon from './images/Polygon 1.png';
import ellipse3 from './images/Ellipse 3.png';
import ellipse2 from './images/Ellipse 2.png';
import time from './images/Time.png';
import image2 from './images/image 2.png';
import image1 from './images/image 1.png';
import image3 from './images/image 3.png';
import adaptability from './images/adaptability 1.png';




export const SecondPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-5">

          {/* First Column */}
          <div
            className="col-12 col-md-4 d-flex flex-column align-items-center text-center mb-4"
            style={{ position: 'relative', height: 'auto' }}
          >
            <div className="position-relative">
              <img
                src={ellipse3}
                alt="Ellipse 3"
                className="position-relative"
                style={{ zIndex: 1 }}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <img
                  src={ellipse2}
                  alt="Ellipse 2"
                  className="position-relative"
                  style={{ zIndex: 2 }}
                />
                <img
                  src={time}
                  alt="Time"
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{ zIndex: 3 }}
                />
              </div>
            </div>
            <h3 className="poppins-light mt-3">Time Efficiency</h3>
            <p className="poppins-medium">
              Create detailed lesson plans <br />
              in minutes instead of hours.
            </p>
          </div>

          {/* Second Column */}
          <div
            className="col-12 col-md-4 d-flex flex-column align-items-center text-center mb-4"
            style={{ position: 'relative', height: 'auto' }}
          >
            <div className="position-relative">
              <img
                src={ellipse3}
                alt="Ellipse 3"
                className="position-relative"
                style={{ zIndex: 1 }}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <img
                  src={ellipse2}
                  alt="Ellipse 2"
                  className="position-relative"
                  style={{ zIndex: 2 }}
                />
                <img
                  src={image2}
                  alt="Image 2"
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{ zIndex: 3 }}
                />
              </div>
            </div>
            <h3 className="poppins-light mt-3">Customization</h3>
            <p className="poppins-medium">
              Adjust parameters such as subject, grade level, <br />
              learning objectives, and teaching methods to suit <br />
              your classroom's needs.
            </p>
          </div>

          {/* Third Column */}
          <div
            className="col-12 col-md-4 d-flex flex-column align-items-center text-center mb-4"
            style={{ position: 'relative', height: 'auto' }}
          >
            <div className="position-relative">
              <img
                src={ellipse3}
                alt="Ellipse 3"
                className="position-relative"
                style={{ zIndex: 1 }}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <img
                  src={ellipse2}
                  alt="Ellipse 2"
                  className="position-relative"
                  style={{ zIndex: 2 }}
                />
                <img
                  src={image1}
                  alt="Image 1"
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{ zIndex: 3 }}
                />
              </div>
            </div>
            <h3 className="poppins-light mt-3">Consistency</h3>
            <p className="poppins-medium">
              AI ensures each lesson plan is <br />
              coherent and aligned with <br />
              educational standards.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="row px-5">
          <div
            className="col-12 col-md-6 d-flex flex-column align-items-center text-center mb-4"
            style={{ position: 'relative', height: 'auto' }}
          >
            <div className="position-relative">
              <img
                src={ellipse3}
                alt="Ellipse 3"
                className="position-relative"
                style={{ zIndex: 1 }}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <img src={ellipse2} alt="Ellipse 2" />
                <img
                  src={image3}
                  alt="Image 3"
                  className="position-absolute top-50 start-50 translate-middle"
                />
              </div>
            </div>
            <h3 className="poppins-light mt-3">Versatility</h3>
            <p className="poppins-medium">
              Use the planner for various subjects,<br />
              including mathematics, science,<br />
              language arts, and social studies.
            </p>
          </div>

          <div
            className="col-12 col-md-6 d-flex flex-column align-items-center text-center mb-4"
            style={{ position: 'relative', height: 'auto' }}
          >
            <div className="position-relative">
              <img
                src={ellipse3}
                alt="Ellipse 3"
                className="position-relative"
                style={{ zIndex: 1 }}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <img src={ellipse2} alt="Ellipse 2" />
                <img
                  src={adaptability}
                  alt="Adaptability"
                  className="position-absolute top-50 start-50 translate-middle"
                />
              </div>
            </div>
            <h3 className="poppins-light mt-3">Adaptability</h3>
            <p className="poppins-medium">
              Supports multiple languages,<br />
              making it ideal for diverse and<br />
              multilingual classrooms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
