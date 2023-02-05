/* eslint-disable import/no-anonymous-default-export */
import {
  OBTENER_USUARIO,
  AUTENTICAR_USUARIO,
  CREAR_USUARIO,
  GET_CARRITO,
  ADD_CARRITO,
  DELETE_CARRITO,
} from "../type";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case OBTENER_USUARIO:
      return {
        ...state,
        datosUsuario: payload,
      };
    case AUTENTICAR_USUARIO:
      return {
        ...state,
        datosUsuario: payload,
      };
    case CREAR_USUARIO:
      return {
        ...state,
        datosUsuario: payload,
      };
    case GET_CARRITO:
      return {
        ...state,
        carrito: payload,
      };
    case ADD_CARRITO:
      return {
        ...state,
        carrito: {
            ...state.carrito,
            item: state.carrito.item ? [...state.carrito.item, payload] : []
        },
      };
    case DELETE_CARRITO:
      return {
        ...state,
        carrito: state.carrito.item.filter( cart => cart.item.id_item === payload),
      };
    default:
      return state;
  }
};
