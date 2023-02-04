import React, { useRef } from "react";
// For Typescript 
// import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swipper.css";


const SliderComponent = (datosUsuario) => {
const swiperRef = useRef();

console.log("da "+datosUsuario)
// For Typescript!
// const swiperRef = useRef<SwiperCore>();  


const sliderSettings = {
  440: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  680: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

return (
    <div>
      <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>

      <Swiper
        slidesPerView={3}
        breakpoints={sliderSettings}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
        user={datosUsuario}
        </SwiperSlide>
        <SwiperSlide>
        user={datosUsuario}
        </SwiperSlide>
        <SwiperSlide>
        user={datosUsuario}
        </SwiperSlide>
        <SwiperSlide>
        user={datosUsuario}
        </SwiperSlide>
        <SwiperSlide>
        user={datosUsuario}
        </SwiperSlide>
      </Swiper>

      <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
    </div>
  );
};

export default SliderComponent;