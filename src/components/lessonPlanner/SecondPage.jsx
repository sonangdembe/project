import React from 'react'
import vector from "./images/Vector.png";
import ellipse from "./images/Ellipse 1.png";
import rectangle from "./images/Rectangle 40.png";
import polygon from "./images/Polygon 1.png";
import ellipse3 from "./images/Ellipse 3.png";
import ellipse2 from "./images/Ellipse 2.png";
import time from "./images/Time.png";
import image2 from "./images/image 2.png";
import image1 from "./images/image 1.png";
import image3 from "./images/image 3.png";
import adaptability from  "./images/adaptability 1.png";
export const SecondPage = () => {
  return (
    <>
           <div className="">
<div className="row px-5">

<div
    className="col-4 d-flex align-items-center px-5"
    style={{ position: 'relative', height: '300px' }}
  >

<div className="position-relative px-5">
  <img
    src={ellipse3}
    alt="Ellipse 3"
    className="position-relative px-5"
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
  </div>


  <div
    className="col-4 d-flex justify-content-center align-items-center"
    style={{ position: 'relative', height: '300px' }}
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
  </div>

  <div
    className="col-4 d-flex justify-content-end align-items-center px-5"
    style={{ position: 'relative', height: '300px' }}
  >

    <div className="position-relative px-5">
      <img
        src={ellipse3}
        alt="Ellipse 3"
        className="position-relative px-5"
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
  </div>
</div>



  
<div className="row text-center">
  <div className="col-4">
    <h3 className="poppins-light mb-2">Time Efficiency</h3> {/* Reduced margin-bottom */}
    <p className="poppins-medium mb-0">
      Create detailed lesson plans <br />
      in minutes instead of hours.
    </p> {/* Removed margin-bottom */}
  </div>
  <div className="col-4">
    <h3 className="poppins-light mb-2">Customization</h3> {/* Reduced margin-bottom */}
    <p className="poppins-medium mb-0">
      Adjust parameters such as subject, grade level, <br />
      learning objectives, and teaching methods to suit <br />
      your classroom's needs.
    </p> {/* Removed margin-bottom */}
  </div>
  <div className="col-4">
    <h3 className="poppins-light mb-2">Consistency</h3> {/* Reduced margin-bottom */}
    <p className="poppins-medium mb-0">
      AI ensures each lesson plan is <br />
      coherent and aligned with <br />
      educational standards.
    </p> {/* Removed margin-bottom */}
  </div>
</div>




  <div className="row mt-4">
    <div className="col-6 d-flex justify-content-center align-items-center" style={{ position: 'relative', height: '300px' }}>
      <img src={ellipse3} alt="Ellipse 1" className="position-relative w-2" style={{ zIndex: 1 }} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <img src={ellipse2} alt="Ellipse 2" className="w-3" />
        <img src={image3} alt="Image 3" className="position-absolute top-50 start-50 translate-middle w-10" />
      </div>
    </div>
    <div className="col-6 d-flex justify-content-center align-items-center" style={{ position: 'relative', height: '300px' }}>
      <img src={ellipse3} alt="Ellipse 1" className="position-relative w-2" style={{ zIndex: 1 }} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <img src={ellipse2} alt="Ellipse 2" className="w-3" />
        <img src={adaptability} alt="Adaptability" className="position-absolute top-50 start-50 translate-middle w-10" />
      </div>
    </div>
  </div>
  <div className="row text-center">
  <div className="col-6 d-flex flex-column justify-content-center">
    <h3 className="poppins-light mb-2">Versatility</h3>
    <p className="poppins-medium mb-0">
      Use the planner for various subjects,<br />
      including mathematics, science,<br />
      language arts, and social studies.
    </p> 
  </div>
  <div className="col-6 d-flex flex-column justify-content-center">
    <h3 className="poppins-light mb-2">Adaptability</h3> 
    <p className="poppins-medium mb-0">
      Supports multiple languages,<br />
      making it ideal for diverse and<br />
      multilingual classrooms.
    </p> 
  </div>
</div>


</div>
    </>
  )
}
