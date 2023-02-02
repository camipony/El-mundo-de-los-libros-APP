import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql, useQuery } from '@apollo/client';
const axios = require("axios");


const Bookmap = () => {
  const [cards, setCards] = useState([]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:5000/graphql',

    })
  })

  const get_books = async (req, res) => {
    try {
      const query = gql`
        query{
          getBooks {
            _id
            codigo
            titulo
            descripcion
            precio
            estado
            portada
            autores {
              _id
              nombre
              pseudonimo
            }
    fecha_publicacion
    fecha_actualizacion
    fecha_creacion
  }
}
    }
    `
      client.query({ query })
        .then((response) => {
          console.log(response.data.getBooks)
          setCards(...cards, response.data.getBooks);

        })

    } catch (e) {
      console.log("hola")
    }
  }


  useEffect(() => {
    // Update the document title using the browser API 
    get_books()
  }, []);

  return (
    <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-6 p-2">
      {cards && cards.length > 0 ? cards.map((card) => {
        return (
          <Card
            img={card.portada}
            title={card.titulo}
            autor = {card.autores.nombre} //revisar
            price={card.precio}
          />
        );
      }) : ""}
    </div>
  );
};

export default Bookmap;