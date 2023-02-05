import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import UsuariosContext from "../../context/Usuario/usuariosContext";

export function ProtectedRoute({children}){
    let usersContext = useContext(UsuariosContext);
    let { datosUsuario } = usersContext;

    if(!datosUsuario.token) return <Navigate to= '/login' />

    return <>{children}</>
}