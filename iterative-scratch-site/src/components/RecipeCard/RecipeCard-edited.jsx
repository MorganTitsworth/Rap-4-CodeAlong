import React from 'react';
import styles from './RecipeCard.module.scss';

const Summary = ({ props }) => {
  const markup = props;
  return <p dangerouslySetInnerHTML={{ __html: markup }} />;
};

function RecipeCard({ props }) {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          {props ? (
            <img
              // onClick={getRecipe}
              className={styles.recipe[0].image}
              src={props.image}
              alt='Sample Dish'
            ></img>
          ) : null}
        </div>

        <div className={styles.containerTitle}>
          {props ? <h3 className={styles.title}>{props.title}</h3> : null}
          <div className={styles.summary}>
            {props ? <Summary props={props.summary} /> : null}
          </div>
        </div>
      </div>

      <div className={styles.instructions}>
        {console.log(props)}
        {props ? <Summary props={props.instructions} /> : null}
      </div>
    </div>
  );
}

export default RecipeCard;
