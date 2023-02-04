import "tailwindcss/tailwind.css";

import React, { useRef, useState, useEffect, useContext } from "react";  
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UsuariosContext from "../context/Usuario/usuariosContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "../css/banner.css";
import image from "../assets/ban2.jpg"
import image2 from "../assets/ban3.jpg"

// import required modules
import { Pagination } from "swiper";
import Footer from "../components/books/Footer";
import Bookmap from "../components/books/Bookmap";
import NavBar from "../components/books/NavBar";

const HomeGeneral = ()  => {  

  let usersContext = useContext(UsuariosContext);
  let { datosUsuario, verificarInicioSesion } = usersContext;

  useEffect(() => {
    // Update the document title using the browser API 
    verificarInicioSesion()
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide><img src= {image} alt="image1"/></SwiperSlide>
        <SwiperSlide><img src= {image2} alt="image2"/> 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <main className="h-[100vh] flex-col gap-8 p-8 pt-0">
        <div className="flex-1 h-full overflow">
          <div>
            <h1 className="text-4xl font-medium text-gray-800 p-4 gap-4">Novedades</h1>
            <Bookmap user = {datosUsuario} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomeGeneral;