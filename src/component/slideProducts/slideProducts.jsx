// import React from 'react'
import Products from './products'
import './slidePrioduct.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function SlideProducts({ data, title }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="sldice_products slide">
      <div style={{ width: "1100px" }} className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>{data?.[0]?.description}</p>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Products item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProducts
