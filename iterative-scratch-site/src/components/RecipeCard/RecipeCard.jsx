import React from 'react';
import styles from './RecipeCard.module.scss';

const Summary = ({ props }) => {
  const markup = props;
  return <p dangerouslySetInnerHTML={{ __html: markup }} />;
};

function RecipeCard({ props }) {
  return (
    <div className={styles.grid}>
      {console.log(props)}
      <div className={styles.container}>
        <div className={styles.containerImage}>
          {props ? (
            <img
              // onClick={getRecipe}
              className={styles.image}
              src={props.recipes[0].image}
              alt='Sample Dish'
            ></img>
          ) : null}
        </div>

        <div className={styles.containerTitle}>
          {props ? (
            <h3 className={styles.title}>{props.recipes[0].title}</h3>
          ) : null}
          <div className={styles.summary}>
            {props ? <Summary props={props.recipes[0].summary} /> : null}
          </div>
        </div>
      </div>

      <div className={styles.instructions}>
        {props ? <Summary props={props.recipes[0].instructions} /> : null}
      </div>
    </div>
  );
}

export default RecipeCard;
