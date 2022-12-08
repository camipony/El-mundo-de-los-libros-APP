import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import {AuthProvider} from '../context/authContext'


function App(){
    return(
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            
        </Routes>
        </AuthProvider>
        </BrowserRouter>
    )
}


export default App;