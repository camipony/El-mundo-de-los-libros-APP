import React from "react";
import ReactDOM from "react-dom/client";
import UsuariosState from "./context/Usuario/usuariosState";
import BookState from "./context/Book/bookState";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsuariosState>
      <BookState>
        <App />
      </BookState>
    </UsuariosState>
  </React.StrictMode>
);
