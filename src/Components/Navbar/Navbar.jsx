import React from "react";
import "./Navbar.css";
import { SiOnlyoffice } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark text-dark sticky-top" style={{backgroundColor:"#444540"}}>
        <div class="container">
          <Link  class="navbar-brand custom-navbar-brand" to="/">
     <img src="../assets/logo.jpg"   style={{width:"120px",height:"80px"}} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav text-dark  ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle me-auto"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <SiOnlyoffice /> Company
                </Link>

                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      News Room
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle me-auto"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaServer /> Services
               </Link>

                <ul class="dropdown-menu">
                  <li class="nav-item dropend">
                    <Link
                      class="nav-link dropdown-toggle me-auto"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Semiconductor
                   </Link>

                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/Frenend">
                          Front End Design &#038; Verification
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/PhysicalDesign">
                          Physical Design and Signoff
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/DesignforTest">
                          Design for Test
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/FoundationIPDesign">
                          Foundation IP Design &#038; Automation
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropend">
                    <Link
                      class="nav-link dropdown-toggle me-auto"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Embedded
                   </Link>

                    <ul class="dropdown-menu">
                      <li>
                        <Link
                          class="dropdown-item"
                          to="/EmbeddedSystemSolutions"
                        >
                          Embedded System Solutions
                       </Link>
                      </li>
                      <li>
                        <Link
                          class="dropdown-item"
                          to="/PostSiliconValidationEmulation"
                        >
                          Post Silicon Validation &#038; Emulation
                       </Link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropend">
                    <Link
                      class="nav-link dropdown-toggle me-auto"
                      to="/SoftwareDevelopmentTesting"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Software
                   </Link>

                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="#">
                          Software Development &#038; Testing
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle me-auto"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaCcMastercard /> Careers
               </Link>

                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/Lifeatinsemi">
                      Life at InSemi
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Currentopennings">
                      Current Openings
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle me-auto"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GrResources /> Resources
               </Link>

                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/Blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Educationcenter">
                      Education Center
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Contact">
                  {" "}
                  <MdLocalPhone /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
