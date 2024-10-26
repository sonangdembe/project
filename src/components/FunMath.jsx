import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../App.css'; 
import { Button } from './Button';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrPowerReset } from 'react-icons/gr';

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
        answer: generatedProblem.answer.solution,
        fun_fact: generatedProblem.fun_fact,
        motivational_message: generatedProblem.motivational_message
      });
      setShowEditModal(true);
    }
  };

  const handleSaveChanges = () => {
    setGeneratedProblem({
      ...generatedProblem,
      ...editedProblem
    });
    localStorage.setItem('funMathData', JSON.stringify(editedProblem));
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProblem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="row justify-content-center mt-5">
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

      <div className="row justify-content-center mt-5">
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
      </div>

      {!loading && generatedProblem && (
        <div className='container'>
          <motion.h5
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          >
            🎉 Generated Problem:
          </motion.h5>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#ff6347', fontWeight: 'bold' }}
          >
            Problem: {generatedProblem.problem}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#32cd32' }}
          >
            <strong>Hint:</strong> {generatedProblem.hint}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, staggerChildren: 0.2 }}
          >
            <p><strong>Steps:</strong></p>
            <motion.ul style={{ listStyle: 'none', padding: 0 }}>
              {generatedProblem.steps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ marginBottom: '8px', color: '#ffa500', fontWeight: 'bold' }}
                >
                  Step {index + 1}: {step}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#ff4500' }}
          >
            <strong>Answer:</strong> {generatedProblem.answer}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#4169e1', fontStyle: 'italic' }}
          >
            Fun Fact: {generatedProblem.fun_fact}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#ff69b4', fontWeight: 'bold' }}
          >
            "Motivational Message: {generatedProblem.motivational_message}"
          </motion.p>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button
              label="Edit"
              type="button"
              className="btn btn-sm"
              onClick={handleEdit}
              style={{ backgroundColor: 'rgb(50, 115, 220)', color: 'white' }}
            />
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowEditModal(false)}>&times;</span>
            <h4>Edit Generated Problem</h4>
            <input
              type="text"
              name="problem"
              placeholder="Problem"
              value={editedProblem.problem}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="hint"
              placeholder="Hint"
              value={editedProblem.hint}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="steps"
              placeholder="Steps (comma-separated)"
              value={editedProblem.steps?.join(', ')}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="answer"
              placeholder="Answer"
              value={editedProblem.answer}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="fun_fact"
              placeholder="Fun Fact"
              value={editedProblem.fun_fact}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="motivational_message"
              placeholder="Motivational Message"
              value={editedProblem.motivational_message}
              onChange={handleInputChange}
            />
            <Button
              label="Save Changes"
              type="button"
              onClick={handleSaveChanges}
              style={{ backgroundColor: 'rgb(34, 193, 195)', color: 'white' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
