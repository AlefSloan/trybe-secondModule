import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex'

function App() {
  return (
    <div className="poke-list-div">
    <Pokedex pokeList={ pokemons } />
    </div>
  );
}

export default App;
