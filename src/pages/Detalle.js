import { DetalleApp } from "../components/DetalleApp";
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js';

function Detalle () {
return (
    <div>
        <NavScrollExample/>
        <center>
        <h1 className="titulo">DETALLE</h1>
    </center>
        <DetalleApp/>
        <FooterApp/>
    </div>
  );
};

export default Detalle;