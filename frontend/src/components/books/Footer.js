import React from "react";
import logo from '../../Assets/logo.png'
import daviplata from '../../Assets/daviplata.png'
import bancolombia from '../../Assets/bancolombia.png'
import mercado from '../../Assets/mercadopago.png'
import {Facebook, WhatsApp, Instagram} from '@mui/icons-material';
import "../../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="text-white py-3">
        <div className="row">
          <div className="col-sm">
          <img src={logo} alt="logo" style={{width: '130px' , marginTop: '10px'}}/>
            <div className = "frameImgIcons">
            <Facebook style={{fontSize: '30px', margin: '0px 15px 0 -55px'}}/>
            <Instagram style={{fontSize: '30px' , margin: '0px 15px 0 0px'}}/>
            <WhatsApp style={{fontSize: '30px'}} />
            </div>
          </div>
          <div className="col-sm">
            <li className='font-weight-bold mb-2' style={{fontFamily: 'Texturina', fontStyle: 'normal', fontWeight: '700', textDecoration: 'none', listStyleType: 'none'}}>INFORMACION GENERAL</li>
            <a href="nombre"><li>Mauricio Rodriguez </li></a>
            <a href="celular"> <li>311 6917279 </li></a>
            <a href="correo"><li>mundodeloslibroscali2@gmail.org </li></a>
            <a href="direccion"><li>Cra 85e #45-66 Brisas San Lorenzo</li></a>
          </div>
          <div className="col-sm">
            <li className='font-weight-bold mb-2' style={{fontFamily: 'Texturina', fontStyle: 'normal', fontWeight: '700', textDecoration: 'none', listStyleType: 'none'}}>CENTRO DE AYUDA</li>
            <a href="/preguntas-frecuentes"><li>Preguntas frecuentes</li></a>
            <a href="sitio"><li>Medios de pago </li></a>
            <a href="contacto"><li>Domicilios y entregas </li></a>
          </div>
          <div className="col-sm">
            <li className='font-weight-bold mb-2' style={{fontFamily: 'Texturina', fontStyle: 'normal', fontWeight: '700', textDecoration: 'none', listStyleType: 'none'}}>MEDIOS DE PAGO</li>
            <img src={bancolombia} alt="bancolombia" style={{ width: "130px", marginLeft: "10px" }} />
            <img src={daviplata} alt="daviplata" style={{ width: "140px", marginTop: '10px', marginLeft: "10px" }} />
            <img src={mercado} alt="mercadop" style={{ width: "140px", marginTop: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;