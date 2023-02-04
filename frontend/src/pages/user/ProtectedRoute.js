<<<<<<< HEAD
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}){
    const {user , loading } = useAuth();

    if(loading) return <h1>Loading</h1> 

    if(!user) return <Navigate to= '/login' />
=======

import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import UsuariosContext from "../../context/Usuario/usuariosContext";

export function ProtectedRoute({children}){
    let usersContext = useContext(UsuariosContext);
    let { datosUsuario } = usersContext;


    if(!datosUsuario.token) return <Navigate to= '/login' />
>>>>>>> a04def83222290edf4f3929a832070d1db62f614

    return <>{children}</>
}