/* eslint-disable import/no-anonymous-default-export */
import {
    OBTENER_USUARIO,
    AUTENTICAR_USUARIO,
    CREAR_USUARIO,
} from '../type';

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case OBTENER_USUARIO:
            return {
                ...state,
                datosUsuario: payload
            }
        case AUTENTICAR_USUARIO:
            return {
                ...state,
                datosUsuario: payload,
            }
        case CREAR_USUARIO:
            return {
                ...state,
                datosUsuario: payload,
            }
        default:
            return state;
    }

}