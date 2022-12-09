import React from 'react'
import logo from '../Assets/logo.png';
import img from '../Assets/Frame 158.png';
import '../Styles/login.css'

export default function Login() {
  return (
    <div className='cont_login'>
        <div className='cont_img'>
            <img src={img} alt=''/>
        </div>
        <div className='cont_form'>
            <img src={logo} alt='' />
            <h2>Iniciar Sesión</h2>
            <form>
                <label>Correo Electronico*</label>
                <input type="text" placeholder='example@gmail.com' required />
                <label>Contraseña*</label>
                <input type="password" placeholder='********' required />
            </form>
            <button>Ingresar</button>
        </div>
    </div>
  )
}
