import "tailwindcss/tailwind.css";
import React from 'react';
import GoogleLogin from 'react-google-login';
import logo from '../assets/logo_mdl.png'
import '../css/Login.css';
import { useAuth } from "../context/authContext";


export default function Home () {
    const {user, logout, loading} = useAuth();
    console.log(user)

    if(loading) return <h1>loading page</h1>


    const handleLogout = async () =>{
        await logout();
    }
    return <div>
    <h1>Hi {user.email}</h1>
    <button onClick={handleLogout}>Logout</button>
    </div>

}
