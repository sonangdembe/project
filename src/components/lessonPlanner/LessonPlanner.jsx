import React from "react";
import { Navbar } from "../funmath/Navbar";
import FirstImg from "./images/01 First Video.png";
import vector from "./images/Vector.png";
import ellipse from "./images/Ellipse 1.png";

import "./lessonPlanner.css";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { FourthPage } from "./FourthPage";
import { Fifth } from "./Fifth";
import { Sixth } from "./Sixth";
import { Last } from "./Last";

export const LessonPlanner = () => {
  return (
    <>
      <Navbar />

      {/* First Section */}
      <div className="container-fluid px-3" style={{ marginTop: "120px" }}>
        {/* Main Content Row */}
        <div className="row justify-content-center align-items-center">
          {/* Left Side - Content */}
          <div className="col-12 col-md-5">
            <div>
              <button
                className="btn btn-primary poppins-bold"
                style={{
                  backgroundColor: "rgba(224, 231, 255)",
                  color: "#4338CA",
                  borderRadius: "20px",
                  border: "none",
                }}
              >
                Category
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "14px",
                  position: "relative",
                }}
              >
                <img
                  src={ellipse}
                  alt="ellipse"
                  style={{
                    width: "35px",
                    height: "34px",
                    marginTop: "-20px",
                    marginRight: "10px",
                    position: "relative",
                  }}
                />
                <img
                  src={vector}
                  alt="vectorImg"
                  style={{
                    position: "absolute",
                    top: "32%",
                    left: "3%",
                    transform: "translate(-50%, -50%)",
                    width: "25px",
                    height: "25px",
                  }}
                />
                <h1 className="mb-4 poppins-bold">Lesson Planner</h1>
              </div>

              <p>
                The AI Lesson Planner for Teachers is a state-of-the-art tool
                designed to streamline the lesson planning process. Harnessing
                the power of artificial intelligence, this tool helps educators
                create comprehensive, customized lesson plans tailored to their
                specific teaching needs.
              </p>

              <div>
                <button
                  className="btn btn-primary poppins-medium"
                  style={{
                    backgroundColor: "#8172DB",
                    color: "white",
                    padding: "15px",
                    borderRadius: "10px",
                    border: "none",
                  }}
                >
                  See full generation here!
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image Container */}
          <div className="col-12 col-md-5">
            <img
              src={FirstImg}
              alt="Lesson Planner"
              className="img-fluid rounded"
              style={{ width: "100%", marginTop :'10px',}}
            />
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <h1 className="custom-bg rounded py-2 px-4 d-inline-block poppins-bold">
              KEY BENEFITS
            </h1>
            <p className="mt-3 poppins-medium">
              Utilizing the AI Lesson Planner offers numerous advantages for
              both teachers and students:
            </p>
          </div>
        </div>
      </div>

      {/* Additional Pages */}
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Fifth />
      <Sixth/>
      <Last/>
    </>
  );
};
