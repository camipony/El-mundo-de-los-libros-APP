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
    carrito: {},
  };

  const [state, dispatch] = useReducer(usuariosReducer, inicialState);

  const saveAutenticarUsuario = async (datos) => {
    try {
      let resp = await axios.post(ruta + "/login/", datos);
      if (resp.data.token) {
        let user = await axios.get(ruta + "/user/" + datos.username + "/");
        resp.data.user = user.data[0];
        console.log(resp.data)
        window.localStorage.setItem("user-token", JSON.stringify(resp.data));
        dispatch({
          type: "AUTENTICAR_USUARIO",
          payload: resp.data,
        });
      } else {
        dispatch({
          type: "AUTENTICAR_USUARIO",
          payload: {},
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
      console.log("Cerrando sesion")
      window.localStorage.removeItem("user-token");
      window.sessionStorage.removeItem("user-token");
      dispatch({
        type: "AUTENTICAR_USUARIO",
        payload: {},
      });
    } catch (error) {
      console.log(error);
    }
  };

  const crearUsuario = async (datos) => {
    try {
      const resp = await axios.post(ruta + "/register/", datos);
      console.log(datos)
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

  const addBookCart = async (user, book) => {
    try {
      let item = {
        id_usuario: user,
        codigo: book.codigo
      }
      let data = await axios.post(ruta+'/item/', item)
      dispatch({
        type: "ADD_CARRITO",
        payload: book
      });
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBookCart = async (item) => {
    try {
      let data = await axios.delete(ruta+'/item/'+item+'/')
      dispatch({
        type: "DELETE_CARRITO",
        payload: item
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UsuariosContext.Provider
      value={{
        datosUsuario: state.datosUsuario,
        verificarInicioSesion,
        cerrarSesion,
        saveAutenticarUsuario,
        crearUsuario,
        getcarrito,
        addBookCart,
        deleteBookCart
      }}
    >
      {props.children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosState;
