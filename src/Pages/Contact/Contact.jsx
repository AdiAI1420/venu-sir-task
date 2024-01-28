import React from 'react';

import './Contact.css';
const Contact = () => {
  return (
    <>
      <div className="container-fluid overlay-container" style={{ backgroundColor: "#efefef", padding: "50px 0" }}>
        
      
      <div className="container">
      <div className="row ">
        <div className="col-md-6 mx-auto contact-form ">
        <h3 className='fw-bold ' style={{ fontSize: "35px",color:"#1d3654" }}>Thinking of Innovation?</h3>
        <h6 className="mb-5" style={{ fontSize: "20px",color:"#1d3654" }}>
          Let InSemi be your technology partner to accelerate and execute.
        </h6>
      </div>

          <div  className="col-md-6  card shadow"  style={{
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
          }}>

          <h3 className=' text-center fw-semibold' style={{marginTop:"50px",color:"#1d3654"}}>Get in Touch <br /> Let’s talk about your requirments</h3>
            <form className="p-4" method="post" id="contactForm" name="contactForm">
             

              <div className="row " >
             
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder='First Name' />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder='Last Name' />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder='Business Email' />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder='Company' />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <select className="form-control" name="Country" id="Country">
                      <option value="India">India</option>
                      <option value="United States of America">United States of America</option>
                      {/* ... other options ... */}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea placeholder='Brief about your requirements' className="form-control" name="requirements" id="requirements" rows="5"></textarea>
              </div>

              <div className="form-group mt-3">
                <input className="btn btn-primary" id="submitForm" type="submit" value="Submit" />
              </div>

              <div className="wpcf7-response-output" aria-hidden="true"></div>
            </form>
          </div>
        </div></div>
      </div>
    </>
  );
};

export default Contact;
