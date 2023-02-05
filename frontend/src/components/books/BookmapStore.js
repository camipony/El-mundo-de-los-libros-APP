import "tailwindcss/tailwind.css";
import React, { useContext, useEffect, useState } from "react";
import CardShop from "./CardShop";

import BookContext from './../../context/Book/bookContext';
import logo from '../../assets/logo.png'


const itemsPerPage = 8;
const ProductList = ({ products, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-6 p-2">
      {products.slice(startIndex, endIndex).map((card, index) => (
        <div key={index} className="product">
          <CardShop
            key = {card.codigo}
            img={card.portada}
            title={card.titulo}
            autor = {card.autores && card.autores.length > 0 ? card.autores[0].nombre : "Anonimo"} //revisar
            price={card.precio}
            codigo = {card.codigo}
          />
        </div>
      ))
      }
    </div>
  );
};

const BookmapStore = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let bookContext = useContext(BookContext);
  let { books, getBooks } = bookContext;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if( books && books.length > 0 ) setCards(books)
    else {
      getBooks()
    }
  }, [books]);

  return (
    <div >
      <ProductList products={cards} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(cards.length / itemsPerPage)}>
          Next
        </button>
      </div>
    </div>

  );
};

export default BookmapStore;