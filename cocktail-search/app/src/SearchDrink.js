import React, { useState } from "react";
import axios from "axios";

import Cards from "./components/Cards";

export const SearchDrink = () => {
	console.log("Rendering: Search.js");
	const [drinks, setDrinks] = useState(null);
	const [input, setInput] = useState("");

	const getDrink = async (req, res) => {
		try {
			const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
			setDrinks(response.data);
			console.log(response.data);
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
			{drinks ? <Cards info={drinks}></Cards> : <></>}
		</div>
	);
};
