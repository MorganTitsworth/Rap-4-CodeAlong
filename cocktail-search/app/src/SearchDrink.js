import React, { useState, useContext } from "react";
import axios from "axios";

// import Cards from "./components/Cards";
import DrinksContext from "./DrinksContext";

export const SearchDrink = () => {
	console.log("Rendering: Search.js");
	// const [drinks, setDrinks] = useState(null);
	const { drinkData, setDrinkData } = useContext(DrinksContext);
	const [input, setInput] = useState("");

	const getDrink = async (req, res) => {
		try {
			const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
			setDrinkData(response.data.drinks);
			// console.log(response.data.drinks);
		} catch (err) {
			console.error(err);
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			getDrink();
		}
	};

	return (
		<div>
			<div className="search-container">
				<input
					className="input"
					name="text"
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
					onKeyDown={handleKeyDown}
				/>
				<button className="btn" onClick={getDrink}>
					Get Drink
				</button>
			</div>
		</div>
	);
};
