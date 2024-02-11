import React, { useEffect, useRef } from 'react';
import './DiffrenceCounts.css';

const DiffrenceCounts = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  const animate = (obj, initVal, lastVal, duration) => {
    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    animate(text1Ref.current, 0, 60, 7000);
    animate(text2Ref.current, 0, 80, 7000);
    animate(text3Ref.current, 0, 1100, 7000);
  }, []);

  return (
    <div className='container-fluid mt-5'>
      <p>
        <div className="d-flex justify-content-center fs-1 fw-bold" style={{ color: 'teal', fontFamily: 'Arial, sans-serif' }}>The InSemi Difference</div>
      </p>
      <p>
        <div className="container  text-center mt-5">
          <div className="row">
            <div className="col-sm">
              <p ref={text1Ref} className="fs-2 font-weight-bold" style={{ color: 'red', fontFamily: 'Arial, sans-serif',fontSize:"80px" }}>60+</p>
              <p style={{ color: 'white', fontFamily: 'Arial, sans-serif',fontSize:"20px" }}>Satisfied Clients</p>
            </div>
            <div className="col-sm">
              <p ref={text2Ref} className="fs-2 font-weight-bold" style={{ color: 'skyblue', fontFamily: 'Arial, sans-serif' ,fontSize:"80px"}}>80%</p>
              <p style={{ color: 'skyblue', fontFamily: 'Arial, sans-serif',fontSize:"20px" }}>of engineers work on lower technology nodes (7nm ff)</p>
            </div>
            <div className="col-sm ">
              <p className="fs-2 font-weight-bold" style={{ color: 'orange', fontFamily: 'Arial, sans-serif',fontSize:"50px" }}><span ref={text3Ref}>1100+</span></p>
              <p style={{ color: 'orange', fontFamily: 'Arial, sans-serif',fontSize:"20px" }}>Technology Specialists</p>
            </div>
            <div className="col-sm">
              <p className="fs-2 font-weight-bold" style={{ color: 'green', fontFamily: 'Arial, sans-serif',fontSize:"50px" }}>9+</p>
              <p style={{ color: 'green', fontFamily: 'Arial, sans-serif',fontSize:"20px" }}>Years in Business</p>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
};

export default DiffrenceCounts;
