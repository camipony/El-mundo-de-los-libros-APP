import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Card from "./Card";

const Bookmap = () => {
    const [cards, setCards] = useState([
        {"_id":"6392b06c9c43d0f89e37274d","codigo":"M1000","titulo":"Cien años de soledad",
        "descripcion":"Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.",
        "portada":"https://storage.googleapis.com/catalogo-libros/extralarge/cbfe476f-aad9-84ee-c304-63614f7947da_imagen.jpg","precio":200000,"estado":"activo",
        "categoria":["Novela","Realismo mágico","Alta fantasía","Saga familiar","Ficción épica"],
        "calificaciones":[],"formato":[{"formato":"fisico","idioma":["Español","Ingles"]}],
        "autores":[{"nombre":"gabriel garcía márquez","seudonimo":"Gabo"}],
        "fecha_publicacion":"1967-08-01T00:00:00.000Z","fecha_actualizacion":"2022-12-09T03:40:20.450Z",
        "fecha_creacion":"2022-12-09T03:40:20.450Z"},
        {"_id":"6392b1889c43d0f89e37274f","codigo":"202L2",
        "titulo":"Un paso de ti","descripcion":"¿'_'?","portada":"https://i.postimg.cc/XJ9Kyhb9/libros.png",
        "precio":12000,"estado":"activo","categoria":["Novela","Romance"],"calificaciones":[],"formato":[],
        "autores":[{"nombre":"gabriel garcía márquez","seudonimo":"Gabo"}],"fecha_publicacion":"2002-10-01T00:00:00.000Z","fecha_actualizacion":"2022-12-09T03:40:20.450Z",
        "fecha_creacion":"2022-12-09T03:40:20.450Z"}
    ]);
  
    return (
      <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-6 p-2">
        {cards.map((card) => {
          return (
            <Card
              img={card.portada}
              title={card.titulo}
              autor={card.autores[0].nombre}
              price={card.precio}
            />
          );
        })}
      </div>
    );
  };
  
  export default Bookmap;