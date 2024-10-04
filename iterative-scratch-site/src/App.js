import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get(
        "./data.json"
        // `https://api.spoonacular.com/recipes/random?apiKey=1700ab22148d4c39a98a22bfa3f36c38`
      )
      .then((response) => {
        // HP.innerText = `Title: ${response.data.recipes[0].title}`;
        // instructions.innerText = `${response.data.recipes[0].instructions}`;
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("yo you got an error bruh");
      });
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe}>
          <h3 key={recipe.title}>{recipe.title}</h3>
          <p key={recipe.instructions}>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
