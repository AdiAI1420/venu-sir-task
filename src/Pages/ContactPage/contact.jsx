import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import './contact.css';

const ContactPage = () => {
  return (
    <>
      <div className="banner-card mt-5">
        <img src="https://insemitech.com/wp-content/uploads/2022/05/contact-banner.jpg" className="banner" />
        <div className="banner-text text-white">
          <h2 className='text-white'>Contact</h2>
          <h1 className='text-white'>Welcome to soc-circuits!<br />We are here to assist you.</h1>
          <button className="banner-button">WRITE TO US →</button>
        </div>
      </div>
      <div className="whatWeDo">
        <div className="row">
          <div className="col-sm-4">
            <div className="whatWeDoItem text-center">
              <img decoding="async" src="https://insemitech.com/wp-content/uploads/2022/05/contact-12.png" />
              <h4>Business Query</h4>
              <a href="mailto:business@insemitech.com">business@soc circuits.com</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="whatWeDoItem text-center">
              <img decoding="async" src="https://insemitech.com/wp-content/uploads/2022/05/contact-13.png" />
              <h4>Careers</h4>
              <a href="mailto:careers@insemitech.com">careers@soccircuits.com</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="whatWeDoItem text-center">
              <img decoding="async" src="https://insemitech.com/wp-content/uploads/2022/05/contact-14.png" />
              <h4>PR / Marketing</h4>
              <a href="mailto:marketing@soccircuits.com">marketing@soccircuits.com</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='map-heading'>Our Global Presence</h1>
        <img src='https://insemitech.com/wp-content/uploads/2022/07/map.png' className='map' alt='Global Presence Map' />
      </div>
      <div className='card-description'>
        <div className='testimonial'>
          <h1>Headquartered at</h1>
          <p>2nd Floor, Discoverer Building,<br />
            ITPL, Bengaluru, Karnataka,<br />
            India - 560066</p>
        </div>
        <div className='testimonial'>
          <h1>Follow us on</h1>
          <FaLinkedinIn className='icons' />
          <FaTwitter className='icons' />
          <FaFacebookF className='icons' />
          <FaInstagram className='icons' />
          <TfiYoutube className='icons' />
        </div>
      </div>
      <div className='form-container'>
      <h1 >Get in Touch<br /> <span className='form-subheading'>Let’s talk about your requirements</span></h1>
      <div className='input-row'>
        <div className="form-group">
          <label htmlFor="first_name"></label>
          <input type="text" className="form-control" id="first_name" name="first_name" placeholder="First Name*" />
        </div>
        <div className="form-group">
          <label htmlFor="last_name"></label>
          <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Last Name*" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Business_Email"></label>
        <input type="email" className="form-control lengthbox" id="Business_Email" name="Business_Email" placeholder="Business Email*" />
      </div>
      <div className='input-row'>
        <div className="form-group">
          <label htmlFor="Phone_number"></label>
          <input type="tel" className="form-control" id="Phone_number" name="Phone_number" placeholder="Phone number*" />
        </div>
        <div className="form-group">
          <label htmlFor="Company_name"></label>
          <input type="text" className="form-control" id="Company_name" name="Company_name" placeholder="Company*" />
        </div>
      </div>
      <div className='input-row'>
        <div className="form-group">
          <label htmlFor="country"></label>
          <select className="form-control select-bar" id="country" placeholder="India" >
            <option>India*</option>
            <option>United States of America</option>
            <option>Canada</option>
            <option>Europe</option>
            <option>United Kingdom</option>
            <option>Singapore</option>
            <option>South Korea</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="query-type"></label>
          <select className="form-control select-bar" id="query-type" >
            <option>Sales / Business Query</option>
            <option>PR / Marketing</option>
            <option>Careers</option>
            <option>Partnerships</option>
            <option>Others</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="text"></label>
        <textarea className="form-control lengthbox" id="text" name="text" rows="4" cols="50" placeholder="Brief about your requirements*"></textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-primary" id='button'>SUBMIT</button>


        </div>


        </div>
        
    </>
  );
}

export default ContactPage;
