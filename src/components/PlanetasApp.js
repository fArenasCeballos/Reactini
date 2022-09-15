import React from "react"

export const PlanetasApp = ({
    planet,
    clima,
    terreno,
    age,
    poblacion,
    gravedad,
    diametro
   }) => {

  return (
                <div className='divv'>
                    <center><h4><strong className='cartitu'></strong>{planet}</h4></center><br/>
                    <p><strong className='cartitu'>Clima: </strong>{clima}</p>
                    <p><strong className='cartitu'>Terreno: </strong>{terreno}</p>
                    <p><strong className='cartitu'>Edad: </strong>{age}</p>
                    <p><strong className='cartitu'>Poblacion: </strong>{poblacion}</p>
                    <p><strong className='cartitu'>Gravedad: </strong>{gravedad}</p>
                    <p><strong className='cartitu'>Diametro: </strong>{diametro}</p>
                </div>
  )
}