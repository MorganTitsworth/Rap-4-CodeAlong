import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import styles from './searchCardRandom.module.scss';
import RecipeCard from '../RecipeCard/RecipeCard';

function SearchCardRandom() {
  const [recipeList, setRecipeList] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    setLoad(true);
    try {
      let response = await axios.get(
        '../../data.json'

        // `https://api.spoonacular.com/recipes/random?apiKey=1700ab22148d4c39a98a22bfa3f36c38`
        // `https://api.spoonacular.com/recipes/random?number=3&apiKey=1700ab22148d4c39a98a22bfa3f36c38`
      );
      setRecipeList(response.data);
      setLoad(false);
    } catch (error) {
      console.error(error);
      setLoad(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div>
            {load ? <p>loading...</p> : <RecipeCard props={recipeList} />}
          </div>
          <div className={styles.containerButton}>
            <button className={styles.getButton} onClick={getRecipes}>
              Get Random Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchCardRandom;
