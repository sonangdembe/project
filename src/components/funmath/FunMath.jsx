import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrPowerReset } from 'react-icons/gr';
import { Navbar } from './Navbar';

export const FunMath = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [generatedProblem, setGeneratedProblem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedProblem, setEditedProblem] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('funMathData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setValue('grade', parsedData.grade);
      setValue('mathTopic', parsedData.math_topic);
      setValue('interest', parsedData.interest);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage('');
    setGeneratedProblem(null);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const response = await axios.post('http://localhost:8000/fun_maths', {
        grade_level: data.grade,
        math_topic: data.mathTopic,
        interest: data.interest
      });
      localStorage.setItem('funMathData', JSON.stringify(response.data));
      setGeneratedProblem(response.data);
    } catch (error) {
      setErrorMessage('Failed to generate the math problem. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    if (generatedProblem) {
      setEditedProblem({
        problem: generatedProblem.problem,
        hint: generatedProblem.hint,
        steps: generatedProblem.steps,
        answer: generatedProblem.answer, // Adjust if answer is an object
        fun_fact: generatedProblem.fun_fact,
        motivational_message: generatedProblem.motivational_message
      });
      setShowEditModal(true);
    }
  };

  const handleSaveChanges = () => {
    const updatedProblem = {
      ...generatedProblem,
      ...editedProblem
    };
    setGeneratedProblem(updatedProblem);
    localStorage.setItem('funMathData', JSON.stringify(updatedProblem));
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProblem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBack = () => {
    reset();
    setGeneratedProblem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar/>
    <div className="row justify-content-center mt-5">
      {!generatedProblem && (
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5 border border-4 pt-4 pb-3 ps-4 pe-4">
          <h3 className="text-center mb-4">Fun Math</h3>
          <div className="mb-3">
            <label className="form-label">Grade<span className="text-danger">*</span></label>
            <select 
              {...register('grade', { required: 'Grade is required' })} 
              className={`form-select ${errors.grade ? 'is-invalid' : ''}`}
            >
              <option value="">Select a grade</option>
              <option value="Kindergarten">Kindergarten</option>
              {[...Array(12).keys()].map(num => (
                <option key={num + 1} value={`Grade ${num + 1}`}>Grade {num + 1}</option>
              ))}
            </select>
            {errors.grade && <span className="invalid-feedback">{errors.grade.message}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label">Math Topic<span className="text-danger">*</span></label>
            <input
              {...register('mathTopic', { required: 'Math topic is required.' })}
              className={`form-control ${errors.mathTopic ? 'is-invalid' : ''}`} 
            />
            {errors.mathTopic && <div className="invalid-feedback">{errors.mathTopic.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Interest<span className="text-danger">*</span></label>
            <input
              {...register('interest', { required: 'Interest is required.' })}
              className={`form-control ${errors.interest ? 'is-invalid' : ''}`} 
            />
            {errors.interest && <div className="invalid-feedback">{errors.interest.message}</div>}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button
              label={<>Generate <FaArrowRightLong /></>}
              type="submit"
              className="btn btn-sm"
              style={{ backgroundColor: 'rgb(255, 104, 59)', color: 'white', marginRight: '8px' }}
            />

            <Button
              label={<><GrPowerReset /> Reset</>}
              type="button"
              className="btn btn-sm"
              onClick={() => reset()}
              style={{ backgroundColor: 'rgb(220, 53, 69)', color: 'white' }}
            />
          </div>

          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        </form>
      )}

      {loading && (
        <div className="loading-container">
          <div className="buffering-animation">
            <div className="jumping-shape" style={{ margin: '0 10px' }}></div> 
            <div className="jumping-shape" style={{ margin: '0 10px' }}></div> 
            <div className="jumping-shape" style={{ margin: '0 10px' }}></div> 
          </div>
          <h2 className="loading-text">Loading...</h2>
        </div>
      )}

      {!loading && generatedProblem && (
        <div className='container'>
          <motion.h5
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          >
            🎉 Generated Problem:
          </motion.h5>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <strong>Problem:</strong> {generatedProblem.problem}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <strong>Hint:</strong> {generatedProblem.hint}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <strong>Steps:</strong> {generatedProblem.steps}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <strong>Answer:</strong> {typeof generatedProblem.answer === 'object' ? JSON.stringify(generatedProblem.answer) : generatedProblem.answer}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <strong>Fun Fact:</strong> {generatedProblem.fun_fact}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <strong>Motivational Message:</strong> {generatedProblem.motivational_message}
          </motion.p>

          <Button
            label="Edit"
            className="btn btn-warning mt-3"
            onClick={handleEdit}
          />

          <Button
            label="Back"
            className="btn btn-secondary mt-3 ms-2"
            onClick={handleBack}
          />

          {/* Edit Modal */}
          {showEditModal && (
            <div className="modal show d-block" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Problem</h5>
                    <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <label>Problem</label>
                    <input
                      type="text"
                      name="problem"
                      value={editedProblem.problem || ''}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <label>Hint</label>
                    <input
                      type="text"
                      name="hint"
                      value={editedProblem.hint || ''}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <label>Steps</label>
                    <textarea
                      name="steps"
                      value={editedProblem.steps || ''}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <label>Answer</label>
                    <input
                      type="text"
                      name="answer"
                      value={editedProblem.answer || ''}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <label>Fun Fact</label>
                    <input
                      type="text"
                      name="fun_fact"
                      value={editedProblem.fun_fact || ''}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <label>Motivational Message</label>
                    <input
                      type="text"
                      name="motivational_message"
                      value={editedProblem.motivational_message || ''}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="modal-footer">
                    <Button label="Save Changes" onClick={handleSaveChanges} />
                    <Button label="Close" onClick={() => setShowEditModal(false)} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
};
