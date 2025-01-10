import React, { useState } from "react";
import triangle from './images/triangle.png';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setFormStatus("Please fill out all required fields.");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgba(33, 53, 85, 1), rgba(62, 88, 121, 0.8))",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center items closer together
        gap: "20px", // Space between the form and image
        padding: "20px",
      }}
    >
      {/* Left Wavy Triangle */}
      {/* <div
        style={{
          position: "relative",
          flex: "0 0 30%", // Adjust size for a smaller triangle container
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={triangle}
          alt="Wavy Triangle"
          style={{
            width: "100%",
            maxWidth: "350px", // Adjust size for the triangle
            height: "auto",
            objectFit: "contain",
            borderRadius: "10px", // Rounded corners for the image
            transition: "transform 0.3s ease", // Animation effect
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div> */}

      {/* Contact Form */}
      <div
        className="form-container"
        style={{
          position: "relative",
          width: "550px", // Form width
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px", // Add padding for better spacing
        }}
      >
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="card p-4" onSubmit={handleSubmit}>
          {formStatus && (
            <div
              className={`alert ${
                formStatus.includes("successfully") ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {formStatus}
            </div>
          )}

          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject Field */}
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
            />
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message<span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
