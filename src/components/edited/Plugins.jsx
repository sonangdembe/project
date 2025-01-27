import React, { useState, useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./pp.css";

export const Plugins = () => {
  const [slides, setSlides] = useState([
    { id: 1, title: "Introduction", content: "Objectives" },
    { id: 2, title: "About It", content: "Features" },
    { id: 3, title: "Output of the Sections", content: "Content in the output sections" },
  ]);
  const [selectedSlideId, setSelectedSlideId] = useState(1);

  // Handle content change and update the relevant slide
  const handleSlideContentChange = (e, field) => {
    const { value } = e.target;
    setSlides((prevSlides) =>
      prevSlides.map((slide) =>
        slide.id === selectedSlideId ? { ...slide, [field]: value } : slide
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
    initializeReveal();
  }, [slides]); // Reinitialize Reveal.js when slides change

  return (
    <div className="d-flex vh-100">
      {/* Slide Sidebar (Left side, increased size) */}
      <div
        className="slide-sidebar bg-dark text-white p-3"
        style={{ width: "30%", overflowY: "auto" }}
      >
        <h2 className="h5 mb-4">Slides</h2>
        <ul className="list-group">
          {slides.map((slide) => (
            <li
              key={slide.id}
              className={`list-group-item list-group-item-action ${
                selectedSlideId === slide.id ? "active" : ""
              }`}
              onClick={() => setSelectedSlideId(slide.id)}
              style={{
                cursor: "pointer",
                backgroundColor: selectedSlideId === slide.id ? "#0d6efd" : "",
                color: selectedSlideId === slide.id ? "#fff" : "",
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
                  height: "100%",
                }}
              />
            </li>
          ))}
        </ul>
        <button
          className="btn btn-success mt-4 w-100"
          onClick={handleAddSlide}
        >
          Add New Slide
        </button>
      </div>

      {/* Main Content Area (Right side) */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Reveal.js Presentation */}
        <div className="reveal-wrapper flex-grow-1 bg-light p-3">
          <div className="reveal">
            <div className="slides">
              {slides.map((slide) => (
                <section key={slide.id}>
                  {/* Editable Title */}
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleSlideContentChange(e, "title")}
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                    style={{
                      cursor: "text",
                      textAlign: "center",
                      fontSize: "2rem",
                    }}
                  />
                  {/* Editable Content */}
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleSlideContentChange(e, "content")}
                    dangerouslySetInnerHTML={{ __html: slide.content }}
                    style={{
                      cursor: "text",
                      fontSize: "1.2rem",
                    }}
                  />
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
