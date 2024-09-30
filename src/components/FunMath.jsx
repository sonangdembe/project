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
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="text-center mb-3">Lesson Learn</h4>

          <div className="mb-3">
            <label className="form-label">Grade <span style={{ color: 'red' }}>*</span></label>
            <select {...register('grade', { required: 'Grade is required' })} className="form-select form-select-sm mb-3">
              <option value="">Select Grade</option>
              <option value="Kindergarten">Kindergarten</option>
              {[...Array(12).keys()].map(num => (
                <option key={num + 1} value={`Grade ${num + 1}`}>Grade {num + 1}</option>
              ))}
            </select>
            {errors.grade && <span className="text-danger">{errors.grade.message}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label">Math Topic <span style={{ color: 'red' }}>*</span></label>
            <textarea
              {...register('mathTopic', { required: 'Math Topic is required' })}
              className="form-control form-control-sm mb-2"
            />
            {errors.mathTopic && <span className="text-danger">{errors.mathTopic.message}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label">Interest <span style={{ color: 'red' }}>*</span></label>
            <textarea
              {...register('interest', { required: 'Interest is required' })}
              className="form-control form-control-sm mb-2"
            />
            {errors.interest && <span className="text-danger">{errors.interest.message}</span>}
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button type="submit" className="btn btn-sm" style={{ backgroundColor: 'rgb(255, 104, 59)', color: 'white' }}>
              Generate <FaArrowRight />
            </button>
            <button type="reset" className="btn btn-sm" style={{ backgroundColor: 'rgb(220, 53, 69)', color: 'white' }}>
              <GrPowerReset /> Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
