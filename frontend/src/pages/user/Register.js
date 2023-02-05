import "tailwindcss/tailwind.css";
import React, {useContext, useState, useEffect } from "react";
import logo from "../../assets/logo_mdl.png";
import "../../css/register.css";
import { useNavigate } from "react-router-dom";
import UsuariosContext from "../../context/Usuario/usuariosContext";

const Register = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  let usersContext = useContext(UsuariosContext);
  let { datosUsuario, verificarInicioSesion, crearUsuario } = usersContext;

  const onClick = (e) => {
    e.preventDefault();
    crearUsuario(user);
    if(datosUsuario.token) {
      window.localStorage.setItem("user-token", JSON.stringify(datosUsuario));
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    verificarInicioSesion()
    if(datosUsuario.token) {
      navigate("/dashboard");
    }
    return;
  }, [datosUsuario]);


  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  return (
    <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
      <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
          <h1 className="text-4xl font-medium">Crear cuenta</h1>
        </div>

        <form className="flex flex-col gap-4" style={{gap: "0.5rem"}}>
          <div>
            <label htmlFor="first_name" className="text-gray-200">
              Nombre(s) *
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
              placeholder="Ingresa tu nombre"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="last_name" className="text-gray-200">
              Apellidos *
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
              placeholder="Ingresa tu apellido"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username" className="text-gray-200">
              Numero de identificacion *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
              placeholder="Ingresa tu numero de identificacion"
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
              name="email"
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
              name="password"
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
              onClick={onClick}
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
};

export default Register;
