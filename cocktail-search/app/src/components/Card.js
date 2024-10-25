import React from "react";
import styles from "./CardStyles.module.css";

export default function Card(props) {
	console.log("Rendering: props.drink");
	// console.log(props);

	const drink = props.drink;

	return (
		<div className={styles.card}>
			<h1 className={styles.name}>{drink.strDrink}</h1>
			<div className={styles.pic}>
				<img src={`${drink.strDrinkThumb}`} alt={drink.strDrink} />
			</div>

			<div className={styles.glass}>
				<h3>Glass:</h3>
				<em>{drink.strGlass}</em>
			</div>

			<section className={styles.infoContainer}>
				<div className={styles.ingredientsContainer}>
					<h3 className={styles.heading}>Ingredients</h3>
					<ul className={styles.ingredients}>
						{Object.keys(drink)
							.filter((key) => key.startsWith("strIngredient") && drink[key])
							.map((key) => {
								const index = key.slice(13); // Get number from strIngredient
								const measureKey = `strMeasure${index}`;
								const measure = drink[measureKey];
								return (
									<li className={styles.ingredientItem} key={key}>
										{measure ? <strong>{`${measure} `}</strong> : ""}
										{drink[key]}
									</li>
								);
							})}
					</ul>
				</div>
				<div className={styles.instructionsContainer}>
					<h3 className={styles.heading}> Instructions</h3>
					<p className={styles.instructions}>{drink.strInstructions}</p>
				</div>
			</section>
		</div>
	);
}
