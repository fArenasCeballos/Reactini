import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Detalle from '../pages/Detalle'

export const PersonajeApp = ({
    name,
    hair,
    eyes,
    skin,
    gender,
    height,
    weigth,
    birthday,
  }) => {

    
  return (
    <div >
                <div className='diva'>
                    <center><h4><strong className='carta'></strong>{name}</h4></center><br/>
                    <p><strong className='carta'>Altura: </strong>{height}</p>
                    <p><strong className='carta'>Masa: </strong>{weigth}</p>
                    <p><strong className='carta'>Color de cabello: </strong>{hair}</p>
                    <p><strong className='carta'>Color de piel: </strong>{skin}</p>
                    <p><strong className='carta'>Color de ojos: </strong>{eyes}</p>
                    <p><strong className='carta'>Fecha de nacimiento: </strong>{birthday}</p>
                    <p><strong className='carta'>Genero: </strong>{gender}</p>
                    <Button variant="primary" onClick={Detalle}>
                      <Link className="link" to="/Detalle">Ver más</Link>
                    </Button>
                </div>
    </div>
  )
}

export default PersonajeApp;
