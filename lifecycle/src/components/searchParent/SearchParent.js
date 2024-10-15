import { useState } from "react";
import CardComponent from "../cardComponent/CardComponent";
import axios from "axios";

export default function SearchParent(props) {
	const [card, setCard] = useState(null);
	const [pokemon, setPokemon] = useState("");
	const [count, setCount] = useState(0);
	const getPokemon = async () => {
		try {
			let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
			console.log(response.data);
			setCard(response.data);
			setCount(count + 1);
		} catch (error) {
			console.error(error);
		}
	};

	console.log("rendering searchParent.js", props);
	return (
		<>
			<h2>Re-renders: {count}</h2>
			<input
				type="text"
				value={pokemon}
				onChange={(e) => {
					setPokemon(e.target.value);
					setCount(count + 1);
				}}
			/>
			<button onClick={getPokemon}>Get Pokemon</button>
			<CardComponent pokemonCard={card} />
		</>
	);
}
