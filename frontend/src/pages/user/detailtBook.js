import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/books/NavBar";
import Footer from "../../components/books/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import "../../css/detailtBook.css";

import BookContext from "../../context/Book/bookContext";

export default function DetailtBook() {
  const { codigobook } = useParams();

  let bookContext = useContext(BookContext);
  let { book, getBook } = bookContext;

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    // Update the document title using the browser API
    getBook(codigobook);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="cont-migapan">
        <Link to="/" className="iconHome link-a">
          <ion-icon name="home-outline"></ion-icon>
        </Link>
        <Link to="/books" className="link-a">
          Libros
        </Link>
        <Link to="" className="link-a">
          {book && book.titulo ? book.titulo : "Libro"}
        </Link>
      </div>
      <div className="body-detailt">
        <div className="cont-info-book">
          <div className="cont-img">
            <img
              src={book && book.portada ? book.portada : logo}
              className="img-preview"
              alt=""
            ></img>
            <div className="mas-imagenes">
              {book && book.imagenes ? (
                book.imagenes.map((img) => {
                  return <img src={img} alt=""></img>;
                })
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="cont-info">
            <h1>{book && book.titulo ? book.titulo : "Titulo del Libro"}</h1>
            <p>
              <span>Autor(a): </span>
              {book && book.autores
                ? book.autores.length > 0
                  ? book.autores[0].nombre
                  : "Nombre del autor"
                : "Nombre del autor"}
            </p>
            <p>
              <span>Publicado(a): </span>
              {book && book.fecha_publicacion
                ? book.fecha_publicacion
                : "fecha publicacion"}
            </p>
            <p>
              <span>Precio(a): </span>$
              {book && book.precio ? book.precio : "#####"}
            </p>
            <p>
              <span>Formatos(a): </span>
              {book && book.formatos ? (
                book.formatos.length > 0 ? (
                  <ul>
                    {book.formatos.map((fort) => {
                      return <li key={fort}>{fort.formato}</li>;
                    })}
                  </ul>
                ) : (
                  "Formatos existentes"
                )
              ) : (
                "Formatos existentes"
              )}
            </p>
            <div className="cont-btn-accion">
              <button>
                <ion-icon name="cart-outline"></ion-icon>
              </button>
              <button>
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="cont-acordeon">
          <div className={open === 3 ? "acordeon show" : "acordeon"}>
            <div className="header-acordeon">
              <h2>Descripcion del producto</h2>
              <button onClick={() => handleOpen(3)}>
                {open === 3 ? (
                  <ion-icon name="caret-up-outline"></ion-icon>
                ) : (
                  <ion-icon name="caret-down-outline"></ion-icon>
                )}
              </button>
            </div>
            <div className="body-acordeon">
              <p>{book && book.descripcion ? book.descripcion : ""}</p>
              <p>fecha_publicacion: {book && book.fecha_publicacion ? book.fecha_publicacion : ""}</p>
            </div>
          </div>
          <div className={open === 2 ? "acordeon show" : "acordeon"}>
            <div className="header-acordeon">
              <h2>Términos y condiciones</h2>
              <button onClick={() => handleOpen(2)}>
                {open === 2 ? (
                  <ion-icon name="caret-up-outline"></ion-icon>
                ) : (
                  <ion-icon name="caret-down-outline"></ion-icon>
                )}
              </button>
            </div>
            <div className="body-acordeon">
              <p>
                La disponibilidad, precios y promociones pueden variar en
                almacenes, domicilios y www.elmundodeloslibros.com.co . Oferta
                válida el día 23 de Octubre de 2022 | 2 unidades totales
                disponibles en www.elmundodeloslibros.com.co | No acumulables
                con otras promociones | Aplica para referencias seleccionadas |
                Los elementos de ambientación no forman parte de los productos |
                Las fotografías no representan el tamaño real de los productos |
                Máximo 2 unidades por cliente y por factura en productos de
                tecnología | Para las ofertas de tecnología solo se permite la
                compra diaria de máximo 2 unidades de una misma referencia por
                cédula y/o dirección
              </p>
            </div>
          </div>
        </div>
        {/*<div className="cont-carrusel">
          <h2>TE PODRIA INTERESAR</h2>
        </div>*/}
      </div>
      <Footer />
    </div>
  );
}
