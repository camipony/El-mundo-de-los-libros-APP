import "tailwindcss/tailwind.css";
import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../../css/navbar.css";
import logo from '../../assets/logo.png';


const NavBar = () => {
    return (
        <div>
        <div className="menu_home">
          <div className="frame1">
            <Button
              variant="outlined"
              style={{ color: "white", border: "none" }}
              endIcon={<Person />}
            >
              Ingresar
            </Button>

            <Button
              variant="outlined"
              style={{ color: "white", border: "none" }}
              endIcon={<ShoppingCartIcon/>}
            >
              Carrito
            </Button>
          </div>          
        </div>
        <div className="w-full bg-white rounded-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
         <img src={logo} alt="logo" style={{width: '50px' , marginTop: '0px'}}/>
   
    <nav className="md:col-span-6 flex items-center">
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Libros
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Ebooks
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Promociones
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Colecciones
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Ferias
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
            Contáctanos
        </a>
        
        
    </nav>
    <form className="md:col-span-3 flex items-center justify-center gap-2">
        <input
            type="text"
            className="w-full bg-gray-100 outline-none p-2 rounded-lg"
            placeholder="Buscar"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    </form>

</div>

        </div>

        
        

          );

};

export default NavBar;