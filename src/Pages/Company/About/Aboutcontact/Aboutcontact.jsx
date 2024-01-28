import React, { useState } from 'react';
import {  FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ContactForm from './ContactForm';

const AboutContact = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleButtonClick = () => {
    setShowContactForm(!showContactForm); // Toggle the state
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
       
     

          <center>

          <h1>Get in Touch
          Let’s talk about your requirements</h1>
            <button className="btn btn-primary" onClick={handleButtonClick}>
              {showContactForm ? (
                <>
                  <FaChevronUp /> 
                </>
              ) : (
                <>
                 <FaChevronDown />
                </>
              )}
            </button>
          </center>

          {showContactForm && <ContactForm />}
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
