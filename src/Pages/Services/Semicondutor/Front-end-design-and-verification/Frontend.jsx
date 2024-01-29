import React from "react";
import OurServiceOffering from "./OurServiceOffering";
import AboutContact from "../../../Company/About/Aboutcontact/Aboutcontact";

const Frontend = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="card bg-dark text-white">
              <img
                src="https://insemitech.com/wp-content/uploads/2022/05/front-end-banner.jpg"
                className="card-img w-100"
                alt="frontend-banner"
              />
              <div className="card-img-overlay mt-5 py-5 text-center">
                <h5 className="card-title">Front End Design & Verification</h5>
                <p className="card-text">
                  Helping businesses develop error-free HDL models, completely
                  in line with the defined specifications
                </p>
                <a href="#" className="btn btn-primary">
                  TALK TO AN EXPERT
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-info display-6">
                Since our inception, InSemi has been a global market leader and
                customers’ first choice for expertise around VHDL, Verilog
                Systems, Vera, Specman, OVM, UVM, and many others.
              </h3>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <p className="text-muted">
                Interestingly, the success of an advanced IC design greatly
                relies on the ease with which it traverses the front-end designs
                and the related verifications. Much happily, the highly
                accomplished team of proficient engineers at InSemi specializes
                in delivering multiple projects in front-end RTL Designs and SoC
                integrations of multi-million gates IPs, FPGA & system
                architecture design, and ASIC & IP prototyping with FPGA. The
                team possesses hands-on experience across Automotive, Graphics,
                Server, Modem, 5G domains.
              </p>
              <p className="text-muted">
                With client-centric administrations in place, InSemi also has
                been a prominent leader in developing the most creative and
                error-free designs in the least turnaround time. UVM based
                functional & formal techniques, VIP Development, and Gate level
                simulations of IP and SoC designs are what make InSemi a
                one-stop destination.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurServiceOffering />
      </div>
      <div className="container" style={{paddingTop:"450px"}}>
        <div className="text-center mt-5">
          <h3>Front End Design & Verification Expertise</h3>
          <p className="px-3">
            With a laser-sharp focus on all design parameters, Team InSemi
            leaves no stone unturned in Front End Design and Verifications. This
            helps you get error-free designs in the least turnaround time.
          </p>
          <img
            src="https://insemitech.com/wp-content/uploads/2022/04/front-end-diagram.png"
            alt="front-end-banner"
            className="img-fluid rounded-pill w-100"
          />
        </div>

        <div className="container mt-4">
          <h1 className="text-center mb-4">Get in Touch</h1>
          <h2 className="text-center mb-4">
            Let's talk about your requirements
          </h2>

          <AboutContact />
        </div>
      </div>{" "}
    </>
  );
};

export default Frontend;
