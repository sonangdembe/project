import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
// import { FaArrowRight, FaEraser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import './Contactus.css';
import gearImage from '../images/gear1.png';
import img from '../images/img.png';
import innovation from '../images/innovation.png';

export function Contactus() {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    // ... (other countries)
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  // Styles for buttons
  const btnStyle = { backgroundColor: '#FF683B', color: 'white' };
  const cancelStyle = { backgroundColor: '#dc3545', color: 'white' };

  // State management for form and loading state
  const [formData, setFormData] = useState({
    full_name: '', email: '', country: '', profession: '', organization: '', tools_categories: '', description: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, email, country, profession, organization, tools_categories, description } = formData;

    if (!full_name || !country || !profession || !tools_categories || !description) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (!executeRecaptcha) {
      toast.error('Failed to load reCAPTCHA.');
      return;
    }

    try {
      const token = await executeRecaptcha('submit');
      setRecaptchaToken(token);

      const emailValue = email || 'Not-Provided';
      const organizationValue = organization || 'Not-Provided';
      const dataToSend = {
        full_name, email: emailValue, country, profession,
        organization: organizationValue, tools_categories, description, recaptchaToken: token
      };

      setIsLoading(true);
      await axios.post('http://192.168.1.70:8080/google_sheet', dataToSend, { headers: { 'Content-Type': 'application/json' } });
      setFormData({
        full_name: '', email: '', country: '', profession: '', organization: '', tools_categories: '', description: ''
      });
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="custom-background">
        <Navbar expand="lg" className="full-width" />
        <div className="image-container">
          <img src={gearImage} alt="AI"/>
          <p className="ai-tools">AI Tools</p>
        </div>
        <p className='text-ai'>AI tool is a software application that<br />
          leverages artificial intelligence techniques<br />
          like machine learning, natural language<br />
          processing</p>
        <img className='chimpu-logo' src={img} alt='logo' />
        <img className='bulb' src={innovation} alt='bulb' />

        <ToastContainer position="top-right" autoClose={1500} />
        
        <div className="row  justify-content-end align-items-center" style={{ marginTop: '-575px' }}>
          {isLoading ? (
            <div className="col-md-4 text-center">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="d-flex  justify-content-end align-items-start custom-margin">

              <div className="row col-md-6 custom-form-container  border-4 custom-border-radius pt-4 pb-3 p-3  bg-body no-print">

                <form onSubmit={handleSubmit}>
                  <h4 className="text-center mb-4 font-sized">Request for Tools</h4>

                  <div className="row mb-3">
                  <div className="col-md-6 mb-2 p-1">
  <input
    type="text"
    className="form-control form-control-sm input-custom large-input"
    id="full_name"
    name="full_name"
    value={formData.full_name}
    onChange={handleChange}
    disabled={isLoading}
    placeholder="Enter your Name"
    required
  />
</div>


                    <div className="col-md-6 mb-2 p-1 ">
                      <input
                        type="email"
                        className="form-control form-control-sm input-custom large-input"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-2 p-1">
                      <select
                        className="form-select form-select-sm input-custom large-input"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Select your country"
                        disabled={isLoading}
                        required
                      >
                        <option value="">Select your country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 mb-2 p-1">
                      <input
                        type="text"
                        className="form-control form-control-sm input-custom large-input"
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        disabled={isLoading}
                        placeholder="Enter your profession"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-2 p-1">
                      <input
                        type="text"
                        className="form-control form-control-sm input-custom large-input"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        disabled={isLoading}
                        placeholder="Enter your organization (Optional)"
                      />
                    </div>

                    <div className="col-md-6 mb-2 p-1">
                      <input
                        type="text"
                        className="form-control form-control-sm input-custom large-input"
                        id="tools_categories"
                        name="tools_categories"
                        value={formData.tools_categories}
                        onChange={handleChange}
                        disabled={isLoading}
                        placeholder="Enter your category"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control form-control-lg "
                      id="description"
                      name="description"
                      rows="3"
                      value={formData.description}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div className="text-center mb-2">
                    <button type="submit" className="btn btn-sm m-2 rounded-4xl" style={{...btnStyle , fontFamily: 'Rubik, sans-serif' , width: '80px', height: '30px',
      fontWeight: 'bold',fontSize: '16px'  }} disabled={isLoading}>
                      Submit 
                      {/* <FaArrowRight /> */}
                    </button>
                    <button type="button" className="btn reset-button btn-sm m-2 rounded-8xl" style={{...cancelStyle,  fontFamily: 'Rubik, sans-serif', width: '80px', height: '30px',fontSize: '16px' ,
      fontWeight: 'bold' } } onClick={() => setFormData({
                      full_name: '', email: '', country: '', profession: '', organization: '', tools_categories: '', description: ''
                    })}>
                      Reset 
                      {/* <FaEraser /> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
