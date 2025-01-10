import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaBrain } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from './Button';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import './AI.css';
import { Hero } from './Hero';
import { Features } from './Features';
import { Services } from './Services';
import { Footer } from './Footer';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';

export const Home = () => {
  const [showElements, setShowElements] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    setShowElements(false);
    const timeout = setTimeout(() => setShowElements(true), 500);
    return () => clearTimeout(timeout);
  }, [carouselIndex]);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const slideContent = [
    {
      heading: (
        <>
          DIGITAL MARKETING <br /> AGENCY WITH AI
        </>
      ),
      paragraph: (
        <>
          An influencer marketing, our success is based on PR, <br />
          innovation technology and deep learning that <br />
          have direct impact on the youth.
        </>
      ),
    },
    {
      heading: (
        <>
          YOUR WELCOME <br /> DANSON SOLUTION
        </>
      ),
      paragraph: (
        <>
          Our marketing expertise uses PR, <br />
          innovation technology and deep learning to <br />
          empower youth.
        </>
      ),
    },
    {
      heading: (
        <>
          HELLO IT'S AI <br /> CHIMPU
        </>
      ),
      paragraph: (
        <>
          AI marketing solutions that transform the <br />
          way businesses connect with their customers.
        </>
      ),
    },
    {
      heading: (
        <>
          TECH WORLD <br /> AI WORLD
        </>
      ),
      paragraph: (
        <>
          Empowering technology with AI-driven solutions <br />
          that innovate and inspire.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="home-container">
        <div className="col-12 position-relative carousel-container">
          <Carousel
            activeIndex={carouselIndex}
            onSelect={handleSelect}
            interval={3000}
            pause="hover"
            indicators={true}
            controls={true}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>

          {/* Mission Button */}
          <button
            className="border-1 border-white rounded-pill bg-transparent text-white p-2 position-absolute"
            style={{
              left: '5%',
              top: '15%',
              zIndex: 10,
            }}
          >
            <FaBrain className="m-1" size={25} /> MISSION GLOBAL MARKETING
          </button>

          {/* Slide Content */}
          <div
            className="position-absolute"
            style={{
              top: '30%',
              left: '5%',
              zIndex: 10,
              width: '90%',
            }}
          >
            <h1 className={`text-white ${showElements ? 'text-animation' : ''} text-start`} style={{ fontSize: 'calc(1.5rem + 2vw)' }}>
              {slideContent[carouselIndex]?.heading}
            </h1>

            <div className="mt-3">
              <p className={`text-white ${showElements ? 'paragraph-animation' : ''} text-start`} style={{ fontSize: 'calc(0.8rem + 1vw)' }}>
                {slideContent[carouselIndex]?.paragraph}
              </p>

              {/* Discover Button */}
              {showElements && (
                <Button
                  text="Discover Now"
                  style={{
                    color: 'white',
                    backgroundColor: '#213555',
                    width: '100%',
                    maxWidth: '200px',
                  }}
                  icon={<FaArrowRightLong size={20} className="m-2" />}
                  className="button-animation mt-5 pt-5"
                />
              )}
            </div>
          </div>
        </div>

        {/* About Us Section */}
          <Hero />
 <Features/>   
 <Services/> 
 <Testimonials /> 
<Contact/>
 <Footer/>  
      </div>
    </>
  );
};
