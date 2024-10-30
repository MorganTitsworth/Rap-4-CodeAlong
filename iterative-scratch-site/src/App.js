// import axios from 'axios';
// import { useState } from 'react';
// import RecipeCard from './components/RecipeCard/RecipeCard';
import styles from './App.module.css';
import SearchCardRandom from './components/SearchCardRandom/SearchCardRandom';
import Header from './components/Header/Header';
function App() {
  // const [card, setCard] = useState(null);

  // const getRecipe = async () => {
  //   try {
  //     let response = await axios.get(
  //       `https://api.spoonacular.com/recipes/random?apiKey=1700ab22148d4c39a98a22bfa3f36c38`
  //     );
  //     setCard(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <Header />
      <SearchCardRandom />
    </>
  );
}
export default App;
