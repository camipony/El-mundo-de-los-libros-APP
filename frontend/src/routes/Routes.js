import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";
import Register from "../pages/user/Register";
import HomeGeneral from "../pages/HomeGeneral"
import {AuthProvider} from '../context/authContext'
import { ProtectedRoute } from "../pages/user/ProtectedRoute";


function App(){
    return(
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/dashboard" element={
            <ProtectedRoute>
            <Home/>
            </ProtectedRoute>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<HomeGeneral/>}/>
            <Route path="/" element={<HomeGeneral/>}/>
        </Routes>
        </AuthProvider>
        </BrowserRouter>
    )
}


export default App;
