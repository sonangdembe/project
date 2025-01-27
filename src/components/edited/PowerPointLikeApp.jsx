import React, { useState } from "react";
import "./pp.css";

export const PowerPointLikeApp = () => {
  const [slides, setSlides] = useState([
    { id: 1, title: "Introduction", content: "objectives" },
    { id: 2, title: "about it", content: "features" },
    { id: 3, title: "output of the sections", content: "content in the output sections" },
  ]);

  const [selectedSlide, setSelectedSlide] = useState(slides[0]);

  const handleSlideContentChange = (e) => {
    const { name, value } = e.target;
    setSelectedSlide((prevSlide) => ({
      ...prevSlide,
      [name]: value,
    }));

    setSlides((prevSlides) =>
      prevSlides.map((slide) =>
        slide.id === selectedSlide.id ? { ...slide, [name]: value } : slide
      )
    );
  };

  // Function to download slides
  const handleDownloadTxt = () => {
    const content = slides
      .map((slide) => `Title: ${slide.title}\nContent: ${slide.content}`)
      .join("\n\n");
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "slides.txt";
    link.click();
  };
  

  return (
    <div className="container-fluid vh-100 d-flex flex-column flex-md-row">
      {/* Left side - Slide List */}
      <div className="col-12 col-md-4 bg-light p-3 border-md-end slides-container">
        <h2 className="h5 mb-4">Slides</h2>
        <ul className="slides-list d-flex flex-column gap-3">
          {slides.map((slide) => (
            <li
              key={slide.id}
              className={`p-3 rounded shadow cursor-pointer ${
                selectedSlide.id === slide.id ? "bg-primary text-white" : "bg-white"
              }`}
              onClick={() => setSelectedSlide(slide)}
              style={{
                height: "180px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border:
                  selectedSlide.id === slide.id
                    ? "2px solid #0056b3"
                    : "1px solid #ddd",
              }}
            >
              <h3 className="h6">{slide.title}</h3>
              <p className=" text-truncate">{slide.content}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Slide Editor */}
      <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
        <div
          className="shadow-lg rounded p-5 bg-white w-100"
          style={{
            maxWidth: "950px",
            height: "600px",
          }}
        >
          <h2 className="h4 mb-4" style={{ fontSize: "2rem" }}>
            {selectedSlide.title}
          </h2>

          <div className="mb-4">
            <label htmlFor="slideTitle" className="form-label">
           
            </label>
            <input
              type="text"
              name="title"
              id="slideTitle"
              value={selectedSlide.title}
              onChange={handleSlideContentChange}
              className="form-control form-control-lg"
              style={{ fontSize: "1.2rem" }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="slideContent" className="form-label">
      </label>
            <textarea
              name="content"
              id="slideContent"
              value={selectedSlide.content}
              onChange={handleSlideContentChange}
              rows="8"
              className="form-control form-control-lg"
              style={{ fontSize: "1.1rem", minHeight: "200px" }}
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button
        className="btn btn-primary mt-5 mx-auto"
        style={{ alignSelf: "center" }}
        onClick={handleDownloadTxt}
      >
        Generate
      </button>
    </div>
  );
};
