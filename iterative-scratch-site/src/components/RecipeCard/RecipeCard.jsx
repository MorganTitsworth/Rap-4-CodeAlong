import React from 'react';
import styles from './RecipeCard.module.scss';
import { useState, useEffect, useRef } from 'react';

const Summary = ({ props }) => {
  const markup = props;
  return <p dangerouslySetInnerHTML={{ __html: markup }} />;
};
function RecipeCard({ props }) {
  console.log(props);
  const [recipeItems, setRecipeItems] = useState(props.recipes);
  const observer = useRef(null);
  // const [load, setLoad] = useState(true);
  const count = useRef(0);

  useEffect(() => {
    // console.log(props);
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            count.current += 1;
            setRecipeItems(props.recipes.slice(0, count.current));
            // alert('Intersecting VP');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );
    observer.current.observe(document.getElementById('seen'));
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <>
      {recipeItems.map((data) => {
        return (
          <>
            <div className={styles.grid}>
              <div className={styles.container}>
                <div className={styles.containerImage}>
                  {props ? (
                    <img
                      // onClick={getRecipe}
                      className={styles.image}
                      src={data.image}
                      alt='Sample Dish'
                    ></img>
                  ) : null}
                </div>

                <div className={styles.containerTitle}>
                  {props ? (
                    <h3 className={styles.title}>{data.title}</h3>
                  ) : null}
                  <div className={styles.summary}>
                    {props ? <Summary props={data.summary} /> : null}
                  </div>
                </div>
              </div>

              <div className={styles.instructions}>
                {props ? <Summary props={data.instructions} /> : null}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default RecipeCard;

// <div>
//   {props ? <h3 className={styles.title}>{data.title}</h3> : null}
// </div>
