import "tailwindcss/tailwind.css";
import React from 'react';
import logo from '../../assets/logo_mdl.png'
import '../../css/register.css';
import { useState } from "react";
import { useAuth } from "../../context/authContext"; 
import { useNavigate } from "react-router-dom";

const Register = ()  => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        date: '',
        password: '',

    })


    const [error, setError] = useState();
    const {signup }= useAuth();
    const navigate = useNavigate();
    const handleChange = ({target: {name, value}}) => 
        setUser({...user, [name] : value})
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{

            await signup(user.email, user.password);
            navigate('/');

        }catch (error){
            console.log(error.code)
            if(error.code === "auth/internal-error"){
                setError('Correo invalido')
            }else if(error.code === "auth/weak-password"){
                setError('La contraseña debe superar los 6 carácteres')
            }else if(error.code === "auth/email-already-in-use"){
                setError('Este correo ya se encuentra registrado')
            }
        }
    }

    return (
        
<div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
    <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
        <img src={logo}  alt= "logo" width="120px"/>
            <h1 className="text-4xl font-medium">Crear cuenta</h1>
        </div>

        <div className="w-full">
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                    width="20"
                    height="20"
                />
                <span className="ml-2">Registrate con Google</span>
            </button>
        </div>

        <form className="flex flex-col gap-4">
            <div>
            {error && <p>{error}</p>}
                <label htmlFor="name" className="text-gray-200">
                    Nombre completo *
                </label>
                <input
                    type="text"
                    id="name"
                    name= "name"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu nombre completo"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email" className="text-gray-200">
                    Correo electrónico *
                </label>
                <input
                    type="email"
                    id="email"
                    name= "email"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu correo electrónico"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cumpleaños" className="text-gray-200">
                    Fecha de nacimiento *
                </label>
                <input
                    type="date"
                    id="date"
                    name= "date"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu fecha de nacimiento"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password" className="text-gray-200">
                    Contraseña *
                </label>
                <input
                    type="password"
                    id="password"
                    name= "password"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu contraseña"
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
                <span className="text-gray-400">
                    ¿Ya tienes cuenta?{" "}
                    <a
                        href="/login"
                        className="text-indigo-400 hover:text-indigo-500 transition-colors"
                    >
                        Ingresa
                    </a>
                </span>
            </div>
            <div className="mt-4 order-1 md:order-2">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
                >
                    Crear cuenta
                </button>
            </div>
        </form>
    </div>
    <div className="bg hidden lg:block"></div>
</div>
    );
}

export default Register;