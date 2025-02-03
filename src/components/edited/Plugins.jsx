import React, { useState, useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./pp.css";

export const Plugins = () => {
  const [slides, setSlides] = useState([]); // Initialize slides as an empty array
  const [selectedSlideId, setSelectedSlideId] = useState(null);

  // Handle content change and update the relevant slide
  const handleSlideContentChange = (e, field) => {
    const { value } = e.target;

    setSlides((prevSlides) =>
      prevSlides.map((slide) =>
        slide.id === selectedSlideId
          ? { ...slide, [field]: value } // Update title or content correctly
          : slide
      )
    );
  };

  const handleAddSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      title: `New Slide ${slides.length + 1}`,
      content: "Content goes here...",
    };
    setSlides([...slides, newSlide]);
    setSelectedSlideId(newSlide.id);
  };

  const initializeReveal = () => {
    const deck = new Reveal();
    deck.initialize();
  };

  useEffect(() => {
    if (slides.length > 0) {
      initializeReveal();
    }
  }, [slides]); // Reinitialize Reveal.js when slides change

  // When a slide is selected, update the selected slide ID
  const handleSlideSelection = (slideId) => {
    setSelectedSlideId(slideId);
  };

  // Get selected slide data
  const selectedSlide = slides.find((slide) => slide.id === selectedSlideId);

  return (
    <div className="d-flex vh-100">
      {/* Slide Sidebar (Left side, increased size) */}
      <div
        className="slide-sidebar p-3"
        style={{
          width: "30%",
          height: "100vh", // Sidebar takes full height of the viewport
          overflowY: "auto", // Allow scrolling if content overflows
        }}
      >
        <h2 className="h5 mb-4">Slides</h2>
        <ul className="list-group">
          {slides.map((slide) => (
            <li
              key={slide.id}
              className={`list-group-item list-group-item-action ${
                selectedSlideId === slide.id ? "active" : ""
              }`}
              onClick={() => handleSlideSelection(slide.id)}
              style={{
                cursor: "pointer",
                backgroundColor: selectedSlideId === slide.id ? "#E8F9FF" : "",
                color: selectedSlideId === slide.id ? "#fff" : "",
                height: "160px", // Slightly increased height for better content visibility
                overflowY: "auto", // Scroll if content exceeds height
                marginBottom: "10px", // Margin between slides for better spacing
              }}
            >
              <input
                type="text"
                value={slide.title}
                onChange={(e) => handleSlideContentChange(e, "title")}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#000",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "100%",
                  padding: "10px", // Add padding for better spacing
                }}
              />
              <textarea
                value={slide.content}
                onChange={(e) => handleSlideContentChange(e, "content")}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#000",
                  fontSize: "14px",
                  width: "100%",
                  height: "80px", // Space for content
                  resize: "none",
                  padding: "8px", // Padding for better input area
                  marginTop: "8px", // Margin between title and content
                }}
              />
            </li>
          ))}
        </ul>
        <button
          className="btn btn-success mt-4 w-100"
          onClick={handleAddSlide}
          style={{
            padding: "10px", // Padding to make button more comfortable
            fontSize: "16px", // Font size for button text
          }}
        >
          Add New Slide
        </button>
      </div>

      {/* Main Content Area (Right side) */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Reveal.js Presentation */}
        <div
          className="reveal-wrapper flex-grow-1 bg-light p-3"
          style={{ height: "calc(100vh - 50px)" }}
        >
          <div className="reveal">
            <div className="slides">
              {/* Display the selected slide content */}
              {selectedSlide && (
                <section>
                  {/* Editable Title */}
                  <h2
  contentEditable
  suppressContentEditableWarning
  onBlur={(e) => {
    handleSlideContentChange({ target: { value: e.target.textContent } }, "title");
  }}
  style={{
    cursor: "text",
    textAlign: "center",
    fontSize: "2rem",
  }}
>
  {selectedSlide.title}
</h2>

<p
  contentEditable
  suppressContentEditableWarning
  onBlur={(e) => {
    handleSlideContentChange({ target: { value: e.target.textContent } }, "content");
  }}
  style={{
    cursor: "text",
    fontSize: "1.2rem",
  }}
>
  {selectedSlide.content}
</p>

                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};