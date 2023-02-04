import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/books/NavBar";
import Footer from "../../components/books/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
        <Link to="" className="iconHome link-a">
          <ion-icon name="home-outline"></ion-icon>
        </Link>
        <Link to="" className="link-a">
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
          <Fragment>
            <Accordion open={open === 1} disabled>
              <AccordionHeader onClick={() => handleOpen(1)}>
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
        <div className="cont-carrusel">
          <h2>TE PODRIA INTERESAR</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
