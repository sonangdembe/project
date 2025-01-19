import React, { useState, useEffect } from 'react';
import './Quiz.css';
import img from './images/img.png';
import img1 from './images/img2.png';

export const HomePage = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState(null);  
  const [showSadEmoji, setShowSadEmoji] = useState(false);  
  // const [codeAnswer, setCodeAnswer] = useState('')

  const questions = {
    Basic: [
      { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'], correct: `Hyper Text Markup Language`, 
solution:`HyperText: This refers to the text displayed on the web that can contain links (hyperlinks) to other documents or resources. The term "hyper" comes from the idea of jumping or linking between different pieces of content. The web is built on this ability to navigate between interconnected pieces of content.

<br/> Markup: Markup refers to the tags or codes used to structure and format text. In HTML, markup consists of elements or tags (like <div>, <p>, <h1>, etc.) that define the structure of a web page. These tags tell the browser how to display the content.

<br/> Language: HTML is considered a language because it provides a set of rules and syntax for defining the structure of a web document.

` },
      { question: 'What is the correct HTML tag for inserting a line break?', options: ['<break>', '<br>', '<lb>'], correct: '<br>', solution:`The <br> tag is used in HTML to insert a line break, essentially telling the browser to start the content on a new line` },
      { question: 'Which HTML tag is used to define an internal style sheet?', options: ['<style>', '<css>', '<script>'], correct: '<style>', solution:'style is udes to style in html,css' },
      { question: 'What is the correct HTML for creating a hyperlink?', options: ['<a href="url">link text</a>', '<link>url</link>', '<a>url</a>'], correct: '<a href="url">link text</a>' , solution:`To create a hyperlink in HTML, you use the <a> (anchor) tag. The href attribute specifies the URL or location the link points to. Here's the basic syntax`},
      { 
        question: 'Write the HTML code for a table with 2 rows and 3 columns.',
    isCodeEditor: true, // New flag for code editor questions
    placeholder: `<table>\n  <tr>\n    <td>Row1 Col1</td>\n    <td>Row1 Col2</td>\n    <td>Row1 Col3</td>\n  </tr>\n  <tr>\n    <td>Row2 Col1</td>\n    <td>Row2 Col2</td>\n    <td>Row2 Col3</td>\n  </tr>\n</table>`,
    correct: `<table>\n  <tr>\n    <td>Row1 Col1</td>\n    <td>Row1 Col2</td>\n    <td>Row1 Col3</td>\n  </tr>\n  <tr>\n    <td>Row2 Col1</td>\n    <td>Row2 Col2</td>\n    <td>Row2 Col3</td>\n  </tr>\n</table>`,
    solution: `
      The <table> tag in HTML is used to create a table. Inside the table, the <tr> tag defines rows, and the <td> tag defines columns (cells).
      Example:
      <pre>
      <table>
        <tr>
          <td>Row1 Col1</td>
          <td>Row1 Col2</td>
          <td>Row1 Col3</td>
        </tr>
        <tr>
          <td>Row2 Col1</td>
          <td>Row2 Col2</td>
          <td>Row2 Col3</td>
        </tr>
      </table>
      </pre>
    `,
  },
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
    setFeedback(null);  
    setShowSadEmoji(false);  
    // setCodeAnswer('');
  };

  const handleAnswerSelect = (selectedOption) => {
    const currentQuestion = questions[selectedLevel][currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correct;

    // const handleAnswerSubmit = () => {
    //   const currentQuestion = questions[selectedLevel][currentQuestionIndex];
  
    //   if (currentQuestion.isCodeEditor) {
    //     const isCorrect = codeAnswer.trim() === currentQuestion.correct.trim();
  


    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        selected: selectedOption,
        correct: currentQuestion.correct,
        solution: currentQuestion.solution,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setFeedback('Great job!');  
      setShowSadEmoji(false);  
    } else {
      setFeedback(`Incorrect! The correct answer is: ${currentQuestion.correct}`);  // Explanation for incorrect answer
      setShowSadEmoji(true);  
    }
    setTimeout(() => {
      if (currentQuestionIndex < questions[selectedLevel].length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        // setCodeAnswer(''); // Clear code editor
      } else {
        setShowResults(true);
      }
      setFeedback(null);
      setShowSadEmoji(false);
    }, 2000);
 
  };

  const handleBack = () => {
    setSelectedLevel('');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setFeedback(null);
    setShowSadEmoji(false);
  };
  const optionColors = ['#f2dc89', '#f6bd99', '#ffc5bd'];




  return (
    <div
    className="d-flex flex-column container-fluid"
    style={{
      backgroundColor: '#fbe8d7',
      minHeight: '100vh', 
      overflowY: 'auto',  
    }}
  >
  
{/*  
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
      /> */}


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
         <div
  className="d-flex justify-content-center align-items-center mt-5"
  style={{
     backgroundColor: '#fbe8d7',  
  }}
>
  <button
    className="btn shadow fw-bold text-center lacquer-regular mb-5"
    style={{
      width: '100%',
      maxWidth: '500px',
      fontSize: '3rem',
      lineHeight: '1.5',
      borderRadius: '40px',
      marginTop:'105px'
    }}
  

  >
    Quiz
    <hr
      className="my-2 lacquer-regular"
      style={{ width: '100%', margin: '0 auto' }}
    />
    Choose Your Level
  </button>
</div>

          <div className="container lacquer-regular">
            <div className="row">
              
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
          <h2 className="mb-4 lacquer-regular text-center " style={{marginTop:'200px'}}>
            {questions[selectedLevel][currentQuestionIndex].question}</h2>
        
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
        <div className={`feedback ${showSadEmoji ? 'show-emoji' : ''}`}>
          <p className="feedback-message">{feedback}</p>
        </div>
      )}
{/* {selectedLevel && !showResults && ( */}
{showResults && (





  <div className=" mt-5">
{/* <h3>{questions[selectedLevel][currentQuestionIndex].question}</h3>
{questions[selectedLevel][currentQuestionIndex].isCodeEditor ? (
            <div className="mt-3">
              <textarea
                className="form-control"
                rows="10"
                placeholder={
                  questions[selectedLevel][currentQuestionIndex].placeholder
                }
                value={codeAnswer}
                onChange={(e) => setCodeAnswer(e.target.value)}
              />
              <button
                className="btn btn-primary mt-3"
                onClick={handleAnswerSubmit}
              ></button>
Submit Code
              </button>
</div>
              ) */}


    <h3 className="lacquer-regular text-center mb-4 ">
      Explanation of Incorrect Answers for {selectedLevel} Level
    </h3>
    <div className="row">
      {/* Left side: Explanations */}
      <div className="col-md-8">
        {answers
          .filter((answer) => !answer.isCorrect) // Only show incorrect answers
          .map((answer, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>Question:</strong> {answer.question}
              </p>
              <p>
                <strong>Your Answer:</strong> {answer.selected}
              </p>
              <p>
                <strong>Correct Answer:</strong> {answer.correct}
              </p>
              {/* <p>
                 {answer.solution}
              </p> */}
              <p className="text-danger" style={{ color: '#3E7B27' }}>
              <strong style={{ color: '#3E7B27' }}>Explanation:</strong> The correct answer is {answer.correct} because <br></br><span style={{ color: '#3E7B27' }}>{answer.solution}</span>.
              </p>
              <hr />
            </div>
          ))}

        {/* All correct */}
        {answers.filter((answer) => !answer.isCorrect).length === 0 && (
          <p className="text-success text-center">
            Congratulations! You answered all questions correctly.
          </p>
        )}
      </div>

      {/* Right side: Score summary */}
      <div className="col-md-4">
        <div className="">
          <div className="card-body text-center">
            <h4 className="card-title lacquer-regular ">Score</h4>
            <p className='lacquer-regular '>

  {answers.filter((answer) => answer.isCorrect).length}/{answers.length}
</p>

          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-4">
      <button onClick={handleBack} className="btn btn-primary">
        Back to Home
      </button>
      <button onClick={handleBack} className="btn btn-primary">
        goto next level
      </button>
      <button onClick={handleBack} className="btn btn-primary">
        learn from here
      </button>
    </div>
  </div>
)}




    </div>
  );
};
