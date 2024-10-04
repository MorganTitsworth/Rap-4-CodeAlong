import logo from './logo.svg';
import styles from './App.module.css';
import CardComponent from './components/cardComponent/CardComponent';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [card, setCard] = useState(null);
  const [pokemon, setPokemon] = useState('');
  const getPokemon = async () => {
    try {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      setCard(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
        <button onClick={getPokemon}>Get Pokemon</button>
        <CardComponent pokemonCard={card}/>
      </header>
    </div>
  );
}

export default App;
