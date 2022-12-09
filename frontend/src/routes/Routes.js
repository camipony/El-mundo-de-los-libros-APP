import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";
import Register from "../pages/user/Register";
import {AuthProvider} from '../context/authContext'
import { ProtectedRoute } from "../pages/user/ProtectedRoute";


function App(){
    return(
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/" element={
            <ProtectedRoute>
            <Home/>
            </ProtectedRoute>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            
        </Routes>
        </AuthProvider>
        </BrowserRouter>
    )
}


export default App;