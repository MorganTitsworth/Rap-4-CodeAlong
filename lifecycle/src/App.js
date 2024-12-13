import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './features/pokemon';
function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <button onClick={() => {
          dispatch(getPokemon());
        }}>Get Pokemon</button>
        {pokemon.loading ? <h2>Loading...</h2> : <>
          {pokemon.pokemon.name && <div>{pokemon.pokemon.name}</div>}
        </>}
      </header>
    </div>
  );
}

export default App;