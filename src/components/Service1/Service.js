import './Service.css';
import expressIcon from './express-icon.png';
import deliveryIcon from './delivery-icon.png';
import pharmaIcon from './pharma-icon.png';
import virtualIcon from './virtual-icon.png';

function Service () {
  return (
    <div id="service">
      <div className="title__services">
        <p className="title-2" >¿Nuestros Servicios?</p>
        <p className="subject-2">Servicios Smart Delivery</p>
      </div>
      <div className="box-1">
        <div className="express-1">
          <div className="express-1__pic"></div>
          <div className="express-1__text">
            <div className="express-1__text__icon">
              <img src= {expressIcon} alt="express-icon" width="40px" height="40px"/>
            </div>
            <div className="express-1__text__title">
              <p>Delivery Express</p>
            </div>
            <div className="express-1__text__info">
              <p>¿Haces menos de 100 deliveries al mes? ¿Quieres enviar un paquete de último 
                momento dentro de la ciudad?</p>
            </div>
          </div>
        </div>
        <div className="delivery-1">
          <div className="delivery-1__pic"></div>
          <div className="delivery-1__text">
            <div className="delivery-1__text__icon">
              <img src= {deliveryIcon} alt="delivery-icon" width="40px" height="40px"/>
            </div>
            <div className="delivery-1__text__title">
              <p>Domicilios</p>
            </div>
            <div className="delivery-1__text__info">
              <p>No te preocupes más por contratar o 
                manejar tu nómina de motorizados, nosotros nos encargamos.</p>
            </div>
          </div>
        </div>
        <div className="pharma-1">
          <div className="pharma-1__pic"></div>
          <div className="pharma-1__text">
            <div className="pharma-1__text__icon">
              <img src= {pharmaIcon} alt="pharma-icon" width="40px" height="40px"/>
            </div>
            <div className="pharma-1__text__title">
              <p>Farmacias</p>
            </div>
            <div className="pharma-1__text__info">
              <p>Para las farmacias o servicios médicos que quieren optimizar su 
                operación, pagando únicamente por entrega</p>
            </div>
          </div>
        </div>
        <div className="virtual-1">
          <div className="virtual-1__pic"></div>
          <div className="virtual-1__text">
            <div className="virtual-1__text__icon">
              <img src= {virtualIcon} alt="virtual-icon" width="40px" height="40px"/>
            </div>
            <div className="virtual-1__text__title">
              <p>Delivery Tienda Virtual</p>
            </div>
            <div className="pharma-1__text__info">
              <p>Próximamente un nuevo servicio para el comercio electrónico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;