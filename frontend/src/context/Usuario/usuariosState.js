import React, { useReducer } from "react";
import axios from "axios";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

import UsuariosContext from "./usuariosContext";
import usuariosReducer from "./usuariosReducer";

const UsuariosState = (props) => {
  const ruta = "http://127.0.0.1:8000";

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://localhost:5000/graphql",
    }),
  });

  const inicialState = {
    datosUsuario: {},
    carrito: [],
  };

  const [state, dispatch] = useReducer(usuariosReducer, inicialState);

  const saveAutenticarUsuario = async (datos) => {
    try {
      let resp = await axios.post(ruta + "/login/", datos);
      if (resp.data.token) {
        let user = await axios.get(ruta + "/user/" + datos.username + "/");
        resp.data.user = user.data[0];
        window.localStorage.setItem("user-token", JSON.stringify(resp.data));
        dispatch({
          type: "AUTENTICAR_USUARIO",
          payload: resp.data,
        });
      } else {
        dispatch({
          type: "AUTENTICAR_USUARIO",
          payload: [],
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const verificarInicioSesion = () => {
    const elem = window.localStorage.getItem("user-token");
    const dato = elem ? JSON.parse(elem) : {};
    dispatch({
      type: "AUTENTICAR_USUARIO",
      payload: dato,
    });
  };

  const cerrarSesion = () => {
    try {
      window.localStorage.removeItem("user-token");
    } catch (error) {
      console.log(error);
    }
    state.datosUsuario = [];
  };

  const crearUsuario = async (datos) => {
    try {
      const resp = await axios.post(ruta + "/register/", datos);
      window.localStorage.setItem("user-token", JSON.stringify(resp.data));
      dispatch({
        type: "CREAR_USUARIO",
        payload: resp.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getcarrito = async (user) => {
    try {
      let query = gql`
        query {
          getCart(ident: ${user}) {
            id_cart
            items {
              id_item
              id_book {
                codigo
                titulo
                descripcion
                precio
                estado
                portada
                autores {
                  nombre
                }
                categoria {
                  categoria
                }
                fecha_publicacion
              }
              creation_date
            }
            creation_date
          }
        }
      `;
      let data = await client.query({ query });
      dispatch({
        type: "GET_CARRITO",
        payload: data.data.getCart,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsuariosContext.Provider
      value={{
        datosUsuario: state.datosUsuario,
        verificarInicioSesion,
        cerrarSesion,
        saveAutenticarUsuario,
        crearUsuario,
        getcarrito
      }}
    >
      {props.children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosState;
