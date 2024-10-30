import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import styles from './searchCardRandom.module.scss';
import RecipeCard from '../RecipeCard/RecipeCard-edited';

function SearchCardRandom() {
  const [recipeList, setRecipeList] = useState([]);
  const [recipeItem, setRecipeItem] = useState();
  const [load, setLoad] = useState(true);
  const item = useRef(0);
  const observer = useRef(null);

  useEffect(() => {
    getRecipes();
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            item.current += 1;
            setRecipeList(recipeList.slice(0, item.current));
            // alert('Intersecting VP');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    observer.current.observe(document.getElementById('seen'));
    return () => {
      observer.current.disconnect();
    };
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
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div>
          {load ? <p>loading...</p> : <RecipeCard props={recipeList} />}
        </div>
        {/* {recipeItem.map((data) => {
          return (
            <div>{load ? <p>loading...</p> : <RecipeCard props={data} />}</div>
          );
        })} */}
        <div id='seen'> SEE MEE</div>
        <div className={styles.containerButton}>
          <button className={styles.getButton} onClick={getRecipes}>
            Get Random Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchCardRandom;
