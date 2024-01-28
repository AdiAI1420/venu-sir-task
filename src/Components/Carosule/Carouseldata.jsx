// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const Carouseldata = () => {
//   return (
//     <Carousel>
//       <div>
//         <img src="../assets/front-end-banner.jpg" alt="Slide 1" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div>
//       <img src="../assets/home-banner-1.jpg"alt="Slide 2" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div>
//       <img src="../assets/emulation-banner.jpg"alt="Slide 3" />
//         <p className="legend">Legend 3</p>
//       </div>
//     </Carousel>
//   );
// };

// export default Carouseldata;







import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Capabilities from '../../Pages/Capabilities/Capabilities';
import DiffrenceCounts from '../../Pages/Diifrence_Counts/DiffrenceCounts';
import Team from '../../Pages/Team_Detailes/Team';
import Contact from '../../Pages/Contact/Contact';

import Testimonials from "../../Pages/Testimonials/Testimonials"


const Carouseldata = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(../assets/front-end-banner.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Empowering the Digital Infrastructure of Tomorrow | InSemi Technology

          </div>
          <div className="subtitle" data-swiper-parallax="-200">
     ----
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
             
            The sustainable semiconductor &amp; embedded technology company, taking the digital world by storm and delivering value through innovation

            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Front End Design & Verification
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
  ----
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Helping businesses develop error-free HDL models, completely in line with the defined specifications
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Physical Design & Signoff
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
    ----
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Helping businesses achieve the best PPA goals in the least turnaround time
            </p>
          </div>
        </SwiperSlide>
      </Swiper>





      <Capabilities />



      <DiffrenceCounts />
      
      
      <Team />
      
      <Testimonials/>
      
      
      <Contact />

    </>
  );
}
export default Carouseldata;
