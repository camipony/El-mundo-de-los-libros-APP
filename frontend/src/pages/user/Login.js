import "tailwindcss/tailwind.css";
import React from 'react';
import logo from '../../assets/logo_mdl.png'
import '../../css/login.css'
import { useState } from "react";
import { useAuth } from "../../context/authContext"; 
import { useNavigate } from "react-router-dom";


const Login = ()  => {

  const [user, setUser] = useState({
    email: '',
    password: '',
})


const [error, setError] = useState();
const {signin, loginWithGoogle}= useAuth();
const navigate = useNavigate();

const handleChange = ({target: {name, value}}) => 
    setUser({...user, [name] : value})

const handleGoogleSignin = async() => {
 await loginWithGoogle()
 navigate('/');
}

const handleSubmit = async (e) => {
    e.preventDefault()

    try{

        await signin(user.email, user.password);
        navigate('/');

    }catch (error){
        if(error.code === "auth/wrong-password"){
          setError('Contraseña incorrecta')
        }else if(error.code === "auth/user-not-found"){
          setError('El usuario no existe o su correo es incorrecto')
        }
}
}

    return (
        <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
  <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
    <div className="flex flex-col gap-1 w-full">
    <img src={logo}  alt= "logo" width="120px"/>
      <h1 className="text-4xl font-medium">Iniciar sesión</h1>
    </div>
   
    <div className="w-full">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full"
        onClick={handleGoogleSignin}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          width="20"
          height="20"
        />
        <span className="ml-2">Ingresar con Google</span>
      </button>
    </div>
    
    <form className="flex flex-col gap-4">
    {error && <p>{error}</p>}
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
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-500 transition-colors"
          >
            Registrate
          </a>
        </span>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-200 transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      <div className="mt-4 order-1 md:order-2">
        <button
          type="submit"
          className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
          onClick={handleSubmit}
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>

  <div className="bgr hidden lg:block"></div>
</div>

    );
}

export default Login;