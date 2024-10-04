import "./App.module.css";
import axios from "axios";
import { useState } from "react";
import CardDefault from "./components/CardDefault";

function App() {
  const [card, setCard] = useState(null);

  const getRecipe = async () => {
    try {
      let response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=1700ab22148d4c39a98a22bfa3f36c38`
      );
      setCard(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={getRecipe}>Get Random Recipe</button>
      <CardDefault props={card} />
    </div>
  );
}
export default App;
