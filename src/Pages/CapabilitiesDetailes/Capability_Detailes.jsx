import React from "react";
import { FaRegLightbulb, FaCogs, FaWrench, FaMicrochip, FaRocket } from "react-icons/fa";
import "./Capability_Detailes.css";

const CapabilityDetailes = () => {
  return (
    <section id="about" className="about" style={{ backgroundColor: "#efefef" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 video-box">
            <img
              src="https://img.freepik.com/free-photo/corporate-workers-brainstorming-together_23-2148804565.jpg?size=626&ext=jpg&ga=GA1.1.692514039.1706246503&semt=ais"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-stretch">
            <CapabilityBox icon={<FaRegLightbulb />} title="Front End Design and Verification" />
            <CapabilityBox icon={<FaCogs />} title="Physical Design and Signoff" />
            <CapabilityBox icon={<FaWrench />} title="Design for Testability (DFT)" />
            <CapabilityBox icon={<FaMicrochip />} title="Foundation IP Design and Automation" />
            <CapabilityBox icon={<FaRocket />} title="Post Silicon Validation & Emulation" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-stretch">
            <CapabilityBox icon={<FaRegLightbulb />} title="Front End Design and Verification" />
            <CapabilityBox icon={<FaCogs />} title="Physical Design and Signoff" />
          </div>

          <div className="col-lg-6 video-box">
            <img
              src="https://mobilethinking.ch/wp-content/uploads/2021/02/digital_transformation.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CapabilityBox = ({ icon, title }) => {
  return (
    <div className="icon-box">
      <div className="icon card">{icon}</div>
      <h4 className="title">
        <a href="">{title}</a>
      </h4>
    </div>
  );
};

export default CapabilityDetailes;
