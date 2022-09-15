import { useEffect } from "react";
import { UsePerson } from "../Hooks/UsePerson";
import { PersonajeApp } from "../components/PersonajesApp";
import NavScrollExample from '../components/NavbarApp'
import FooterApp from '../components/FooterApp.js'


const Personajes = () => {
  const { getAllPerson, dataPeople, Contador, disminuir, aumentar } =
    UsePerson();
  useEffect(() => {
    getAllPerson(Contador);

    // console.log(dataPeople);
  }, [dataPeople]);
  return (
    <div>
        <NavScrollExample/>
    <center>
        <h1 className="titulo">PERSONAJES</h1>
    </center>
      <div className='contenido'>
        {dataPeople.map((personajes) => (
        <PersonajeApp
            key={personajes.name}
            name={personajes.name}
            hair={personajes.hair_color}
            eyes={personajes.eye_color}
            skin={personajes.skin_color}
            gender={personajes.gender}
            height={personajes.height}
            weigth={personajes.mass}
            birthday={personajes.birth_year}
            />
            ))}
      </div>
      <div className="pagi">
        <button className="botonPag" onClick={disminuir}>
          Anterior
        </button>
        <b
          style={{
            marginLeft: "12px",
            marginRight: "12px",
            color: "white",
          }}
        >
          {Contador}
        </b>
        <button className="botonPag" onClick={aumentar}>
          Siguiente
          
        </button>
      </div><br/>
      <FooterApp/>
    </div>
  );
};

export default Personajes;