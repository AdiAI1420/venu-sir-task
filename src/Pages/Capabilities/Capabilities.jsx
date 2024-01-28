import React from "react";

const Capabilities = () => {
  return (
    <section id="about" className="about" style={{backgroundColor:"#efefef"}}>
      <div className="container  mt-5 py-5">
      <h1 className="text-center">Our Capabilities</h1>
        <div className="row  justify-content-center align-items-center">
          <div className="col-lg-6 video-box">
            <img
              src="https://insemitech.com/wp-content/uploads/2022/05/home-semicon.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-stretch">
            <CapabilityBox
              imageSrc="https://insemitech.com/wp-content/uploads/2022/05/home-capabilities-27.png"
              title="Front End Design and Verification"
            />
            <CapabilityBox
              imageSrc="https://insemitech.com/wp-content/uploads/2022/05/home-capabilities-30.png"
              title="Physical Design and Signoff"
            />
            <CapabilityBox
              imageSrc="https://insemitech.com/wp-content/uploads/2022/05/home-capabilities-28.png"
              title="Design for Testability (DFT)"
            />
            <CapabilityBox
              imageSrc="https://insemitech.com/wp-content/uploads/2022/05/home-capabilities-29.png"
              title="Foundation IP Design and Automation"
            />
            <CapabilityBox
              imageSrc="https://insemitech.com/wp-content/uploads/2022/05/home-capabilities-31.png"
              title="Post Silicon Validation & Emulation"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-stretch">
            <CapabilityBox
              imageSrc="https://insemitech.com/wp-content/uploads/2022/05/home-capabilities-27.png"
              title="Front End Design and Verification"
            />
            <CapabilityBox
              imageSrc="https://insemitech.com/wp-content/uploads/2022/05/home-capabilities-30.png"
              title="Physical Design and Signoff"
            />
          </div>

          <div className="col-lg-6 video-box ">
            <img
              src="https://insemitech.com/wp-content/uploads/2022/05/home-embeddedsoftware.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CapabilityBox = ({ imageSrc, title }) => {
  return (
    <div className="icon-box">

      <div className="icon card">
        <img src={imageSrc} alt="" />
      </div>
      <h4 className="title">
        <a href="">{title}</a>
      </h4>
    </div>
  );
};

export default Capabilities;
