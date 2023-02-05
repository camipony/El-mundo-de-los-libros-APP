import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import {
  RiMoneyDollarCircleLine,
  RiFilter3Line,
  RiCloseLine,
} from "react-icons/ri";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <div
        className={`w-[80%] md:w-[40%] fixed lg:static top-0 ${
          showFilter ? "left-0" : "-left-full"
        } lg:w-80 h-full text-black transition-all bg-[#E2DEDE] p-2 lg:p-0 shadow-2xl lg:shadow-none z-50`}
      > 
        <div className="bg-[#E2DEDE] rounded-2xl p-4 mb-4">
          <h2 className="mb-4 text-black text-lg">Categoría</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="suspenso" className="accent-[#B90808]" />
              <label htmlFor="suspenso">Suspenso</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Drama"
                className="accent-[#B90808]"
              />
              <label htmlFor="Drama">Drama</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="Romance" className="accent-[#B90808]" />
              <label htmlFor="Romance">Romance</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Infantil"
                className="accent-[#B90808]"
              />
              <label htmlFor="Infantil">Infantil</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Ciencia Ficcion"
                className="accent-[#B90808]"
              />
              <label htmlFor="Strategy">Ciencia Ficcion</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Superador"
                className="accent-[#B90808]"
              />
              <label htmlFor="Simulator">Superador</label>
            </div>
            
            
          </div>
          <h4 className="my-4 text-black text-lg">Idioma</h4>
          <div className="flex flex-col gap-2">
           
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 5"
                className="accent-[#B90808]"
              />
              <label htmlFor="Playstation 5">Español</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 4"
                className="accent-[#B90808]"
              />
              <label htmlFor="Playstation 4">Ingles</label>
            </div>
  
            
          </div>
          <h4 className="my-4 text-black text-lg">Autor</h4>
          <div className="flex flex-col gap-2">
           
            <div className="flex items-center gap-2">
            <input
            type="text"
            className="w-full bg-gray-100 outline-none p-2 rounded-lg"
            placeholder="Buscar"
        />
            </div>
            
          </div>
          <h4 className="my-4 text-black text-lg">Precio</h4>
          <form className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-4">
              <div className="relative">
                <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                />
              </div>
              <span>-</span>
              <div className="relative">
                <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#B90808] text-white font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200"
            >
              Aplicar
            </button>
          </form>
        </div>
        
      </div>
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="lg:hidden fixed bottom-4 right-4 bg-[#B90808] p-4 rounded-full text-xl"
      >
        {showFilter ? <RiCloseLine /> : <RiFilter3Line />}
      </button>
    </>
  );
};

export default Filter;