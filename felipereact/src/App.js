import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Cards from './components/Cards/Cards';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Slider/>
            <h4>Bienvenido a BoxPro X</h4>
            <h7>Esta es una página para todos aquellos que deseen saber sobre el mundo de los videojuegos</h7>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    );
}

export default App;