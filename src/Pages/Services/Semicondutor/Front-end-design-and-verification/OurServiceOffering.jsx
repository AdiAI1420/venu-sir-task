import React from 'react';

const OurServiceOffering = () => {
  const cardsData = [
    {
      image: 'https://insemitech.com/wp-content/uploads/2022/04/front-end-design.png',
      title: 'Design',
      items: [
        'SoC Architecture and IP Micro Arch',
        'SoC and Sub-System Integration',
        'DFT RTL Design and Integration',
        'RTL Quality Checks',
        'Synthesis, Timing, Caliber and FEV',
        'Timing, Constraints and Constraints Validation',
      ],
    },
    {
      image: 'https://insemitech.com/wp-content/uploads/2022/04/front-end-design.png',
      title: 'Verification',
      items: [
        'Environment Architecture Development',
        'SoC Verification',
        'IP/SS Verification',
        'DFT/DFD Validation',
        'Power-aware Verification',
        'AMS',
        'CPU Verification',
        'Gate Level Simulations (GLS)',
        'VIP Development, 3rd party VIP Integration, Development and Modelling',
        'Assertions, Coverage and Formal Verification',
        'Automation and Regression Management',
      ],
    },
    {
      image: 'https://insemitech.com/wp-content/uploads/2022/04/front-end-fpga.png',
      title: 'FPGA',
      items: [
        'ASIC and IP Prototyping with FPGA',
        'FPGA and System Architecture Design',
        'RTL Design from Microarchitecture',
        'Verification of RTL in UVM/OVM and other Methodology',
        'Porting to Different FPGA, FPGA to ASIC Porting and Vice Versa',
        'Board Design and Bring up',
        'FPGA Fitment, Bitmap Generation',
        'FPGA/System Validation on Board',
        'Multi-Million Gates Complex FPGA Design and Validation',
      ],
    },
  ];

  return (
    <div className="container-fluid mt-5 bg-dark">
      <h1 className="text-center mb-4 text-white">Our Service Offerings</h1>
      <div className="card bg-dark text-white mb-4 px-5">
        <img
          src="https://img.freepik.com/premium-photo/business-man-touching-service-screen_218381-4149.jpg?size=626&ext=jpg&ga=GA1.1.692514039.1706246503&semt=ais"
          className="card-img"
          alt="Background"
        />
        <div className="card-img-overlay text-center mt-5">
          <div className="row">
            {cardsData.map((card, index) => (
              <div key={index} className="col-md-4 mb-4"  style={{marginTop:"550px"}}>
                <div className="card">
                  <img src={card.image} className="card-img-top" alt={card.title} style={{width:"50px",height:"50px",alignItems:'center',justifyContent:'center'}} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <ul className="list-group list-group-flush">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="list-group-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceOffering;
