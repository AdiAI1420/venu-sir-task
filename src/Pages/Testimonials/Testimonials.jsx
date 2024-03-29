import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./Testimonials.css";

import renu from "./images/renu.png";
import shree from "./images/shreelakshmi.png";
import varun from "./images/varun.png";

import Quotes from "./images/quote-icon-left.png";

function ClientComponent() {
  const teamDetails = [
    {
      id: 1,
      imageQuotes: Quotes,
      name: "Renu Goel",
      dev:'Senior Manager - IPD',
      role: "InSemi is the best place for professionals looking for the opportunities in VLSI domain. Amazing opportunities, diversified work environments, and great leadership are what make this organization unique in itself.",
      image: renu,
    },
    {
      id: 2,
      imageQuotes: Quotes,
      name: "Varun Kothapally",
      dev:'Associate Design Engineer - STA ',
      role: "I joined InSemi in the hard times of the COVID-19 Crisis and feel blessed to be a part of such a nice work culture. The management is very amicable and ever-ready for assistance. This is the best place (in my opinion) to learn, evolve and prove your talent.",
      image: shree,
    },
    {
      id: 3,
      imageQuotes: Quotes,
      name: "Shreelaxmi Govindan",
      dev:'Principal Engineer - Software',
      role: "I have been associated with InSemi for almost two fruitful years and the journey has been impeccably awesome! The affable nature of the whole team makes the organization feel like a close-knit family. InSemi is a great organization for learning and implementation. It provides us the ability to learn and translate those learning into action – the biggest competitive advantage.",
      image: varun,
    },

  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <div className="container text-dark " style={{backgroundColor:"white"}}>
      <h3 className="text-center">
        <strong style={{ color: "teal" }}> OUR TEAM</strong>
      </h3>

      <div className="notes mt-3 ">
     
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col mx-5 card  text-white" >
          <Slider {...settings} className="slider">
          {teamDetails.map((member) => (
            <div
              key={member.id}
              className=" slider-item d-flex flex-column align-items-center justify-content-center text-center"
            >
              <img
                src={member.imageQuotes}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
  
              <img
              src={member.image}
              alt={member.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginTop: "15px",
              }}
            />
            <h5 className="mt-3" style={{ color: "teal", fontSize: "1.5rem", fontWeight: "bold" }}>
            {member.name}
            <br/>{member.dev}
          </h5>
        
          <p className="text-dark" style={{ fontSize: "1.1rem", fontWeight: "400",padding:"200px" }}>
            {member.role}
          </p>
            </div>
          ))}
        </Slider>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientComponent;
