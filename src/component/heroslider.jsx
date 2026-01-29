import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay , Pagination } from 'swiper/modules';
export default function Heroslider() {
   const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
  <>
  <div className="hero">
    <div className="container">
<Swiper loop={true}
 autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Pagination,Autoplay]}
        className="mySwiper" >
        <SwiperSlide>
          <div className="content">
            <div className='text'>
             <h4>introdactin the new</h4>
             <h3>microsft xbox </h3>
             <p>Welcome</p>
            <button> <Link to="/" className="btn">shop now</Link></button>
          </div>
           </div>
          <img src="/src/img/banner_Hero3.jpg" alt="img" />
            </SwiperSlide>
            <SwiperSlide>
          <div className="content">
            <div className='text'>
             <h4>introdactin the new</h4>
             <h3>microsft xbox </h3>
             <p>Welcome</p>
            <button> <Link to="/" className="btn">shop now</Link></button>
          </div>
           </div>
                         <img src="/src/img/banner_Hero2.jpg" alt="img" />
        </SwiperSlide>
        <SwiperSlide>

          <div className="content">
            <div className='text'>
             <h4>introdactin the new</h4>
             <h3>microsft x box </h3>
             <p>Welcome</p>
            <button> <Link to="/" className="btn">shop now</Link></button>
          </div>
           </div>
           <img src="/src/img/banner_Hero1.jpg" alt="img" />
        </SwiperSlide>    
      </Swiper>
    </div>
  </div>
    </>
  )
}
