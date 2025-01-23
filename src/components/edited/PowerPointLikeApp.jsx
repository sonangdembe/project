import React, { useState } from 'react';

export const PowerPointLikeApp = () => {
  // State for slides and the currently selected slide
  const [slides, setSlides] = useState([
    { id: 1, title: 'Slide 1', content: 'Content for Slide 1' },
    { id: 2, title: 'Slide 2', content: 'Content for Slide 2' },
    { id: 3, title: 'Slide 3', content: 'Content for Slide 3' },
  ]);

  const [selectedSlide, setSelectedSlide] = useState(slides[0]);

  // Handler for updating slide content
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

  return (
    <div className="container-fluid vh-100 d-flex flex-column flex-md-row">
      {/* Left side - Slide List */}
      <div className="col-12 col-md-3 bg-light p-3 border-md-end" style={{ minWidth: '250px' }}>
        <h2 className="h5 mb-4">Slides</h2>
        <ul className="list-group" style={{ maxHeight: '100%', overflowY: 'auto' }}>
          {slides.map((slide) => (
            <li
              key={slide.id}
              className={`list-group-item cursor-pointer ${
                selectedSlide.id === slide.id
                  ? 'bg-primary text-white'
                  : 'list-group-item-light'
              }`}
              onClick={() => setSelectedSlide(slide)}
            >
              {slide.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Slide Editor */}
      <div className="col-12 col-md-9 p-5 overflow-auto">
        <h2 className="h4 mb-4">{selectedSlide.title}</h2>
        <div className="mb-4">
          <label htmlFor="slideTitle" className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            id="slideTitle"
            value={selectedSlide.title}
            onChange={handleSlideContentChange}
            className="form-control form-control-lg"
            style={{ fontSize: '1.2rem' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="slideContent" className="form-label">Content:</label>
          <textarea
            name="content"
            id="slideContent"
            value={selectedSlide.content}
            onChange={handleSlideContentChange}
            rows="8"
            className="form-control form-control-lg"
            style={{ fontSize: '1.1rem', minHeight: '200px' }}
          />
        </div>
      </div>
    </div>
  );
};
