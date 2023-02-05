import "tailwindcss/tailwind.css";
import React from "react";
import "../../css/card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";

const CardShop = (props) => {
  const { img, title, autor, price } = props;

  return (
    
    <div className="card bg-white p-4 rounded-2xl flex flex-col gap-2 w-full md:w-auto">
      <img
        src={img}
        className="w-full xl:w-40 h-82 lg:h-64 object-cover rounded-2xl"
      />
      <div className="h-25 flex flex-col " >
        <h1 className="text-xl  text-black">{title}</h1>
        <Button
              variant="outlined"
              style={{ color: "red", border: "none" }}
              endIcon={<FavoriteIcon/>}
            >
            </Button>
        </div>   
      <span className="text-gray-400">{autor}</span>
      <div className="flex items-center gap-4">
        <h5 className="text-3xl text-[#0a0a09]">${price}</h5>
        
      </div>
      
      <div className="py-4 px-6 flex items-center justify-between bg-gray-200 rounded-bl-lg rounded-br-lg">
        <button className="text-gray-200 hover:text-[#B90808] transition-colors font-semibold outline-none">
          Agregar al carrito
        </button>
      </div>
    </div>
   

  );
};

export default CardShop;