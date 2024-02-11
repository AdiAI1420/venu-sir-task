import React from 'react'

import "./Currentopennings.css"

const Currentopennings = () => {
  return (
  <>
  




  <div id="main-content mt-5">
  <div className="mt-5">



  <div className="card text-white mt-5">
  <img
    src="https://insemitech.com/wp-content/uploads/2022/04/blog-banner-bg.jpg"
    className="card-img mt-5"
    alt="..."
  />
  <div className="card-img-overlay text-center justify-content-center" style={{marginTop:"150px"}}>
    <h1 className="card-title text-white">Join the Soc Circuits Team</h1>
 
    
  
  </div>
</div>




    <div className="pageContainers card">
      <div className="pageContent">
        <div className="careerJobListingsContainer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h3 style={{ fontSize: 18 }}>Refine your search</h3>
                <div className="categorySection">
                  <p className="panelTitle solution">
                    <a
                      href="#"
                      className="categoryMinimizer"
                      data-target="job-category"
                    >
                      Category
                      <span
                        className="pull-right font-orange"
                        style={{ fontSize: 17, fontWeight: "bold" }}
                      >
                        <i className="fa fa-angle-down" />
                      </span>
                    </a>
                  </p>
                  <ul className="filterList card ">
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="design-for-test"
                          data-target="design-for-test"
                        />{" "}
                        Design for Test
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="emulation-psv"
                          data-target="emulation-psv"
                        />{" "}
                        Emulation &amp; PSV
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="foundation-ip-design-automation"
                          data-target="foundation-ip-design-automation"
                        />{" "}
                        Foundation IP Design &amp; Automation
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="front-end-design-verification"
                          data-target="front-end-design-verification"
                        />{" "}
                        Front End Design &amp; Verification
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="physical-design-and-signoff"
                          data-target="physical-design-and-signoff"
                        />{" "}
                        Physical Design and Signoff
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="software-development-testing"
                          data-target="software-development-testing"
                        />{" "}
                        Software Development &amp; Testing
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="categorySection">
                  <p className="panelTitle solution">
                    <a
                      href="#"
                      className="categoryMinimizer"
                      data-target="job-category"
                    >
                      Industry
                      <span
                        className="pull-right font-orange"
                        style={{ fontSize: 17, fontWeight: "bold" }}
                      >
                        <i className="fa fa-angle-down" />
                      </span>
                    </a>
                  </p>
                  <ul className="filterList">
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="vlsi"
                          data-target="vlsi"
                        />{" "}
                        VLSI
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="job-category"
                          className="job-category"
                          id="software-and-embedded"
                          data-target="software-and-embedded"
                        />{" "}
                        Software and Embedded
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="categorySection">
                  <p className="panelTitle solution">
                    <a
                      href="#"
                      className="categoryMinimizer"
                      data-target="country-based"
                    >
                      Country
                      <span
                        className="pull-right font-orange"
                        style={{ fontSize: 17, fontWeight: "bold" }}
                      >
                        <i className="fa fa-angle-down" />
                      </span>
                    </a>
                  </p>
                  <ul className="filterList" style={{ display: "none" }}>
                    <li>
                      <label>
                        <input
                          type="radio"
                          className="country-category"
                          name="country-category"
                          id="us"
                          data-target="us"
                        />{" "}
                        US
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          className="country-category"
                          name="country-category"
                          id="india"
                          data-target="india"
                        />{" "}
                        India
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          className="country-category"
                          name="country-category"
                          id="uk"
                          data-target="uk"
                        />{" "}
                        UK
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          className="country-category"
                          name="country-category"
                          id="australia"
                          data-target="australia"
                        />{" "}
                        Australia
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="careersJobListRight">
                  <div className="row">
                    <div className="col-sm-7">
                      <h3
                        className="careerRightSideTitle"
                        style={{ fontSize: 18 }}
                      >
                        List of Jobs
                      </h3>
                    </div>
                    <div className="col-sm-5">
                      <ul
                        className="pull-right list-inline"
                        style={{ fontSize: 16 }}
                      >
                        <li id="searchedJobs">13 Jobs </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="careersJobListContainer">
                  <h4 className="noJobs hide">
                    Sorry, there are no positions available at this time!
                  </h4>
                  <div className="row">
                    <div
                      className="col-sm-6 shadow careerJobItem   "
                      data-myorder={1}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/linux-device-driver-developer/">
                          Linux Device Driver Developer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 5 to 10
                          Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/linux-device-driver-developer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem   "
                      data-myorder={2}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/senior-validation-engineerpostsilicon-or-presilicon/">
                          Senior Validation Engineer(Postsilicon or Presilicon)
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore &amp; Hyderabad
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 2 to 10
                          Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/senior-validation-engineerpostsilicon-or-presilicon/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  software-development-testing "
                      data-myorder={3}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/cpu-performance-engineer/">
                          CPU Performance Engineer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 5+ Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/cpu-performance-engineer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  software-and-embedded "
                      data-myorder={4}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/pcb-design-layout-engineer/">
                          PCB Design/Layout Engineer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 5+ Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/pcb-design-layout-engineer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  software-and-embedded "
                      data-myorder={5}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/labview-engineer/">
                          LabView Engineer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 4 to 15
                          years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/labview-engineer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  most-popular "
                      data-myorder={6}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/embedded-firmware-with-storage/">
                          Embedded Firmware with Storage
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 4 to 10
                          years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/embedded-firmware-with-storage/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  most-popular "
                      data-myorder={7}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/rtl-asic-engineer/">
                          RTL-ASIC﻿ Engineer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 5 Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/rtl-asic-engineer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  foundation-ip-design-automation "
                      data-myorder={8}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/memory-layout-engineer/">
                          Memory Layout Engineer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 3+ Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/memory-layout-engineer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem   "
                      data-myorder={9}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/memory-design-engineer/">
                          Memory Design Engineer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 3+ Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/memory-design-engineer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  featured "
                      data-myorder={10}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/design-verification-engineer/">
                          Senior Design Verification Engineer
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore, Hyderabad{" "}
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 7 Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/design-verification-engineer/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  physical-design "
                      data-myorder={11}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/conformal-low-power-clp/">
                          Conformal Low Power [CLP]
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 8 Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/conformal-low-power-clp/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  physical-design "
                      data-myorder={12}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/physical-design/">
                          Physical Design Engineer Lead
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 8 Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/physical-design/">
                          More Info →
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 shadow careerJobItem  software-and-embedded "
                      data-myorder={13}
                    >
                      <h4 className="careerJobItemTitle">
                        <a href="https://insemitech.com/careers/security-firmware-development/">
                          Security Firmware Development
                        </a>
                      </h4>
                      <p className="careerLocationDetails">
                        Location:{" "}
                        <b>
                          <span className="glyphicon glyphicon-map-marker" />{" "}
                          Bangalore
                        </b>
                      </p>
                      <p>
                        Experience:{" "}
                        <b>
                          <span className="glyphicon glyphicon-time" /> 5 to 10
                          Years
                        </b>
                      </p>
                      <div className="careerJobItemDescription">
                        <p />
                      </div>
                      <div className="careerJobItemCTA">
                        <a href="https://insemitech.com/careers/security-firmware-development/">
                          More Info →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
  </>
  )
}

export default Currentopennings