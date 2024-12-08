import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';
import { Navbar } from '../funmath/Navbar';
import axios from 'axios';
import './Form.css';

export const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [showOutput, setShowOutput] = useState(false);
    const [bingoOutputs, setBingoOutputs] = useState([]);
    const [numStudents, setNumStudents] = useState(1);

    const onSubmit = async (data) => {
      setLoading(true);
      setShowOutput(false);
      setBingoOutputs([]);
      
      try {
          const studentBingoOutputs = await Promise.all(
              Array.from({ length: numStudents }, async () => {
                  const response = await axios.post(
                      'https://teachertools-api.chimpvine.com/bingo',
                      { topic: data.topic || "Math" },
                      { headers: { 'Content-Type': 'application/json' } }
                  );
                  
                  let bingoCard = response.data?.bingo_card || Array(5).fill(Array(5).fill('No bingo data available'));
                  
                  if (bingoCard.length === 5 && bingoCard.every(row => row.length === 5)) {
                      bingoCard[2][2] = ''; // Center cell is set to blank
                  } else {
                      bingoCard = Array(5).fill(Array(5).fill('No bingo data available'));
                  }
  
                  return bingoCard;
              })
          );
  
          setBingoOutputs(studentBingoOutputs);
          setShowOutput(true);
      } catch (error) {
          console.error('Error fetching bingo data:', error);
          setBingoOutputs([[['Error fetching bingo data']]]);
      } finally {
          setLoading(false);
      }
  };
  
    
    
    

    const handleReset = () => {
        reset();
        setShowOutput(false);
        setBingoOutputs([]);
    };

    


    return (
        <>
            <Navbar />
            <div className="full-screen-container">
  {loading ? (
    <div className="text-center">Loading...</div>
  ) : !showOutput ? (
    <>
      <h4 className="text-black mb-4 text-center">Bingo Game</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="w-100 form-container">
        <div className="mb-3">
          <label htmlFor="topic" className="form-label mb-2">
            Topic <span className="text-danger">*</span>
          </label>
          <input
            id="topic"
            type="text"
            {...register('topic', { required: 'Topic is required' })}
            className={`form-control ${errors.topic ? 'is-invalid' : ''}`}
            placeholder="Eg. History, Biology, Nature"
          />
          {errors.topic && <div className="invalid-feedback">{errors.topic.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="numStudents" className="form-label mb-2">
            Number of Students
          </label>
          <input
            id="numStudents"
            type="number"
            value={numStudents}
            onChange={(e) => setNumStudents(parseInt(e.target.value) || 1)}
            className="form-control"
            min="1"
          />
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button type="submit" className="btn btn-primary">
            Generate <FaArrowRight />
          </button>
          <button type="button" onClick={handleReset} className="btn btn-danger">
            <GrPowerReset /> Reset
          </button>
        </div>
      </form>
    </>
  ) : (
    <div className="container-lg">
      <h4 className="text-center mb-4">Here’s Your Bingo Game!</h4>
      <div className="row justify-content-center">
        {bingoOutputs.map((grid, index) => (
          <div key={index} className="col-md-6 col-lg-5 mb-4">
            <div className="container bg-white p-2 col-md-14 rounded border border-4 shadow">
              Student {index + 1}
              <div className="bingo-grid" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                {grid.map((row, rowIndex) =>
                  row.map((item, colIndex) => (
                    <div
                      key={`${index}-${rowIndex}-${colIndex}`}
                      className={`bingo-cell ${(!item || !item.trim()) ? 'empty' : ''}`}
                    >
                      {item ? item : ' '}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="button" onClick={handleReset} className="btn btn-danger">
          <GrPowerReset /> Back
        </button>
      </div>
    </div>
  )}
</div>

        </>
    );
};
