import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Cards from './components/Cards/Cards';
import Home from './Home';
import About from './About';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Slider/>
          <h4>Bienvenido a BoxPro X</h4>
          <h7>Esta es una página para todos aquellos que deseen saber sobre el mundo de los videojuegos</h7>
          <Cards/>
          <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
      </div>
  );
}
export default App;