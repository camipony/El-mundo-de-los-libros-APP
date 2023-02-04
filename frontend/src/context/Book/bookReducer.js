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
    default:
      return state;
  }
};
