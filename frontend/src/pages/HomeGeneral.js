import "tailwindcss/tailwind.css";

import React, { useRef, useState, useEffect, useContext } from "react";  
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UsuariosContext from "../context/Usuario/usuariosContext";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
// Import Swiper styles
import "swiper/css";
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

const HomeGeneral = ()  => {  

  let usersContext = useContext(UsuariosContext);
  let { datosUsuario, verificarInicioSesion } = usersContext;
  
const images = [
  {
    url: 'https://e.rpp-noticias.io/normal/2022/04/14/192619_1247000.jpg',
    title: 'Cali, Colombia',
    width: '33.3%',
    height: '50%'
  },
  {
    url: 'https://f.rpp-noticias.io/2021/08/07/1129143img-7937jpg.JPG',
    title: 'Pasto, Confenalco',
    width: '33.3%',
    height: '50%'
  },
  {
    url: 'https://e.rpp-noticias.io/xlarge/2020/07/02/235623_964913.jpg',
    title: 'Universidad Icesi',
    width: '33.3%',
    height: '50%'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.2,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

  useEffect(() => {
    // Update the document title using the browser API 
    verificarInicioSesion()
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <Swiper pagination={true} modules={[Keyboard, Pagination, Navigation]}
              navigation={true} className="mySwiper ">
        <SwiperSlide><img src= "https://camlibro.com.co/wp-content/uploads/2022/07/estadisticas_libro_bannerCCL_opc2.png" alt="image1"/></SwiperSlide>
        <SwiperSlide><img src= "https://marketplace.canva.com/EAE6Y3NI9Uw/1/0/1600w/canva-azul-rojo-libros-limpio-gr%C3%A1fico-ventas-y-promociones-empresa-y-minorista-vuelta-al-cole-banner-YTUiCgcKqo4.jpg" alt="image2"/></SwiperSlide>
        <SwiperSlide><img src= "https://www.sophosenlinea.com/wp-content/uploads/2022/04/web-banner-7-1.jpg" alt= "image2"/></SwiperSlide>
      </Swiper>
      <main className="h-[100vh] flex-col gap-8 p-8 pt-0">
        <div className="flex-1 h-full overflow">
          <div>
            <h1 className="text-4xl font-medium text-gray-800 p-4 gap-4">Novedades</h1>
            <Bookmap user = {datosUsuario} />
          </div>
        </div>
      </main>
        <div className="flex-1 h-full overflow">
          <div>
          
      <main className="h-[20vh] flex-col gap-8 p-8 pt-0">
            <h1 className="text-4xl font-medium text-gray-800 p-4 gap-4">Ferias</h1></main>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default HomeGeneral;