import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';
import axios from 'axios';
import './Form.css'; 
export const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [showOutput, setShowOutput] = useState(false);
    const [bingoOutput, setBingoOutput] = useState([]);

    const onSubmit = async (data) => {
        setLoading(true);
        setBingoOutput([]);

        try {
            const response = await axios.post(
                'https://teachertools-api.chimpvine.com/bingo',
                {
                    topic: data.topic || "Math"
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log("Full API Response:", response); // Log entire response to inspect structure
            const output = response.data?.bingo_card || [['No bingo data available']];
            setBingoOutput(output);
            setShowOutput(true);
        } catch (error) {
            console.error('Error fetching bingo data:', error);
            if (error.response) {
                setBingoOutput([['Error:', error.response.data.message || 'Server Error']]);
            } else if (error.request) {
                setBingoOutput([['No response from server. Please try again later.']]);
            } else {
                setBingoOutput([['An unexpected error occurred.']]);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        reset();
        setShowOutput(false);
        setBingoOutput([]);
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="container bg-white p-4 col-md-6 rounded border border-4 shadow">
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : !showOutput ? (
                    <>
                        <h4 className="text-black mb-4 text-center">Bingo Game</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <div>
                        <h4 className="text-center mb-4">Here’s Your Bingo Game!</h4>
                        <div className="bingo-grid">
                            {bingoOutput.map((row, rowIndex) => (
                                row.map((item, colIndex) => (
                                    <div 
                                        key={`${rowIndex}-${colIndex}`} 
                                        className={`bingo-cell ${!item.trim() ? 'empty' : ''}`}
                                    >
                                        {item || ' '}
                                    </div>
                                ))
                            ))}
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button type="button" onClick={handleReset} className="btn btn-danger">
                                <GrPowerReset /> Reset
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
