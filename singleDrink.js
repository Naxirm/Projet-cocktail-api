import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  // récupère les infos du cocktail
  const id = localStorage.getItem("drink");
  const drink = await fetchDrinks(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  // affiche les infos du cocktail
  displayDrink(drink);
};

window.addEventListener("DOMContentLoaded", () => {
  presentDrink();
});
