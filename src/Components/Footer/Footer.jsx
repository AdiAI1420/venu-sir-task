import React from 'react'

import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';


import "./Footer.css"


const Footer = () => {
  return (
<>

<>







  <footer id="footer" style={{backgroundColor:"#25272e"}} className='mt-5'>

       
    <div className="footer-top"style={{backgroundColor:"#25272e"}} >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="row">
        

            <div className="col-lg-3 col-md-6 footer-links">
              <h4 className='text-white'>Company</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#" className="no-underline">About Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#" className="no-underline">Newsroom</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#" className="no-underline">Resources</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#" className="no-underline">Blogs</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#" className="no-underline">Education Center</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#" className="no-underline">Careers</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#" className="no-underline">Current Openings</a>
                </li>
              </ul>
            </div>
            
            
            
             

              <div className="col-lg-3 col-md-6 footer-links">
              <h4 className='text-white'>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#" className="no-underline">Physical Design and Signoff</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#" className="no-underline">Front End Design & Verification</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#" className="no-underline">Foundation IP Design & Automation</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#" className="no-underline">Design for Test</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#" className="no-underline">Emulation & PSV</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#" className="no-underline">Embedded System Solutions</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#" className="no-underline">Software Development & Testing</a>
                </li>
              </ul>
            </div>
  

            <div className="col-lg-3 col-md-6 footer-contact">
            <h4 className="text-white">Contact Us</h4>
            <address className="text-white-50">
              <p>
                H.No. 5-5-35/315/14, <br /> Flat No. 501, Sai Baba Colony,
              </p>
              <p>
                Vignanpuri colony main road, Kukatpally Village & Mandal,
              </p>
              <p>
                Medchal-Malkajgiri District, Hyderabad, India
              </p>
              <br />
              <strong>Phone:</strong> +91 90141 90909
              <br />
              <strong>Email:</strong> venu@gmail.com
            </address>
          </div>
          
              <div className="col-lg-3 col-md-6 footer-info">
              <h3 className='text-white'>About soc circuits </h3>
              <p className='text-white-50'>
              SoC Circuits is a semiconductor design and embedded system solutions company with 900+ technology specialists located across the globe, empowering digital infrastructure of tomorrow.
              </p>
              <div className="social-links mt-3">
              <a href="#" className="no-underline" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" className="no-underline" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" className="no-underline" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" className="no-underline" target="_blank" rel="noopener noreferrer">
                <FaSkype />
              </a>
              <a href="#" className="no-underline" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
  <div className="copyright">
    <p style={{ fontSize: '14px', color: '#888', margin: '0' }}>
      © Copyright
      <strong>
        <span style={{ color: '#555' }}>
          {' '}
       |   Contact | Careers | Privacy Policy © 2024 SoC Circuits Technologies Pvt Ltd. |
        </span>
      </strong>
      All Rights Reserved | <strong> Designed by</strong><a href="#" style={{ color: '#3498db', textDecoration: 'none' }}> Venu</a>
    </p>
  </div>
 
</div>

  </footer>

</>


</>
  )
}

export default Footer