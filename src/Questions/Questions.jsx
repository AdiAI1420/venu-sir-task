import React from 'react';
import why_us from "./Images/why-us.png"
import "./Questions.css"
const Questions = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What is our project service?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                
                >
                  <div className="accordion-body">
                    <p>
                      Our project service in the software application involves
                      delivering tailored solutions to meet the unique needs of
                      your projects. We focus on providing high-quality
                      software development, efficient project management, and
                      innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do we ensure project success?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  // Remove data-bs-parent to allow closing the accordion items independently
                >
                  <div className="accordion-body">
                    <p>
                      Ensuring project success is our top priority. We follow
                      industry best practices, collaborate closely with our
                      clients, and leverage cutting-edge technologies to
                      deliver projects on time and within budget. Our team is
                      dedicated to excellence and client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What sets our project service apart?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  // Remove data-bs-parent to allow closing the accordion items independently
                >
                  <div className="accordion-body">
                    <p>
                      Our project service stands out due to our commitment to
                      innovation, transparent communication, and a client-first
                      approach. We believe in building long-term partnerships
                      and delivering solutions that empower your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
          <div className="image-container">
            <img src={why_us} alt="why-us" className="img-fluid hover-effect" />
          </div>    </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
