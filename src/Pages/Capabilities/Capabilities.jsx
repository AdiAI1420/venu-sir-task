import React from 'react';
import './Capabilities.css'; // Import the CSS file

const Capabilities = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card animated-card custom-card">
            <img
              src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?size=626&ext=jpg&ga=GA1.1.692514039.1706246503&semt=sph"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Insemitech Front End Design and Verification</h5>
              <p className="card-text">
                We specialize in cutting-edge Front End Design and Verification for semiconductor
                products, ensuring top-notch quality and performance.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card animated-card custom-card">
            <img
              src="https://img.freepik.com/free-photo/multiethnic-team-sharing-ideas-about-industrial-project-using-two-monitors-with-d-gears-metalic_482257-2641.jpg?size=626&ext=jpg&ga=GA1.1.692514039.1706246503&semt=ais"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Insemitech Physical Design and Signoff</h5>
              <p className="card-text">
                Our expertise extends to Physical Design and Signoff, providing comprehensive
                solutions for the semiconductor industry.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card animated-card custom-card">
            <img
              src="https://img.freepik.com/free-photo/desk-real-estate-agent_23-2147653322.jpg?size=626&ext=jpg&ga=GA1.1.692514039.1706246503&semt=ais"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Insemitech Design for Testability (DFT)</h5>
              <p className="card-text">
                We excel in Design for Testability, ensuring efficient testing processes and
                robust semiconductor designs.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card animated-card custom-card">
            <img
              src="https://img.freepik.com/free-photo/hand-touching-planet-earth_1134-210.jpg?size=626&ext=jpg&ga=GA1.1.692514039.1706246503&semt=ais"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Insemitech Foundation IP Design and Automation</h5>
              <p className="card-text">
                Our Foundation IP Design and Automation services contribute to the foundation of
                successful semiconductor solutions.
              </p>
            </div>
          </div>
        </div>
        </div>      </div>
    </>
  );
};

export default Capabilities;
