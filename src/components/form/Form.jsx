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
    
            console.log("Full API Response:", response); 
            let output = response.data?.bingo_card || [['No bingo data available']];
    
            // Ensure the array is a 5x5 grid and set the center cell (2,2) to be blank
            if (output.length === 5 && output[2].length === 5) {
                output[2][2] = ''; // Set the center cell to an empty string
            }
    
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

    const handleShuffle = () => {
        let cellsToShuffle = bingoOutput.flat().filter((item, index) => index !== 12 && item.trim() !== '');
    
        for (let i = cellsToShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cellsToShuffle[i], cellsToShuffle[j]] = [cellsToShuffle[j], cellsToShuffle[i]];
        }
    
        const newGrid = [];
        let shuffleIndex = 0;
    
        for (let row = 0; row < 5; row++) {
            const newRow = [];
            for (let col = 0; col < 5; col++) {
                if (row === 2 && col === 2) {
                    newRow.push(''); 
                } else {
                    newRow.push(cellsToShuffle[shuffleIndex++]);
                }
            }
            newGrid.push(newRow);
        }
    
        
        setBingoOutput(newGrid);
    };
    
    
    

    return (
        <>
        <Navbar/>
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
                    <div className='container-lg'>
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
                            <button type="button" onClick={handleShuffle} className="btn btn-secondary">
                                Shuffle
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};
