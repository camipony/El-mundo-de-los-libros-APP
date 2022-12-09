import React from "react";
import logo from '../../assets/logo.png'
import daviplata from '../../assets/daviplata.png'
import bancolombia from '../../assets/bancolombia.png'
import mercado from '../../assets/mercadopago.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../../css/footer.css";



function Footer() {
  return (
    <div className="footer">
      <div className="text-white py-3">
        <div className="row">
          <div className="col-sm">
          <img src={logo} alt="logo" style={{width: '130px' , marginTop: '10px'}}/>
            <div className = "frameImgIcons">
            <FacebookIcon style={{fontSize: '30px', margin: '0px 15px 0 -55px'}}/>
            <InstagramIcon style={{fontSize: '30px' , margin: '0px 15px 0 0px'}}/>
            <WhatsAppIcon style={{fontSize: '30px'}} />
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