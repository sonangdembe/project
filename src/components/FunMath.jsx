import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa'; 
import { GrPowerReset } from 'react-icons/gr';

export const FunMath = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <h2 style={styles.formTitle}>Lesson Learn</h2>

      <div style={styles.formGroup}>
        <label style={styles.label}>Grade</label>
        <select {...register('grade', { required: 'Grade is required' })} style={styles.input}>
          <option value="">Select Grade</option>
          <option value="Kindergarten">Kindergarden</option>
          {[...Array(12).keys()].map(num => (
            <option key={num + 1} value={`Grade ${num + 1}`}>Grade {num + 1}</option>
          ))}
        </select>
        {errors.grade && <span style={styles.error}>{errors.grade.message}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Math Topic</label>
        <textarea
          {...register('mathTopic', { required: 'Math Topic is required' })}
          style={styles.textarea}
        />
        {errors.mathTopic && <span style={styles.error}>{errors.mathTopic.message}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Interest</label>
        <textarea
          {...register('interest', { required: 'Interest is required' })}
          style={styles.textarea}
        />
        {errors.interest && <span style={styles.error}>{errors.interest.message}</span>}
      </div>

      <div style={styles.buttonContainer}>
        <button type="submit" style={styles.button}>
          Submit <FaArrowRight style={styles.icon} />
        </button>
        <button type="reset" style={styles.button1}>
          <GrPowerReset style={styles.icon} /> Reset
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '700px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    marginBottom: '20px',
    fontSize: '24px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#fd7e14',
    color: 'white',
    padding: '4px 8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px', 
    },
  button1: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: ' 2px',
    margin:'2px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px', 
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  icon: {
    marginLeft: '4px', 
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};
