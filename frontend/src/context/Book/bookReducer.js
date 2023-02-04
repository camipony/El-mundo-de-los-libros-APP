/* eslint-disable import/no-anonymous-default-export */
import {
  OBTENER_BOOK,
  CREAR_BOOK,
  OBTENER_BOOKS,
  ACTUALIZAR_BOOK,
  GET_BOOK_FAVORITES,
  GET_BOOK_ADQUIRIDOS,
} from "../type";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case OBTENER_BOOKS:
      return {
        ...state,
        books: payload
      }
    case OBTENER_BOOK:
      return {
        ...state,
        book: payload
      }
    case GET_BOOK_FAVORITES:
      return {
        ...state,
        favoriteBooks: payload
      }
    case GET_BOOK_ADQUIRIDOS:
      return {
        ...state,
        purchasedBooks: payload
      }
    default:
      return state;
  }
};
