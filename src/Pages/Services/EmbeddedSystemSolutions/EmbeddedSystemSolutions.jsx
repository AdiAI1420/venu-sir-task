import React from "react";

import "./EmbeddedSystemSolutions.css";
const EmbeddedSystemSolutions = () => {


  jQuery(function($){
    $(".form-trigger-bod").on("click", function(e){
    e.preventDefault();
    $(this).html($(this).html() == '<span class="fa fa-chevron-up"></span>' ? '<span class="fa fa-chevron-down"></span>' : '<span class="fa fa-chevron-up"></span>');
    var trigger = $(".form-trigger-bod").attr("data-target");
    console.log(trigger);
    $("."+trigger).slideToggle("show hide");
    });
    
    $(".form-trigger-frmwr").on("click", function(e){
    e.preventDefault();
    $(this).html($(this).html() == '<span class="fa fa-chevron-up"></span>' ? '<span class="fa fa-chevron-down"></span>' : '<span class="fa fa-chevron-up"></span>');
    var trigger = $(".form-trigger-frmwr").attr("data-target");
    console.log(trigger);
    $("."+trigger).slideToggle("show hide");
    });
    
    $(".form-trigger-fpga").on("click", function(e){
    e.preventDefault();
    $(this).html($(this).html() == '<span class="fa fa-chevron-up"></span>' ? '<span class="fa fa-chevron-down"></span>' : '<span class="fa fa-chevron-up"></span>');
    var trigger = $(".form-trigger-fpga").attr("data-target");
    console.log(trigger);
    $("."+trigger).slideToggle("show hide");
    });
    
    $(".form-trigger-fpgavrf").on("click", function(e){
    e.preventDefault();
    $(this).html($(this).html() == '<span class="fa fa-chevron-up"></span>' ? '<span class="fa fa-chevron-down"></span>' : '<span class="fa fa-chevron-up"></span>');
    var trigger = $(".form-trigger-fpgavrf").attr("data-target");
    console.log(trigger);
    $("."+trigger).slideToggle("show hide");
    });
    
    $(".form-trigger-mech").on("click", function(e){
    e.preventDefault();
    $(this).html($(this).html() == '<span class="fa fa-chevron-up"></span>' ? '<span class="fa fa-chevron-down"></span>' : '<span class="fa fa-chevron-up"></span>');
    var trigger = $(".form-trigger-mech").attr("data-target");
    console.log(trigger);
    $("."+trigger).slideToggle("show hide");
    });
    
    $(".form-trigger-software").on("click", function(e){
    e.preventDefault();
    $(this).html($(this).html() == '<span class="fa fa-chevron-up"></span>' ? '<span class="fa fa-chevron-down"></span>' : '<span class="fa fa-chevron-up"></span>');
    var trigger = $(".form-trigger-software").attr("data-target");
    console.log(trigger);
    $("."+trigger).slideToggle("show hide");
    });
    
    });



    
  const sectionStyle = {
    backgroundSize: "contain",
    backgroundPosition: "top center",
    backgroundImage:
      "url(https://insemitech.com/wp-content/uploads/2022/04/embed-offerings-bg.png)",
    important: "true",
    marginTop: "50%",
    marginBottom: "20px", // Adjust the value as needed
  };

  return (
    <>
      <div id="page-container">
        <div id="et-main-area">
          <div id="main-content">
            <article
              id="post-317"
              className="post-317 page type-page status-publish hentry"
            >
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    <div className="">
                      <div className="et_pb_module et_pb_fullwidth_slider_0 et_pb_slider et_slider_auto et_slider_speed_3000">
                        <div className="et_pb_slides">
                          <div
                            className="et_pb_slide et_pb_slide_0 et_pb_bg_layout_dark et_pb_media_alignment_center et-pb-active-slide"
                            data-slide-id="et_pb_slide_0"
                          >
                            <div className="et_pb_container clearfix">
                              <div className="et_pb_slider_container_inner">
                                <div className="et_pb_slide_description">
                                  <h1 className="et_pb_slide_title">
                                    <a href="https://insemitech.com/services/talk-to-an-expert">
                                      Embedded System Solutions
                                    </a>
                                  </h1>
                                  <div className="et_pb_slide_content">
                                    <p>
                                      <span />
                                      <strong>____</strong>
                                    </p>
                                    <p>
                                      <span>
                                        Building high-performance embedded
                                        products that function just as ideated!
                                      </span>
                                    </p>
                                    <p>&nbsp;</p>
                                  </div>
                                  <div className="et_pb_button_wrapper">
                                    <a
                                      className="et_pb_button et_pb_more_button"
                                      href="https://insemitech.com/services/talk-to-an-expert"
                                    >
                                      Talk to an expert
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="et_pb_slide et_pb_slide_1 et_pb_bg_layout_dark et_pb_media_alignment_center"
                            data-slide-id="et_pb_slide_1"
                          >
                            <div className="et_pb_container clearfix">
                              <div className="et_pb_slider_container_inner">
                                <div className="et_pb_slide_description">
                                  <h1 className="et_pb_slide_title">
                                    <a href="https://insemitech.com/solutions/wireless-power-modules/">
                                      Wireless Power Modules
                                    </a>
                                  </h1>
                                  <div className="et_pb_slide_content">
                                    <p>
                                      <span />
                                      <strong>____</strong>
                                    </p>
                                    <p>
                                      <span>
                                        Multi-device, wireless, fast charging on
                                        the Go
                                      </span>
                                    </p>
                                    <p>&nbsp;</p>
                                  </div>
                                  <div className="et_pb_button_wrapper">
                                    <a
                                      className="et_pb_button et_pb_more_button"
                                      href="https://insemitech.com/solutions/wireless-power-modules/"
                                    >
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="et_pb_slide et_pb_slide_2 et_pb_bg_layout_dark et_pb_media_alignment_center"
                            data-slide-id="et_pb_slide_2"
                          >
                            <div className="et_pb_container clearfix">
                              <div className="et_pb_slider_container_inner">
                                <div className="et_pb_slide_description">
                                  <h1 className="et_pb_slide_title">
                                    <a href="https://insemitech.com/solutions/certified-bluetooth-modules-kt1020-ble/">
                                      Certified Bluetooth Modules (KT1020 BLE)
                                    </a>
                                  </h1>
                                  <div className="et_pb_slide_content">
                                    <p>
                                      <span />
                                      <strong>____</strong>
                                    </p>
                                    <p>
                                      <span>
                                        Quick, seamless connectivity with lesser
                                        power consumption
                                      </span>
                                    </p>
                                    <p>&nbsp;</p>
                                  </div>
                                  <div className="et_pb_button_wrapper">
                                    <a
                                      className="et_pb_button et_pb_more_button"
                                      href="https://insemitech.com/solutions/certified-bluetooth-modules-kt1020-ble/"
                                    >
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="et_pb_slide et_pb_slide_3 et_pb_bg_layout_dark et_pb_media_alignment_center"
                            data-slide-id="et_pb_slide_3"
                          >
                            <div className="et_pb_container clearfix">
                              <div className="et_pb_slider_container_inner">
                                <div className="et_pb_slide_description">
                                  <h1 className="et_pb_slide_title">
                                    <a href="https://insemitech.com/solutions/single-board-computer/">
                                      Single Board Computer (Skate – 212:
                                      Qualcomm R)
                                    </a>
                                  </h1>
                                  <div className="et_pb_slide_content">
                                    <p>
                                      <span />
                                      <strong>____</strong>
                                    </p>
                                    <p>
                                      <span>
                                        Accelerate Development of
                                        High-Performance, Low Power Consumption
                                        Devices
                                      </span>
                                    </p>
                                    <p>&nbsp;</p>
                                  </div>
                                  <div className="et_pb_button_wrapper">
                                    <a
                                      className="et_pb_button et_pb_more_button"
                                      href="https://insemitech.com/solutions/single-board-computer/"
                                    >
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="et_pb_slide et_pb_slide_4 et_pb_bg_layout_dark et_pb_media_alignment_center"
                            data-slide-id="et_pb_slide_4"
                          >
                            <div className="et_pb_container clearfix">
                              <div className="et_pb_slider_container_inner">
                                <div className="et_pb_slide_description">
                                  <h1 className="et_pb_slide_title">
                                    <a href="https://insemitech.com/solutions/intelligent-transport-management-system/">
                                      Intelligent Transport Management System
                                    </a>
                                  </h1>
                                  <div className="et_pb_slide_content">
                                    <p>
                                      <span />
                                      <strong>____</strong>
                                    </p>
                                    <p>
                                      <span>
                                        Gain insights into transport
                                        infrastructure to reduce cost, prevent
                                        accidents, and manage travel time
                                      </span>
                                    </p>
                                    <p>&nbsp;</p>
                                  </div>
                                  <div className="et_pb_button_wrapper">
                                    <a
                                      className="et_pb_button et_pb_more_button"
                                      href="https://insemitech.com/solutions/intelligent-transport-management-system/"
                                    >
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="et_pb_slide et_pb_slide_5 et_pb_bg_layout_dark et_pb_media_alignment_center"
                            data-slide-id="et_pb_slide_5"
                          >
                            <div className="et_pb_container clearfix">
                              <div className="et_pb_slider_container_inner">
                                <div className="et_pb_slide_description">
                                  <h1 className="et_pb_slide_title">
                                    <a href="https://insemitech.com/solutions/water-distribution-management-system/">
                                      Water Distribution Management System
                                    </a>
                                  </h1>
                                  <div className="et_pb_slide_content">
                                    <p>
                                      <span />
                                      <strong>____</strong>
                                    </p>
                                    <p>
                                      <span>
                                        Granular visibility into water
                                        distribution inconsistencies, ensuring
                                        streamlined water supply
                                      </span>
                                    </p>
                                    <p>&nbsp;</p>
                                  </div>
                                  <div className="et_pb_button_wrapper">
                                    <a
                                      className="et_pb_button et_pb_more_button"
                                      href="https://insemitech.com/solutions/water-distribution-management-system/"
                                    >
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="et_pb_slide et_pb_slide_6 et_pb_bg_layout_dark et_pb_media_alignment_center"
                            data-slide-id="et_pb_slide_6"
                          >
                            <div className="et_pb_container clearfix">
                              <div className="et_pb_slider_container_inner">
                                <div className="et_pb_slide_description">
                                  <h1 className="et_pb_slide_title">
                                    <a href="https://insemitech.com/solutions/vehicle-tracking-and-monitoring-system/">
                                      Vehicle Tracking and Monitoring System
                                    </a>
                                  </h1>
                                  <div className="et_pb_slide_content">
                                    <p>
                                      <span />
                                      <strong>____</strong>
                                    </p>
                                    <p>
                                      <span>
                                        Data-driven, real-time monitoring of
                                        vehicles for efficient fleet management
                                      </span>
                                    </p>
                                    <p>&nbsp;</p>
                                  </div>
                                  <div className="et_pb_button_wrapper">
                                    <a
                                      className="et_pb_button et_pb_more_button"
                                      href="https://insemitech.com/solutions/vehicle-tracking-and-monitoring-system/"
                                    >
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="et_pb_row et_pb_row_0 col-center col-sm-9">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>
                                InSemi’s{" "}
                                <span className="text-blue">
                                  Embedded System Solutions
                                </span>{" "}
                                enable organizations to transform an idea into
                                an innovative product reducing the cost and
                                time-to-market.
                              </h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space">
                            <div className="et_pb_divider_internal" />
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="">
                            <div className="">
                              <p>
                                We provide end-to-end embedded software
                                development services like firmware, BSP,
                                middleware, Linux, device drivers, and
                                bootloader development; hardware design services
                                like multilayer PCB and FPGA-based hardware
                                design.
                              </p>
                              <p>
                                Our dedicated and proficient team has vast
                                experience directing architectures for both ARM
                                &amp; X86. Additionally, it is acknowledged for
                                working with various microcontrollers. The team
                                assures reliability and quality while delivering
                                Embedded System Design services for Storage,
                                Automotive, Networking, and Consumer
                                applications.
                              </p>
                              <p>
                                InSemi Technologies majorly aims to decode this
                                complex software and hardware technology amalgam
                                to deliver robust, high performance, and
                                innovative products thus helping you gain a
                                significant competitive advantage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_3 et_section_regular">
                      <div className="et_pb_row et_pb_row_1">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2 className="text-center">What We Do</h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_code et_pb_code_0">
                            <div className="et_pb_code_inner">
                              <div className="whatwedoContainer text-center">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="whatwedoItem">
                                      <img
                                        decoding="async"
                                        src="https://insemitech.com/wp-content/uploads/2022/05/embed-3.png"
                                        className="card-top img-responsive"
                                      />
                                      <h4>Strategize</h4>
                                      <div className="hiddenText">
                                        Insemi's industry experts engage in a
                                        well-defined discussion with you to get
                                        a full understanding of your product
                                        requirements. We conduct open-ended
                                        discussions and stakeholder interviews
                                        to outline business goals, define scope
                                        and schedule, review existing
                                        infrastructure, etc.
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="whatwedoItem">
                                      <img
                                        decoding="async"
                                        src="https://insemitech.com/wp-content/uploads/2022/05/embed-4.png"
                                        className="card-top img-responsive"
                                      />
                                      <h4>Innovate</h4>
                                      <div className="hiddenText">
                                        The success of product engineering
                                        relies on how we innovate. At InSemi, we
                                        take your idea to market after
                                        continuous research and development. We
                                        even help you in idea generation, idea
                                        evaluation, and concept development
                                        through internal brainstorming,
                                        competitor analysis, surveys, and
                                        feasibility studies.
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="whatwedoItem">
                                      <img
                                        decoding="async"
                                        src="https://insemitech.com/wp-content/uploads/2022/05/embed-7.png"
                                        className="card-top img-responsive"
                                      />
                                      <h4>Design</h4>
                                      <div className="hiddenText">
                                        The designing phase is the leading step
                                        after extensive research, where we have
                                        a solution to the problem which needs to
                                        be composed in the form of a Principle
                                        design. Here we work on architecture
                                        designing, major component composition
                                        designing, UX designing, rapid
                                        prototyping, and design verification.
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="whatwedoItem">
                                      <img
                                        decoding="async"
                                        src="https://insemitech.com/wp-content/uploads/2022/05/embed-6.png"
                                        className="card-top img-responsive"
                                      />
                                      <h4>Manufacture</h4>
                                      <div className="hiddenText">
                                        Leveraging our partner ecosystem, we
                                        finally transform the idea into a fully
                                        functional product. Combining our
                                        expertise in product strategy,
                                        production innovation, and product
                                        design, we develop/manufacture
                                        deploy-ready, error-free designs into
                                        sustainable products. Here we focus on
                                        hardware design, mechanical design,
                                        thermal design, etc.
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
                    <h2 className="text-center">
                    Our Service Offerings
                  </h2>
                    <div
                      style={sectionStyle}
                      className="mt-5  mb-5 et_pb_section et_pb_section_5 ourServiceOfferingsWrapper et_pb_with_background et_section_regular"
                    >
                      <div
                        className="et_pb_row et_pb_row_3 col-center col-sm-4"
                        style={{ marginTop: "500px" }}
                      >
                        <div className="">
                          <div className="  et_pb_module et_pb_code et_pb_code_1">
                            <div className=" et_pb_code_inner">
                              <div className=" row">
                                <div className="col-sm-11 col-center">
                                  <div className="serviceOfferings">
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <div className="serviceOfferingItem board-design">
                                          <div className="row">
                                            <div className="col-sm-12 text-center">
                                              <img
                                                decoding="async"
                                                src="https://insemitech.com/wp-content/uploads/2022/04/board-design-icon.png"
                                              />
                                              <h4>Board Design</h4>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                              <p>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-target="wpcf17"
                                                  className="form-trigger-bod"
                                                >
                                                  <span className="fa fa-chevron-down" />
                                                </a>
                                              </p>
                                            </div>
                                            <div className="col-sm-12 wpcf17">
                                              <ul>
                                                <li>
                                                  Schematics and PCB Layout
                                                  Designing
                                                </li>
                                                <li>
                                                  Technical Feasibility Analysis
                                                </li>
                                                <li>
                                                  BoM Cost Feasibility Analysis
                                                </li>
                                                <li>Thermal Simulation</li>
                                                <li>
                                                  Pre &amp; Post Layout Signal
                                                  Integrity Analysis
                                                </li>
                                                <li>
                                                  Reliability Analysis – FMEA,
                                                  MTBF Prediction
                                                </li>
                                                <li>
                                                  PCB fabrication, Assembly, and
                                                  Testing
                                                </li>
                                                <li>Board Bring-up</li>
                                                <li>Validation Tests</li>
                                                <li>
                                                  Design Verification Tests
                                                </li>
                                                <li>
                                                  EMI/ EMC and Regulatory
                                                  Certifications Management
                                                </li>
                                                <li>
                                                  Production Handover &amp;
                                                  Support
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="serviceOfferingItem software-design">
                                          <div className="row">
                                            <div className="col-sm-12 text-center">
                                              <img
                                                decoding="async"
                                                src="https://insemitech.com/wp-content/uploads/2022/04/embed-software-design.png"
                                              />
                                              <h4>
                                                Embedded Software Design &amp;
                                                Development
                                              </h4>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                              <p>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-target="wpcf67"
                                                  className="form-trigger-software"
                                                >
                                                  <span className="fa fa-chevron-down" />
                                                </a>
                                              </p>
                                            </div>
                                            <div className="col-sm-12 wpcf67">
                                              <ul>
                                                <li>
                                                  Embedded Software Development
                                                  on RTOS / Linux
                                                </li>
                                                <li>Architecture Design</li>
                                                <li>Embedded UI Designs</li>
                                                <li>
                                                  Programming
                                                  <ul>
                                                    <li>
                                                      Assembly Level Programming
                                                    </li>
                                                    <li>
                                                      C / Embedded C / C++
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  Manual Testing &amp; Test
                                                  Automation
                                                </li>
                                                <li>Custom Integrations</li>
                                                <li>API-based Integrations</li>
                                                <li>Performance Tuning</li>
                                                <li>Software Maintenance</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="serviceOfferingItem firmware-design">
                                          <div className="row">
                                            <div className="col-sm-12 text-center">
                                              <img
                                                decoding="async"
                                                src="https://insemitech.com/wp-content/uploads/2022/04/firmware-design-icon.png"
                                              />
                                              <h4>Firmware Design</h4>
                                            </div>
                                            <div className="col-sm-12 text-center"></div>
                                            <div className="col-sm-12 wpcf27">
                                              <ul>
                                                <li>
                                                  Board Support Packages
                                                  Development (ARM &amp; x86)
                                                  <ul>
                                                    <li>
                                                      Boot Loader Development
                                                    </li>
                                                    <li>
                                                      Device Driver Development
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  Baremetal Firmware Development
                                                </li>
                                                <li>
                                                  Firmware Validation (Manual
                                                  and Automated)
                                                </li>
                                                <li>
                                                  Assembly Level Programming
                                                </li>
                                                <li>Embedded C / C</li>
                                                <li>OS Migration</li>
                                                <li>
                                                  Feature Innovation &amp;
                                                  Enhancement
                                                </li>
                                                <li>
                                                  Protocol Stack Integration
                                                </li>
                                                <li>
                                                  Automated Production Testing
                                                </li>
                                                <li>
                                                  Manual Production Testing
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="serviceOfferingItem fpga-verification">
                                          <div className="row">
                                            <div className="col-sm-12 text-center">
                                              <img
                                                decoding="async"
                                                src="https://insemitech.com/wp-content/uploads/2022/04/embed-fpga-verification-icon.png"
                                              />
                                              <h4>
                                                FPGA/ASIC Verification and
                                                Validation
                                              </h4>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                              <p>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-target="wpcf47"
                                                  className="form-trigger-fpgavrf"
                                                >
                                                  <span className="fa fa-chevron-down" />
                                                </a>
                                              </p>
                                            </div>
                                            <div className="col-sm-12 wpcf47">
                                              <ul>
                                                <li>Test Plan Creation</li>
                                                <li>Test Bench Architecture</li>
                                                <li>
                                                  Test Bench Design &amp;
                                                  Development
                                                </li>
                                                <li>Test Case Execution</li>
                                                <li>
                                                  Multi-level Verification
                                                </li>
                                                <li>
                                                  Assertion based Verification
                                                </li>
                                                <li>Code Coverage</li>
                                                <li>Functional Coverage</li>
                                                <li>
                                                  Scripting / Script Development
                                                </li>
                                                <li>
                                                  VHDL/Verilog/System
                                                  Verilog/UVM/OVM based services
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="serviceOfferingItem mechanical-deign">
                                          <div className="row">
                                            <div className="col-sm-12 text-center">
                                              <img
                                                decoding="async"
                                                src="https://insemitech.com/wp-content/uploads/2022/04/embed-mechanical-deign-icon.png"
                                              />
                                              <h4>Mechanical Design</h4>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                              <p>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-target="wpcf57"
                                                  className="form-trigger-mech"
                                                >
                                                  <span className="fa fa-chevron-down" />
                                                </a>
                                              </p>
                                            </div>
                                            <div className="col-sm-12 wpcf57">
                                              <ul>
                                                <li>Thermal Design</li>
                                                <li>Industrial Design</li>
                                                <li>
                                                  Concept Drawing to Format
                                                  Conversion
                                                </li>
                                                <li>Enclosure Design</li>
                                                <li>Rapid Prototyping</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="serviceOfferingItem fpga-design">
                                          <div className="row">
                                            <div className="col-sm-12 text-center">
                                              <img
                                                decoding="async"
                                                src="https://insemitech.com/wp-content/uploads/2022/04/embed-fpga-icon.png"
                                              />
                                              <h4>FPGA Design</h4>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                              <p>
                                                <a
                                                  href="javascript:void(0)"
                                                  data-target="wpcf37"
                                                  className="form-trigger-fpga"
                                                >
                                                  <span className="fa fa-chevron-down" />
                                                </a>
                                              </p>
                                            </div>
                                            <div className="col-sm-12 wpcf37">
                                              <ul>
                                                <li>
                                                  End-to-End FPGA based Designs
                                                  using Devices ranging from
                                                  Low-density CPLDs to
                                                  Multi-million gate FPGAs/
                                                  SOCs.
                                                </li>
                                                <li>
                                                  RTL and Test Bench Design
                                                  (Verilog/VHDL)
                                                </li>
                                                <li>Platform Migration</li>
                                                <li>IP Core Development</li>
                                                <li>
                                                  API based 3rd party IP Core
                                                  Integration
                                                </li>
                                                <li>
                                                  Functional and Timing
                                                  Simulation
                                                </li>
                                                <li>Glue Logic Synthesis</li>
                                                <li>
                                                  FPGA based ASIC Prototyping
                                                </li>
                                              </ul>
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
                    </div>
                    <div className="">
                      <div className="">
                        <div className="et_pb_column et_pb_column_1_5 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough et_pb_column_empty"></div>
                        <div className="et_pb_column et_pb_column_3_5 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2 className="text-center font-white">
                                How We Transform – Idea to High-Performance
                                Product
                              </h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p className="text-center font-white">
                                We help you drive innovation with utmost
                                precision. Our dedicated team of experts can
                                drive embedded product projects end-to-end with
                                complete ownership or can augment your team no
                                matter where you are in the product development
                                journey and drive it to realize a viable
                                product.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div className="et_pb_row et_pb_row_5 col-center col-sm-7">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_0">
                            <span className="et_pb_image_wrap ">
                              <img
                                fetchpriority="high"
                                decoding="async"
                                width={1101}
                                height={509}
                                src="https://insemitech.com/wp-content/uploads/2022/04/embed-diagram.png"
                                alt
                                title="embed-diagram"
                                srcSet="https://insemitech.com/wp-content/uploads/2022/04/embed-diagram.png 1101w, https://insemitech.com/wp-content/uploads/2022/04/embed-diagram-980x453.png 980w, https://insemitech.com/wp-content/uploads/2022/04/embed-diagram-480x222.png 480w"
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1101px, 100vw"
                                className="wp-image-360"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_7 et_section_regular">
                      <div className="et_pb_row et_pb_row_6 col-sm-11 col-center">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_6  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2 className="text-center">
                                Plug n Play Solutions{" "}
                              </h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_code et_pb_code_2">
                            <div className="et_pb_code_inner">
                              <div className="plugnplaySolutions">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="plugnplaySolutionItem">
                                      <div className="row">
                                        <div className="col-sm-3 text-center">
                                          <img
                                            decoding="async"
                                            src="https://insemitech.com/wp-content/uploads/2022/04/embed-wireless-icon.png"
                                          />
                                        </div>
                                        <div className="col-sm-9">
                                          <h4>Wireless Power Modules</h4>
                                          <p>
                                            Our best-in-class WIRELESS POWERED
                                            MODULES will help you speed up time
                                            to market and build solutions from
                                            5W to 15W
                                          </p>
                                          <a
                                            href=""
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            EXPLORE →
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="plugnplaySolutionItem">
                                      <div className="row">
                                        <div className="col-sm-3 text-center">
                                          <img
                                            decoding="async"
                                            src="https://insemitech.com/wp-content/uploads/2022/04/embed-certified-bluetooth-icon.png"
                                          />
                                        </div>
                                        <div className="col-sm-9">
                                          <h4>Certified Bluetooth Modules</h4>
                                          <p>
                                            Our CERTIFIED BLUETOOTH MODULES
                                            reduce the time, risk, and cost of
                                            wireless development
                                          </p>
                                          <a
                                            href="/solutions/certified-bluetooth-modules-kt1020-ble/"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            EXPLORE →
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="plugnplaySolutionItem">
                                      <div className="row">
                                        <div className="col-sm-3 text-center">
                                          <img
                                            decoding="async"
                                            src="https://insemitech.com/wp-content/uploads/2022/04/embed-single-board-icon.png"
                                          />
                                        </div>
                                        <div className="col-sm-9">
                                          <h4>Single Board Computers</h4>
                                          <p>
                                            Qualcomm® Snapdragon™ 212 powered
                                            SINGLE BOARD COMPUTER
                                          </p>
                                          <a
                                            href="/solutions/single-board-computer/"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            EXPLORE →
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="plugnplaySolutionItem">
                                      <div className="row">
                                        <div className="col-sm-3 text-center">
                                          <img
                                            decoding="async"
                                            src="https://insemitech.com/wp-content/uploads/2022/04/embed-inteligent-transport-icon.png"
                                          />
                                        </div>
                                        <div className="col-sm-9">
                                          <h4>
                                            Intelligent Transport Management
                                            System
                                          </h4>
                                          <p>
                                            ITMS solution is designed to
                                            optimize travel times and hence fuel
                                            consumption
                                          </p>
                                          <a
                                            href="/solutions/intelligent-transport-management-system/"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            EXPLORE →
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="plugnplaySolutionItem">
                                      <div className="row">
                                        <div className="col-sm-3 text-center">
                                          <img
                                            decoding="async"
                                            src="https://insemitech.com/wp-content/uploads/2022/04/embed-water-distribution-icon.png"
                                          />
                                        </div>
                                        <div className="col-sm-9">
                                          <h4>
                                            Water Distribution Management System
                                          </h4>
                                          <p>
                                            WDMS aims to provide visibility and
                                            accountability of every drop of
                                            water
                                          </p>
                                          <a
                                            href="/solutions/water-distribution-management-system/"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            EXPLORE →
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="plugnplaySolutionItem">
                                      <div className="row">
                                        <div className="col-sm-3 text-center">
                                          <img
                                            decoding="async"
                                            src="https://insemitech.com/wp-content/uploads/2022/04/embed-vehicle-tracking-icon.png"
                                          />
                                        </div>
                                        <div className="col-sm-9">
                                          <h4>
                                            Vehicle Tracking and Monitoring
                                            System
                                          </h4>
                                          <p>
                                            A fully integrated vehicle tracking
                                            and monitoring system
                                          </p>
                                          <a
                                            href="/solutions/vehicle-tracking-and-monitoring-system/"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            EXPLORE →
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
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbeddedSystemSolutions;
