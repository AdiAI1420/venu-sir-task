import React, { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";
import emailjs from "@emailjs/browser";

import contactbanner from "./Images/contactbanner.jpg";
import contact12 from "./Images/contact-12.jpg";
import contact13 from "./Images/contact-13.jpg";
import contact14 from "./Images/contact-14.jpg";
import Map from "./Images/map.jpg";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
toast.success('Your message has been sent successfully.')
  return (
    <>
      <div className="banner-card ">
        <img src={contactbanner} className="banner" alt="Contact Banner" />

        <h2 className="text-white">Contact</h2>
        <div className="banner-text text-white">
          <h1 className="text-white">
            Welcome to soc-circuits!
            <br />
          </h1>
          <button className="banner-button">WRITE TO US →</button>

          <h1 className="text-white">We are here to assist you.</h1>
        </div>
      </div>
      <div className="whatWeDo">
        <div className="row">
          <div className="col-sm-4">
            <div className="whatWeDoItem text-center">
              <img decoding="async" src={contact12} alt="Business Query" />
              <h4>Business Query</h4>
              <a href="mailto:business@insemitech.com">business@soccircuits.com</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="whatWeDoItem text-center">
              <img decoding="async" src={contact13} alt="Careers" />
              <h4>Careers</h4>
              <a href="mailto:careers@insemitech.com">careers@soccircuits.com</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="whatWeDoItem text-center">
              <img decoding="async" src={contact14} alt="PR / Marketing" />
              <h4>PR / Marketing</h4>
              <a href="mailto:marketing@soccircuits.com">marketing@soccircuits.com</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="map-heading">Our Global Presence</h1>
        <img src={Map} className="map" alt="Global Presence Map" />
      </div>

      <div className="form-container">
        <h1>
          Get in Touch
          <br />{" "}
          <span className="form-subheading">
            Let’s talk about your requirements
          </span>
        </h1>

        <form ref={form} onSubmit={sendEmail} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="user_name" className="form-label">Name</label>
        <input type="text" className="form-control" id="user_name" name="user_name" />
      </div>
      <div className="mb-3">
        <label htmlFor="user_email" className="form-label">Email</label>
        <input type="email" className="form-control" id="user_email" name="user_email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" name="message" defaultValue={""} />
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
      </div>
    </>
  );
};

export default ContactPage;
