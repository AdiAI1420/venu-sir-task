// // import React from 'react';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // const Carouseldata = () => {
// //   return (
// //     <Carousel>
// //       <div>
// //         <img src="../assets/front-end-banner.jpg" alt="Slide 1" />
// //         <p className="legend">Legend 1</p>
// //       </div>
// //       <div>
// //       <img src="../assets/home-banner-1.jpg"alt="Slide 2" />
// //         <p className="legend">Legend 2</p>
// //       </div>
// //       <div>
// //       <img src="../assets/emulation-banner.jpg"alt="Slide 3" />
// //         <p className="legend">Legend 3</p>
// //       </div>
// //     </Carousel>
// //   );
// // };

// // export default Carouseldata;







// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './Carousel.css';

// // import required modules
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
// import Capabilities from '../../Pages/Capabilities/Capabilities';
// import DiffrenceCounts from '../../Pages/Diifrence_Counts/DiffrenceCounts';
// import Team from '../../Pages/Team_Detailes/Team';
// import Contact from '../../Pages/Contact/Contact';

// import Testimonials from "../../Pages/Testimonials/Testimonials"


// const Carouseldata = () => {
//   return (
//     <>
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         speed={600}
//         parallax={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Parallax, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <div
//           slot="container-start"
//           className="parallax-bg"
//           style={{
//             'background-image':
//               'url(../assets/front-end-banner.jpg)',
//           }}
//           data-swiper-parallax="-23%"
//         ></div>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//           Empowering the Digital Infrastructure of Tomorrow | InSemi Technology

//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//      ----
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
             
//             The sustainable semiconductor &amp; embedded technology company, taking the digital world by storm and delivering value through innovation

//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//           Front End Design & Verification
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//   ----
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//             Helping businesses develop error-free HDL models, completely in line with the defined specifications
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//           Physical Design & Signoff
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//     ----
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//             Helping businesses achieve the best PPA goals in the least turnaround time
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>





//       <Capabilities />



//       <DiffrenceCounts />
      
      
//       <Team />
      
//       <Testimonials/>
      
      
//       <Contact />

//     </>
//   );
// }
// export default Carouseldata;








import './Carousel.css';



import Capabilities from '../../Pages/Capabilities/Capabilities';
import DiffrenceCounts from '../../Pages/Diifrence_Counts/DiffrenceCounts';
import Team from '../../Pages/Team_Detailes/Team';
import Contact from '../../Pages/Contact/Contact';

import Testimonials from "../../Pages/Testimonials/Testimonials"

import React from 'react'

const Carouseldata = () => {
  return (
<>



<div className='mt-5'>
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
    
    
      </div>
    <div className="carousel-inner mt-4">
      <div className="carousel-item active">
        <img src="../assets/dft-banner.jpg" className="d-block w-100" alt="..."  style={{height:"600px"}}/>
        <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
          <h1 className=" bg-opacity-50  text-white">
          Front End Design & Verification</h1>
          <h6 className=" bg-opacity-50  text-white">
          Helping businesses develop error-free HDL models, completely in line with the defined specifications</h6>
          
        </div>
      </div>
      <div className="carousel-item">
        <img src="../assets/embedded-banner.jpg" className="d-block w-100" alt="..." style={{height:"600px"}} />
        <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0 ">
          <h2 className=" bg-opacity-50 py-2 px-4">Empowering the Digital Infrastructure of Tomorrow | InSemi Technology</h2>
          <p className=" bg-opacity-50 py-2 px-4">The sustainable semiconductor &amp; embedded technology company, taking the digital world by storm and delivering value through innovation
            slide.</p>
         
        </div>
      </div>
      <div className="carousel-item">
      <img src="../assets/emulation-banner.jpg" className="d-block w-100" alt="..." style={{height:"600px"}} />
        <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
          <h2 className=" bg-opacity-50 py-2 px-4">Third slide label</h2>
          <p className=" bg-opacity-50 py-2 px-4">Some representative placeholder content for the third
            slide.</p>
          
        </div>
      </div>
      <div className="carousel-item">
      <img src="../assets/front-end-banner.jpg" className="d-block w-100" alt="..." style={{height:"600px"}} />
      <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
        <h2 className=" bg-opacity-50 py-2 px-4">Forth slide label</h2>
        <p className=" bg-opacity-50 py-2 px-4">Some ddd representative placeholder content for the third
          slide.</p>
        
      </div>
    </div>
    </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  


     
<div>

<Capabilities />



<DiffrenceCounts />


<Team />

<Testimonials/>


<Contact />

</div>
</>
  )
}

export default Carouseldata