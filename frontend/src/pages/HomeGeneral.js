import "tailwindcss/tailwind.css";

import React, { useRef, useState, useEffect, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BookContext from '../context/Book/bookContext';
import UsuariosContext from "../context/Usuario/usuariosContext";
import { SliderComponent } from "../components/SliderComponent"


// Import Swiper styles
import "../css/swipper.css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "../css/banner.css";
import image from "../assets/ban2.jpg"
import image2 from "../assets/ban3.jpg"

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import Footer from "../components/books/Footer";
import Bookmap from "../components/books/Bookmap";
import NavBar from "../components/books/NavBar";

const HomeGeneral = () => {

  let usersContext = useContext(UsuariosContext);
  let { datosUsuario, verificarInicioSesion, saveAutenticarUsuario } = usersContext;

  let bookContext = useContext(BookContext);
  let { books, getBooks } = bookContext;

  useEffect(() => {
    // Update the document title using the browser API 
    verificarInicioSesion()
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide><img src={image} alt="image1" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="image2" /> 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <main className="h-[100vh] flex-col gap-8 p-8 pt-0">

        <div className="flex-1 h-full overflow">

          <div>
            <h1 className="text-4xl font-medium text-gray-800 p-4 gap-4">Novedades</h1>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomeGeneral;