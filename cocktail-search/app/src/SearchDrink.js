import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/Card";

export const SearchDrink = () => {
	const [card, setCard] = useState(null);
	const [drink, setDrink] = useState("");

	// useEffect(() => {
	// 	const getDrink = async (req, res) => {
	// 		try {
	// 			const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
	// 			setCard(response.data);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};

	// 	return;
	// }, [drink]);
	const getDrink = async (req, res) => {
		try {
			const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
			setCard(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<input
				type="text"
				value={drink}
				onChange={(e) => {
					setDrink(e.target.value);
				}}
			/>
			<button onClick={getDrink}>Get Pokemon</button>
			<Card info={card}></Card>
		</>
	);
};
