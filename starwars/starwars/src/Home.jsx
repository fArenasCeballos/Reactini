import "./Home.css";
import React from 'react';
import NavbarApp from './components/Navbar/NavbarApp';
import Slider from './components/Slider/Slider';
import Cards from './components/Cards/Cards';

function Home() {
    return (
        <div className="App">
          <NavbarApp/>
          <Slider/>
            <h4>Star Wars</h4>
            <h7>Esta es una página para todos aquellos que deseen saber sobre el mundo de los videojuegos</h7>
            <Cards/>
        </div>
    );
  }

  export default Home