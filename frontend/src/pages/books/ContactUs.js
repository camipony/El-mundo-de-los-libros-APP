import "tailwindcss/tailwind.css";
import React from "react";
import NavBar from "../../components/books/NavBar";
// Icons
import { RiMailFill, RiBookOpenFill, RiMapPinFill, RiTimeFill,RiCellphoneFill,RiGithubFill  } from "react-icons/ri";

const Services = () => {
  return (
    <div className="items-center justify-center h-screen ">
    <NavBar/>
    <div
      className="grid grid-cols-1 bg-gray-100 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">¿Como te podemos ayudar?</h1>
        <p className="text-[20px] text-gray-500">
          Suscribete para que te lleguen todas las promociones y sugerencias nuevas
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Escribe tu correo electronico"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-red-800 text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiBookOpenFill className="text-4xl p-2 bg-red-800 text-white box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Libros</h3>
          <p className="text-gray-500 flex items-center">
            Tenemos gran cantidad de libros y cuentos
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMapPinFill className="text-4xl p-2  bg-red-800 text-white box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Nuestra Oficina</h3>
          <p className="text-gray-500 flex items-center">
            Cra 85e #45-66 Brisas San Lorenzo
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiTimeFill className="text-4xl p-2  bg-red-800 text-white box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Atención</h3>
          <p className="text-gray-500 flex items-center">
            Todos los dias de 8:00 AM a 5:00 PM
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <RiCellphoneFill className="text-4xl p-2  bg-red-800 text-white box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Numeros</h3>
          <p className="text-gray-500 flex items-center ">
          +57 311 6917279
          </p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
  <div className="bg-white hover:bg-red-800 group rounded-lg shadow hover:shadow-lg hover:shadow-red-900 transition-all hover:cursor-pointer">
    <div className="flex justify-center py-8">
      <img
        src="https://avatars.githubusercontent.com/u/89825671?v=4"
        alt="JJ Devs"
        lazyload="true"
        className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
      />
    </div>
    <div className="flex flex-col items-center gap-2 p-4">
      <h3 className="font-semibold text-xl group-hover:text-white transition-all">
        Juan Jose Revelo
      </h3>
      <p className="text-gray-600 group-hover:text-gray-300">
        Desarrollador
      </p>
      <div className="flex items-center">
      <a
          href="https://github.com/EasyMoneySniperx"
          target="_blank"
          className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
        >
          <RiGithubFill />
        </a>
       
      </div>
    </div>
  </div>
  <div className="bg-white hover:bg-red-800 group rounded-lg shadow hover:shadow-lg hover:shadow-red-900 transition-all hover:cursor-pointer">
    <div className="flex justify-center py-8">
      <img
        src="https://avatars.githubusercontent.com/u/66857434?v=4"
        alt="cam Devs"
        lazyload="true"
        className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
      />
    </div>
    <div className="flex flex-col items-center gap-2 p-4">
      <h3 className="font-semibold text-xl group-hover:text-white transition-all">
        Camila Rodriguez
      </h3>
      <p className="text-gray-600 group-hover:text-gray-300">
        Desarrolladora
      </p>
      <div className="flex items-center">
        
        <a
          href="https://github.com/camipony"
          target="_blank"
          className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
        >
          <RiGithubFill />
        </a>
       
      </div>
    </div>
  </div>
  <div className="bg-white hover:bg-red-800 group rounded-lg shadow hover:shadow-lg hover:shadow-red-900 transition-all hover:cursor-pointer">
    <div className="flex justify-center py-8">
      <img
        src="https://avatars.githubusercontent.com/u/66543457?v=4"
        alt="JD Devs"
        lazyload="true"
        className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
      />
    </div>
    <div className="flex flex-col items-center gap-2 p-4">
      <h3 className="font-semibold text-xl group-hover:text-white transition-all">
        Johan David Portocarrero
      </h3>
      <p className="text-gray-600 group-hover:text-gray-300">
        Desarrollador
      </p>
      <div className="flex items-center">
        
        <a
          href="https://github.com/JohanDavidPortocarrero"
          target="_blank"
          className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
        >
          <RiGithubFill />
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;