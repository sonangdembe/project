import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../App.css'; 

export const FunMath = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [generatedProblem, setGeneratedProblem] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

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
      setGeneratedProblem(response.data);
    } catch (error) {
      setErrorMessage('Failed to generate the math problem. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      {/* Loading Animation */}
      {loading && (
        <div className="loading-container">
          <div className="buffering-animation">
            <div className="buffering-circle"></div>
          </div>
          <h2 className="loading-text">Loading...</h2>
        </div>
      )}

      {/* Generated Problem Output */}
      {!loading && generatedProblem && (
        <div className="text-center mt-5">
          {/* Problem */}
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

          {/* Hint */}
          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#32cd32' }}
          >
            <strong>Hint:</strong> {generatedProblem.hint}
          </motion.p>

          {/* Steps */}
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

          {/* Answer */}
          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#ff4500' }}
          >
            <strong>Answer:</strong> {generatedProblem.answer.solution}
          </motion.p>

          {/* Fun fact */}
          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#6495ed', fontWeight: 'bold' }}
          >
            Fun Fact: {generatedProblem.fun_fact}
          </motion.p>

          {/* Motivational message */}
          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#d2691e', fontStyle: 'italic' }}
          >
            Motivational Message: {generatedProblem.motivational_message}
          </motion.p>
        </div>
      )}

      {/* Form for Input */}
      {!loading && !generatedProblem && (
        <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-4 pe-4 shadow p-3 bg-body rounded no-print">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-center mb-3">Lesson Learn</h4>

            <div className="mb-3">
              <label className="form-label" style={{ fontWeight: 'normal' }}>Grade <span style={{ color: 'red' }}>*</span></label>
              <select 
                {...register('grade', { required: 'Grade is required' })} 
                className="form-select form-select-sm mb-3 custom-input"
                style={{ border: '1px solid black', fontWeight: 'normal' }}
              >
                <option value="">Select Grade</option>
                <option value="Kindergarten">Kindergarten</option>
                {[...Array(12).keys()].map(num => (
                  <option key={num + 1} value={`Grade ${num + 1}`}>Grade {num + 1}</option>
                ))}
              </select>
              {errors.grade && <span className="text-danger">{errors.grade.message}</span>}
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ fontWeight: 'normal' }}>Math Topic <span style={{ color: 'red' }}>*</span></label>
              <textarea
                {...register('mathTopic', { required: 'Math Topic is required' })}
                className="form-control form-control-sm mb-2 custom-input"
                style={{ border: '1px solid black', fontWeight: 'normal' }}
              />
              {errors.mathTopic && <span className="text-danger">{errors.mathTopic.message}</span>}
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ fontWeight: 'normal' }}>Interest <span style={{ color: 'red' }}>*</span></label>
              <textarea
                {...register('interest', { required: 'Interest is required' })}
                className="form-control form-control-sm mb-2 custom-input"
                style={{ border: '1px solid black', fontWeight: 'normal' }}
              />
              {errors.interest && <span className="text-danger">{errors.interest.message}</span>}
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button type="submit" className="btn btn-sm" style={{ backgroundColor: 'rgb(255, 104, 59)', color: 'white' }}>
                Generate <FaArrowRight />
              </button>
              <button type="reset" className="btn btn-sm" style={{ backgroundColor: 'rgb(220, 53, 69)', color: 'white' }} onClick={() => reset()}>
                <GrPowerReset /> Reset
              </button>
            </div>
          </form>
        </div>
      )}

      {errorMessage && <div className="text-danger text-center mt-3">{errorMessage}</div>}
    </div>
  );
};
