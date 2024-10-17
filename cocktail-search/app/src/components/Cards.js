import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import styles from "./CardsStyles.module.css";

export default function Cards(props) {
	const drinks = props.info.drinks;
	// console.log(drinks);
	const [drinkIndex, setDrinkIndex] = useState(0);
	const [drink, setDrink] = useState(drinks[0]);

	useEffect(() => {
		setDrink(drinks[0]);
	});

	const handleNextClick = () => {
		if (drinkIndex === drinks.length - 1) {
			setDrinkIndex(0);
		} else {
			setDrinkIndex(drinkIndex + 1);
		}

		setDrink(drinks[drinkIndex]);
	};
	const handleBackClick = () => {
		if (drinkIndex === 0) {
			setDrinkIndex(drinks.length - 1);
		} else {
			setDrinkIndex(drinkIndex - 1);
		}

		setDrink(drinks[drinkIndex]);
	};

	return (
		<div className={styles.container}>
			<Card drink={drink} />

			<div className={styles.buttonContainer}>
				<button className={styles.button3d} onClick={handleBackClick}>
					<div className={styles.buttonTop}>
						<span className="material-icons">❮</span>
					</div>
					<div className={styles.buttonBottom}></div>
					<div className={styles.buttonBase}></div>
				</button>
				<button className={styles.button3d} onClick={handleNextClick}>
					<div className={styles.buttonTop}>
						<span className="material-icons">❯</span>
					</div>
					<div className={styles.buttonBottom}></div>
					<div className={styles.buttonBase}></div>
				</button>
			</div>
		</div>
	);
}
