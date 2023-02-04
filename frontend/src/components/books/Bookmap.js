import "tailwindcss/tailwind.css";
import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";

import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql, useQuery } from '@apollo/client';
import BookContext from './../../context/Book/bookContext';
import logo from '../../assets/logo.png'

const Bookmap = () => {

  let bookContext = useContext(BookContext);
  let { books, getBooks } = bookContext;

  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API 
    getBooks()
    setCards(books)
  }, []);

  return (
    <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-6 p-2">
      {cards && cards.length > 0 ? cards.map((card) => {
        return (
          <Card
            img={card.portada}
            title={card.titulo}
            autor = {card.autores && card.autores.length > 0 ? card.autores[0].nombre : "Anonimo"} //revisar
            price={card.precio}
          />
        );
      }) : <Card
          img={logo}
          title={"Titulo"}
          autor = {"Autor"} //revisar
          price={"00000"}
        />
      }
    </div>
  );
};

export default Bookmap;