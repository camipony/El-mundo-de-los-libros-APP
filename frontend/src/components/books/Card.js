import "tailwindcss/tailwind.css";
import React from "react";
import "../../css/card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { img, title, autor, price, codigo } = props;

  const navigate = useNavigate();

  return (
    //<div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
    <div className="card bg-white p-4 rounded-2xl flex flex-col gap-2 w-full md:w-auto">
      <img
        src={img}
        className="w-full xl:w-40 h-82 lg:h-64 object-cover rounded-2xl"
      />
      <h1 className="text-xl text-black">{title}</h1>
      <span className="text-gray-400">{autor}</span>
      <div className="flex items-center gap-4">
        <h5 className="text-3xl text-[#0a0a09]">${price}</h5>
        <button onClick={() => {
          navigate('/books/'+codigo)
        }} className="bg-[#b90808] text-white font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200">
          Detalles
        </button>
      </div>
    </div>
  );
};

export default Card;