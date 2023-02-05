/* eslint-disable import/no-anonymous-default-export */
import {
  OBTENER_BOOK,
  CREAR_BOOK,
  OBTENER_BOOKS,
  GET_BOOK_FAVORITES,
  GET_BOOK_ADQUIRIDOS,
  DELETE_FAVORITES,
  ADD_FAVORITES,
  PAY,
} from "../type";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case OBTENER_BOOKS:
      return {
        ...state,
        books: payload,
      };
    case OBTENER_BOOK:
      return {
        ...state,
        book: payload,
      };
    case GET_BOOK_FAVORITES:
      return {
        ...state,
        favoriteBooks: payload,
      };
    case GET_BOOK_ADQUIRIDOS:
      return {
        ...state,
        purchasedBooks: payload,
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(fav => fav.codogo === payload),
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, payload],
      };
    case PAY:
      return {
        ...state,
        purchasedBooks: state.purchasedBooks,
      };
    default:
      return state;
  }
};
