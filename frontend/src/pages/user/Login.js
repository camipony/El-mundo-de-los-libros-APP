import "tailwindcss/tailwind.css";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo_mdl.png";
import "../../css/login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UsuariosContext from "../../context/Usuario/usuariosContext";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let usersContext = useContext(UsuariosContext);
  let { datosUsuario, verificarInicioSesion, saveAutenticarUsuario } = usersContext;

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const onClick = (e) => {
    e.preventDefault();
    console.log("Click");
    saveAutenticarUsuario(user);
    console.log(datosUsuario)
    Swal.fire({
      title: "verifying the information",
      html: "Espera un momento validamos tu información",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      validar()
      if (datosUsuario.token) {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/dashboard");
      } 
    });
  };

  const validar = () => {
    if (!datosUsuario.token)  verificarInicioSesion();
    else {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/dashboard");
    }
  }

  useEffect(() => {
    validar()
  }, [[]]);

  return (
    <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
      <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
          <img src={logo} alt="logo" width="120px" />
          <h1 className="text-4xl font-medium">Iniciar sesión</h1>
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
            <span className="ml-2">Ingresar con Google</span>
          </button>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="text-gray-200">
              Correo electrónico *
            </label>
            <input
              type="text"
              id="email"
              name="username"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
              placeholder="Ingresa tu numero de identificacion"
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
              onClick={onClick}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>

      <div className="bgr hidden lg:block"></div>
    </div>
  );
};

export default Login;
