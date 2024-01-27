import React from 'react';

import "./Team.css"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import One from "./images/one.jpg";
import Two from "./images/two.jpg";
import Three from "./images/three.jpg";
import Four from "./images/four.jpg";

const Team = () => {
  return (
    <>
      <section id="team" className="team">
        <div className="container-fluid py-5">
          <div className="section-title">
            <h2 className='text-center'>Our Amazing Teams</h2>
        
            <p>It's great to hear that you have a hard-working team in the IT industry, especially in support work. IT support is a crucial function that helps ensure the smooth operation of technology systems within an organization. Here are a few tips to enhance the effectiveness and well-being of your hard-working team:</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="member">
                    <img src={One} className="img-fluid" alt="" style={{ height: "250px" }} />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                      </div>
                      <div className="social">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
                  <div className="member">
                    <img src={Two} className="img-fluid" alt="" style={{ height: "250px" }} />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                      </div>
                      <div className="social">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
                  <div className="member">
                    <img src={Three} className="img-fluid" alt="" style={{ height: "250px" }} />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                      </div>
                      <div className="social">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
                  <div className="member">
                    <img src={Four} className="img-fluid" alt="" style={{ height: "250px" }} />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                      </div>
                      <div className="social">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
