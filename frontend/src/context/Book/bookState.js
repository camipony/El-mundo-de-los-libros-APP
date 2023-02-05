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

import BookContext from "./bookContext";
import BookReducer from "./bookReducer";

const BookState = (props) => {
  const bookR = "http://localhost:4000";
  const userR = "http://127.0.0.1:8000";

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://localhost:5000/graphql",
    }),
  });

  const inicialState = {
    books: null,
    book: {},
    favoriteBooks: [],
    purchasedBooks: [],
  };

  const [state, dispatch] = useReducer(BookReducer, inicialState);

  const getBooks = async (user = null) => {
    try {
      var query = "";
      if (user == null) {
        query = gql`
          query {
            getBooks {
              _id
              codigo
              titulo
              descripcion
              precio
              estado
              portada
              categoria {
                categoria
              }
              autores {
                nombre
              }
              calificaciones {
                calificacion
              }
              fecha_publicacion
            }
          }
        `;
      } else {
        query = gql`
          query {
            getBooksForUserLogin(ident: ${user}) {
              _id
              codigo
              titulo
              descripcion
              precio
              estado
              portada
              categoria {
                categoria
              }
              autores {
                nombre
              }
              calificaciones {
                calificacion
              }
              fecha_publicacion
              is_favorite
              is_mine
            }
          }
        `;
      }
      let data = await client.query({ query });
      dispatch({
        type: "OBTENER_BOOKS",
        payload:
          user != null ? data.data.getBooksForUserLogin : data.data.getBooks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getBook = async (codigo_book, user = null) => {
    try {
      /*var query = ``;
      if (user === null) {
        query = gql`
          query getBook($cod: String!) {
            getBook(codigo: $cod) {
              _id
              codigo
              titulo
              descripcion
              precio
              estado
              portada
              imagenes
              estado
              categoria {
                categoria
              }
              autores {
                nombre
                pseudonimo
              }
              calificaciones {
                usuario {
                  last_name
                  first_name
                  username
                }
                calificacion
                comentario
                fecha_crecion
              }
              formato {
                formato
                idiomas {
                  idioma
                  cantidad_stock
                }
              }
              fecha_publicacion
              fecha_creacion
              fecha_actualizacion
            }
          }
        `;
      } else {
        query = gql`
          query {
            getBookForUserLogin(codigo: ${codigo_book}, ident: ${user}) {
              _id
              codigo
              titulo
              descripcion
              precio
              estado
              portada
              imagenes
              estado
              categoria {
                categoria
              }
              autores {
                nombre
                pseudonimo
              }
              calificaciones {
                usuario {
                  last_name
                  first_name
                  username
                }
                calificacion
                comentario
                fecha_crecion
              }
              formato {
                formato
                idiomas {
                  idioma
                  cantidad_stock
                }
              }
              fecha_publicacion
              fecha_creacion
              fecha_actualizacion
            }
          }
        `;
      }
      let data = await client.query({ query }, {cod: codigo_book});*/
      let data = await axios.get(bookR+'/book/'+codigo_book);
      dispatch({
        type: "OBTENER_BOOK",
        payload: data.data.book
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const getFavoriteBook = async (user) => {
    try {
      let query = gql`
        query {
          getFavorite(ident: ${user}) {
            _id
            codigo
            titulo
            descripcion
            precio
            estado
            portada
            categoria {
              categoria
            }
            autores {
              nombre
            }
            calificaciones {
              calificacion
            }
            fecha_publicacion
          }
        }
      `;
      let data = await client.query({ query });
      dispatch({
        type: "GET_BOOK_FAVORITES",
        payload: data.data.getFavorite,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavoriteBook = async (book, user) => {
    try {
      let favorite = {
        identification: user,
        id_book: book.codigo,
      };
      let data = await axios.post(userR + "/api/favorites/", favorite);
      dispatch({
        type: "ADD_FAVORITES",
        payload: book,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavoriteBook = async (book, user) => {
    try {
      let data = await axios.get(
        userR + "/favoritesbook/" + user + "/" + book + "/"
      );
      await axios.delete(
        userR + "/api/favorites/" + data.data[0].id_favorites + "/"
      );
      dispatch({
        type: "DELETE_FAVORITES",
        payload: book,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const MakeAPurchase = async (user) => {
    try {
      await axios.delete(userR + "/pay/" + user + "/");
      dispatch({
        type: "PAY",
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPurchaseBook = async (user) => {
    try {
      let query = gql`
        query {
          getPurchased_books(ident: ${user}) {
            _id
            codigo
            titulo
            descripcion
            precio
            estado
            portada
            categoria {
              categoria
            }
            autores {
              nombre
            }
            calificaciones {
              calificacion
            }
            fecha_publicacion
          }
        }
      `;
      let data = await client.query({ query });
      dispatch({
        type: "GET_BOOK_ADQUIRIDOS",
        payload: data.data.getPurchased_books,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        book: state.book,
        favoriteBooks: state.favoriteBooks,
        purchasedBooks: state.purchasedBooks,
        getBooks,
        getBook,
        getFavoriteBook,
        getPurchaseBook,
        addFavoriteBook,
        deleteFavoriteBook,
        MakeAPurchase,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
