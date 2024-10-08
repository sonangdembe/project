import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import axios from 'axios';
import { motion } from 'framer-motion';
import '../App.css'; 
import { Button } from './Button';

export const FunMath = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [generatedProblem, setGeneratedProblem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(true);
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
    setShowForm(false);

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

  const handleBack = () => {
    setShowForm(true); 
    setGeneratedProblem(null); 
    reset();
    localStorage.removeItem('funMathData'); }


  const handleEdit = () => {
    if (generatedProblem) {
      setEditedProblem({
        problem: generatedProblem.problem,
        hint: generatedProblem.hint,
        steps: generatedProblem.steps,
        answer: generatedProblem.answer,
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

      {!loading && generatedProblem && !showEditModal && (
        <div>
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
            <strong>Answer:</strong> {generatedProblem.answer.solution}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#6495ed', fontWeight: 'bold' }}
          >
            Fun Fact: {generatedProblem.fun_fact}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
            style={{ color: '#d2691e', fontStyle: 'italic' }}
          >
            Motivational Message: {generatedProblem.motivational_message}
          </motion.p>

          <div className="justify-content-between mt-3">
            <Button
              label='Back'
              onClick={handleBack} 
              className='btn btn-sm me-2' 
              style={{ backgroundColor: 'rgb(255, 104, 59)', color: 'white', width:'7%' }} 
            />

            <Button
              label='Edit'
              onClick={handleEdit} 
              className='btn btn-sm'
              style={{ backgroundColor: 'rgb(220, 53, 69)', color: 'white',width:'7%' }} 
            />
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="col-md-5 border border-4 pt-4 pb-3 ps-4 pe-4 p-3">
          <h4 className="text-center mb-3">
            Fun Math
          </h4>
          <form onSubmit={(e) => { e.preventDefault(); handleSaveChanges(); }}>
            <div className="mb-3">
              <label className="form-label">Problem</label>
              <input 
                name="problem"
                value={editedProblem.problem || ''}
                onChange={handleInputChange}
                className="form-control" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Hint</label>
              <input 
                name="hint"
                value={editedProblem.hint || ''}
                onChange={handleInputChange}
                className="form-control" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Answer</label>
              <input 
                name="answer"
                value={editedProblem.answer || ''}
                onChange={handleInputChange}
                className="form-control" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Fun Fact</label>
              <input 
                name="fun_fact"
                value={editedProblem.fun_fact || ''}
                onChange={handleInputChange}
                className="form-control" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Motivational Message</label>
              <input 
                name="motivational_message"
                value={editedProblem.motivational_message || ''}
                onChange={handleInputChange}
                className="form-control" 
              />
            </div>

            <div className="mb-3">
              <Button
                label='Save Changes'
                type="submit"
                className='btn btn-success'
                style={{ width: '100%' }}
              />
            </div>
          </form>
        </div>
      )}

      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5 border border-4 pt-4 pb-3 ps-4 pe-4">
          <h3 className="text-center mb-4">Fun Math</h3>
          <div className="mb-3">
  <label className="form-label">Grade<span className="text-danger">*</span></label>
  <select 
    {...register('grade', { required: 'Grade is required' })} 
    className={`form-select ${errors.grade ? 'is-invalid' : ''}`}
  >
 
    <option value="Kindergarten">Kindergarten</option>
    {[...Array(12).keys()].map(num => (
      <option key={num + 1} value={`Grade ${num + 1}`}>Grade {num + 1}</option>
    ))}
  </select>
  {errors.grade && <span className="invalid-feedback">{errors.grade.message}</span>}
</div>



          <div className="mb-3">
            <label className="form-label">Math Topic<span className="text-danger">*</span> </label>
            <input
              {...register('mathTopic', { required: 'Math topic is required.' })}
              className={`form-control ${errors.mathTopic ? 'is-invalid' : ''}`} 
            />
            {errors.mathTopic && <div className="invalid-feedback">{errors.mathTopic.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Interest<span className="text-danger">*</span> </label>
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
    style={{ backgroundColor: 'rgb(255, 104, 59)', color: 'white', marginRight: '8px', }}
  />

  <Button
    label={<><GrPowerReset /> reset</>}
    type="button" 
    className="btn btn-sm"
    style={{ backgroundColor: 'rgb(220, 53, 69)', color: 'white' }}
  />
</div>


        </form>
      )}
    </div>
  );
};
