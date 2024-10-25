import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import styles from "./CardsStyles.module.css";

export default function Cards(props) {
	const drinkData = props.info.drinks;
	console.log("Rendering:", drinkData);

	const [drinks, setDrinks] = useState([drinkData[0]]);

	const drinkIndex = useRef(0);
	const observer = useRef(null);

	// Resets page when drinkData is changed
	useEffect(() => {
		drinkIndex.current = 1;
		setDrinks([drinkData[0]]);
	}, [drinkData]);

	useEffect(() => {
		observer.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log(entry);
					if (entry.isIntersecting) {
						drinkIndex.current += 1;
						setDrinks(drinkData.slice(0, drinkIndex.current));
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5, // threshold: 1 would prevent rendering
			}
		);
		observer.current.observe(document.getElementById("seen"));

		// Why do you need to disconnect again
		return () => {
			observer.current.disconnect();
		};
	});
	return (
		<div>
			{drinks.map((data) => {
				return <Card key={data.idDrink} drink={data} />;
			})}
			<div id="seen">SEE ME</div>
		</div>
	);
	// const [drinkIndex, setDrinkIndex] = useState(0);
	// // const [drinks, setDrinks] = useState(props.info.drinks);

	// // useEffect(() => {
	// // 	console.log("USE EFFECT");
	// // 	setDrink(drinks[drinkIndex]);
	// // }, [drinks]);

	// const handleNextClick = () => {
	// 	if (drinkIndex === drinks.length - 1) {
	// 		setDrinkIndex(0);
	// 	} else {
	// 		setDrinkIndex(drinkIndex + 1);
	// 	}

	// 	// setDrink(drinks[drinkIndex]);
	// };
	// const handleBackClick = () => {
	// 	if (drinkIndex === 0) {
	// 		setDrinkIndex(drinks.length - 1);
	// 	} else {
	// 		setDrinkIndex(drinkIndex - 1);
	// 	}

	// 	// setDrink(drinks[drinkIndex]);
	// };

	// return (
	// 	<div className={styles.container}>
	// 		<Card drink={drinks[drinkIndex]} />

	// 		<div className={styles.buttonContainer}>
	// 			<button className={styles.button3d} onClick={handleBackClick}>
	// 				<div className={styles.buttonTop}>
	// 					<span className="material-icons">❮</span>
	// 				</div>
	// 				<div className={styles.buttonBottom}></div>
	// 				<div className={styles.buttonBase}></div>
	// 			</button>
	// 			<button className={styles.button3d} onClick={handleNextClick}>
	// 				<div className={styles.buttonTop}>
	// 					<span className="material-icons">❯</span>
	// 				</div>
	// 				<div className={styles.buttonBottom}></div>
	// 				<div className={styles.buttonBase}></div>
	// 			</button>
	// 		</div>
	// 	</div>
	// );
}
