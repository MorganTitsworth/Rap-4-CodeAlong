import "./App.css";
import { SearchDrink } from "./SearchDrink";
import Cards from "./components/Cards";
import DrinksContext from "./DrinksContext";
import { useState } from "react";

function App() {
	console.log("Rendering: App.js");

	const [drinkData, setDrinkData] = useState(null);

	return (
		<div className="App">
			<DrinksContext.Provider value={{ drinkData, setDrinkData }}>
				<SearchDrink />
				{drinkData ? <Cards info={drinkData} /> : <></>}
			</DrinksContext.Provider>
		</div>
	);
}

export default App;
