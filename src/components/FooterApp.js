import React from 'react'
import logo from '../assets/img/logo.png'
import './Css/FooterApp.css';




const FooterApp = () => {
  return (
    <div className='Footer'>
        <h3 className='Creado'>Creado por:</h3>
        <footer>
            <div >
                <img className='ImgF' src={logo}/>
            </div>
            <div className='Creado'>
                <br/>
                <br/>
                <p className='Creado1'>Andrés Felipe Arenas</p>
            </div>
        </footer>
    </div>
  )
}

export default FooterApp