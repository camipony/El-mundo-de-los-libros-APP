import "tailwindcss/tailwind.css";
import Card from "../components/Card";
import Header from "../components/Header";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "../assets/css/Banner.css";
import image from "../assets/images/ban1.jpg"
// import required modules
import { Pagination } from "swiper";
import Footer from "../components/Footer";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src= {image} alt="image1"/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <main className="h-[100vh] flex-col gap-8 p-8 pt-0">

        <div className="flex-1 h-full overflow">

          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-6 p-2">
            <Card
              img="https://storage.googleapis.com/catalogo-libros/extralarge/4bb7e248-7e6a-f46e-7cac-5f036c6e94ab_imagen.jpg"
              title="La Historia del dinero"
              autor="Jozsef Robert"
              price="40.000"    
            />
            <Card
              img="https://storage.googleapis.com/catalogo-libros/extralarge/9b80c54b-62f7-3270-14f4-6377fc502ba7_imagen.JPG"
              title="Luna Latina en Manhattan"
              autor="Jaime Manrrique"
              price="65.000"
            />
            <Card
              img="https://storage.googleapis.com/catalogo-libros/extralarge/9b80c54b-62f7-3270-14f4-6377fc502ba7_imagen.JPG"
              title="Luna Latina en Manhattan"
              autor="Jaime Manrrique"
              price="65.000"
            />
            <Card
              img="https://storage.googleapis.com/catalogo-libros/extralarge/4bb7e248-7e6a-f46e-7cac-5f036c6e94ab_imagen.jpg"
              title="La Historia del dinero"
              autor="Jozsef Robert"
              price="40.000"   
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;