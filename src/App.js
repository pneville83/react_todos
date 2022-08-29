
import './App.css';
import logo from './logo.png';
import  { Route, Link }  from 'wouter';
import Service from './components/Service1/Service';
import About from './components/About/About';
import Costumers from './components/Costumers/Costumers';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="menu_logo">
          <Link href="/">
          <img src={logo} alt="logo"/>
          <p className="back">HOME</p>
          </Link> 
        </div>
        <div className="menu_bar">
          <Link href="/servicios">
          <p className="link">Servicios</p>
          </Link>
        </div>
        <div className="menu_bar">
          <Link href="/acerca">
          <p className="link">Quienes Somos</p>
          </Link>
        </div>
        <div className="menu_bar">
          <Link href="/clientes">
          <p className="link">Nuestros Clientes</p>
          </Link>
        </div>
        <div className="menu_bar">
          <Link href="/trabajo">
          <p className="link">Trabaja con Nosotros</p>
          </Link>
        </div>
        <div className="menu_bar">
          <Link href="/contacto">
          <p className="link">Contátenos</p>
          </Link>
        </div>
      </div>
      <Route path="/servicios" component={Service}/>
      <Route path="/acerca" component={About}/> 
      <Route path="/clientes" component={Costumers}/>
      <Route path="/trabajo" component={Work}/>
      <Route path="/contacto" component={Contact}/>
      <div className='home'>
        <Link href="/">
        <button class="button-1"type="submit">Volver</button>
        </Link>
      </div>  
    </div>
  );
}
export default App;
