import React from 'react';
import stepVideo from "./images/Step Video.png";

const Step = ({ stepNumber, title, description, bgColor, textColor }) => {
  return (
    <div className="col-md-6">
      <div className="bg-white shadow p-4 rounded-5 m-5">
        <button
          className="btn btn-primary poppins-bold"
          style={{
            backgroundColor: bgColor, // Unique background for each step
            color: textColor, // Unique text color for each step
            borderRadius: "20px",
            padding: '4px',
            margin: '4px 0 4px 0',
            border: "none",
          }}
        >
          Step {stepNumber}
        </button>
        <h3 className="poppins-bold">{title}</h3>
        <p
          className="poppins-medium"
          style={{
            backgroundColor: bgColor, // Matches the button color
            color: textColor, // Matches the button text color
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const ThirdPage = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Select Subject and Grade Level",
      description: `Begin by entering the subject and grade level you’re planning for, such as "Mathematics" for Grade 5.`,
      bgColor: "#CEFAFE", // Light Blue
      textColor: "#000000", // Dark Blue
    },
    {
      stepNumber: 2,
      title: "Define Learning Objectives",
      description: `Specify the learning objectives you aim to achieve with your lesson, ensuring they are clear and measurable.`,
      bgColor: "#FEF9C3", // Light Orange
      textColor: "#000", // Dark Orange
    },
    {
      stepNumber: 3,
      title: "Choose Teaching Methods",
      description: `Select from a variety of teaching methods, including direct instruction, group work, hands-on activities, and multimedia resources.`,
      bgColor: "#E6FFE6", // Light Green
      textColor: "#000", // Dark Green
    },
    {
      stepNumber: 4,
      title: "Customize Lesson Components",
      description: `Tailor each component of the lesson plan, including the introduction, activities, assessments, and conclusion, to fit your teaching style and student needs.`,
      bgColor: "#C8C0FF", // Light Purple
      textColor: "#000", // Dark Purple
    },
    {
      stepNumber: 5,
      title: "Generate Lesson Plan",
      description: `Click on the 'Generate' button, and the AI instantly creates a comprehensive lesson plan ready to be implemented in your classroom.`,
      bgColor: "#FFD994", // Light Red
      textColor: "#000", // Dark Red
    },
  ];

  return (
    <>
      <h3 className="mt-5 text-center poppins-bold custom-bg">How to Use</h3>
      <h3 className="text-center poppins-bold">AI Quiz Generator for Teachers</h3>

      <div className="mx-auto rounded-lg pl-5 ml-3">
        <div className="row min-vh-100">
          {steps.slice(0, 4).map((step) => (
            <Step
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
              textColor={step.textColor}
            />
          ))}
        </div>
      </div>

      {/* Separate container for Step 5 */}

      <div className="d-flex justify-content-center align-items-center ">
        <div className=" p-4 rounded-5 ">
          <Step
            stepNumber={5}
            title="Generate Lesson Plan"
            description="Click on the 'Generate' button, and the AI instantly creates a comprehensive lesson plan ready to be implemented in your classroom."
            bgColor="#FFD994" // Light Red
            textColor="#000" // Dark Red
          />
        </div>
      </div>
      
      <div className="d-flex justify-content-center align-items-center">
  <img 
    src={stepVideo} 
    className="img-fluid" 
    alt="Step Video" 
  />
</div>



    </>
  );
};
