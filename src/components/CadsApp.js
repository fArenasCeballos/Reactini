import React from 'react';
import CardApp from './CardApp';
import img1 from '../assets/img/card1.png';
import img2 from '../assets/img/card2.png';
import img3 from '../assets/img/card3.png';
import './Css/CardApp.css';


const Cards = [
    {
        id: 1,
        img: img1,
        title: 'Darth Vader',
        text: 'Vader a pesar de ser de una maldad tan pura, aún conserva sus sentimientos a su fallecido esposa Padme Amidala, cómo después a su hijo Luke.',
        boton: 'Ver más'
    },
    {  
        id: 2,
        img: img2,
        title: 'Stormtroopers',
        text: 'Soldados de asalto de las tropas del Imperio Galáctico.',
        boton: 'Ver más'

    },
    {
        id: 3,
        img: img3,
        title: 'Chewbacca',
        text: 'Afectuosamente Chewie por sus amigos, es un guerrero wookiee, un bípedo alto, peludo y robusto.',
        boton: 'Ver más'

    }  
]

function CadsApp  () {
  return (
    <div className='CardsG'>
      {Cards.map((card) => (
            <CardApp id={card.id} img={card.img} title={card.title} text={card.text} boton={card.boton} />
      ))}
    </div>
  )
}

export default CadsApp