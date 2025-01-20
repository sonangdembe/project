import React, { useState, useEffect } from 'react';
import './Quiz.css';
import img from './images/img.png';
import img1 from './images/img2.png';

export const HomePage = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState(null);  // Feedback state for correct/incorrect answers
  const [showSadEmoji, setShowSadEmoji] = useState(false);  // Sad emoji state for incorrect answers

  const questions = {
    Basic: [
      { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'], correct: 'Hyper Text Markup Language' },
      { question: 'What is the correct HTML tag for inserting a line break?', options: ['<break>', '<br>', '<lb>'], correct: '<br>' },
      { question: 'Which HTML tag is used to define an internal style sheet?', options: ['<style>', '<css>', '<script>'], correct: '<style>' },
      { question: 'What is the correct HTML for creating a hyperlink?', options: ['<a href="url">link text</a>', '<link>url</link>', '<a>url</a>'], correct: '<a href="url">link text</a>' },
      { question: 'How do you create a checkbox in HTML?', options: ['<input type="checkbox">', '<checkbox>', '<input type="box">'], correct: '<input type="checkbox">' },
    ],
    Intermediate: [
      { question: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size'], correct: 'font-size' },
      { question: 'How do you add a background color in CSS?', options: ['background-color', 'bgcolor', 'color'], correct: 'background-color' },
      { question: 'What is the default value of the position property in CSS?', options: ['static', 'relative', 'absolute'], correct: 'static' },
      { question: 'Which property is used to change the font of an element?', options: ['font-family', 'font-weight', 'font-style'], correct: 'font-family' },
      { question: 'How do you select an element with id "demo" in CSS?', options: ['#demo', '.demo', '*demo'], correct: '#demo' },
    ],
    Professional: [
      { question: 'What is the output of 2 + "2" in JavaScript?', options: ['22', '4', 'NaN'], correct: '22' },
      { question: 'What is React primarily used for?', options: ['Database management', 'User interface building', 'Server-side scripting'], correct: 'User interface building' },
      { question: 'Which company developed JavaScript?', options: ['Netscape', 'Microsoft', 'Google'], correct: 'Netscape' },
      { question: 'What does "this" keyword refer to in JavaScript?', options: ['The current object', 'The previous object', 'The global object'], correct: 'The current object' },
      { question: 'Which JavaScript method is used to access HTML elements?', options: ['getElementById()', 'getElement()', 'getNode()'], correct: 'getElementById()' },
    ],
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setFeedback(null);  // Reset feedback
    setShowSadEmoji(false);  // Reset sad emoji
  };

  const handleAnswerSelect = (selectedOption) => {
    const currentQuestion = questions[selectedLevel][currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correct;

    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        selected: selectedOption,
        correct: currentQuestion.correct,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setFeedback('Great job!');  // Show positive feedback for correct answer
      setShowSadEmoji(false);  // Ensure sad emoji is hidden for correct answer
    } else {
      setFeedback(`Incorrect! The correct answer is: ${currentQuestion.correct}`); // Explanation for incorrect answer
      setShowSadEmoji(true);  // Show sad emoji for incorrect answer
    }

    // Delay moving to the next question after showing feedback
    setTimeout(() => {
      if (currentQuestionIndex < questions[selectedLevel].length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
      setFeedback(null);  // Clear feedback after a delay
      setShowSadEmoji(false);  // Clear sad emoji after a delay
    }, 1000);
  };

  const handleBack = () => {
    setSelectedLevel('');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setFeedback(null);
    setShowSadEmoji(false);
  };
  const optionColors = ['#f2dc89', '#ffc5bd', '#ffc5bd'];
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100 position-relative"
      style={{ backgroundColor: '#fbe8d7' }}
    >
      {/* Image at the left bottom */}
      <img
        src={img}
        alt="img"
        className="position-absolute"
        style={{
          bottom: '0',
          left: '0',
          width: '150px',
          height: 'auto',
        }}
      />

      {/* Image at the right top */}
      <img
        src={img1}
        alt="img1"
        className="position-absolute"
        style={{
          top: '0',
          right: '0',
          width: '150px',
          height: 'auto',
        }}
      />

      {!selectedLevel && (
        <div>
          {/* Quiz Title Button */}
          <button
            className="btn shadow fw-bold text-center lacquer-regular mb-5"
            style={{
              width: '100%',
              maxWidth: '500px',
              fontSize: '3rem',
              lineHeight: '1.5',
              borderRadius: '40px',
            }}
          >
            Quiz
            <hr
              className="my-2 lacquer-regular"
              style={{ width: '100%', margin: '0 auto' }}
            />
            Choose Your Level
          </button>

          {/* Level Selection Buttons */}
          <div className="container lacquer-regular">
            <div className="row">
              {/* Basic */}
              <div className="col-12 mb-3">
                <button
                  onClick={() => handleLevelSelect('Basic')}
                  className="btn w-100"
                  style={{
                    backgroundColor: '#f6bd99',
                    borderColor: '#d3e6f6',
                    height: '60px',
                    borderRadius: '30px',
                    fontSize: '1.5rem',
                  }}
                >
                  Basic
                </button>
              </div>

              {/* Intermediate */}
              <div className="col-12 mb-3">
                <button
                  onClick={() => handleLevelSelect('Intermediate')}
                  className="btn w-100"
                  style={{
                    backgroundColor: '#d3e6f6',
                    borderColor: '#f6bd99',
                    height: '60px',
                    borderRadius: '30px',
                    fontSize: '1.5rem',
                  }}
                >
                  Intermediate
                </button>
              </div>

              {/* Professional */}
              <div className="col-12">
                <button
                  onClick={() => handleLevelSelect('Professional')}
                  className="btn w-100"
                  style={{
                    backgroundColor: '#ffc5bd',
                    borderColor: '#ffc5bd',
                    height: '60px',
                    borderRadius: '30px',
                    fontSize: '1.5rem',
                  }}
                >
                  Professional
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedLevel && !showResults && (
        <div>
          <h2 className="mb-4 lacquer-regular text-center">{questions[selectedLevel][currentQuestionIndex].question}</h2>
        
          <div className="container lacquer-regular">
            {questions[selectedLevel][currentQuestionIndex].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className="btn w-100 mb-3"
                  style={{
                    backgroundColor: optionColors[index % optionColors.length],
                    borderRadius: '29px',
                    fontSize: '1.7rem',
                  }}
                >
                  {option}
                </button>
              )
            )}

          </div>
        </div>
      )}

      {feedback && (
        <div className={`${feedback} ${showSadEmoji ? 'show-emoji' : ''}`}>
          <p className="feedback-message">{feedback}</p>
        </div>
      )}

{showResults && (
        <div className="container mt-5">
          <h3 className="lacquer-regular text-center mb-4 ">
            Quiz Results for {selectedLevel} Level
          </h3>
          <table className="table table-bordered w-full">
            <thead>
              <tr>
                <th>Question</th>
                <th>Selected Answer</th>
                <th>Correct Answer</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {answers.map((answer, index) => (
                <tr key={index}>
                  <td>{answer.question}</td>
                  <td>{answer.selected}</td>
                  <td>{answer.correct}</td>
                  <td>{answer.isCorrect ? 'Correct' : 'Incorrect'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleBack}
            className="btn btn-primary mt-3"
            style={{ borderRadius: '20px' }}
          >
            Back to Levels
          </button>
        </div>
      )}
    </div>
  );
};