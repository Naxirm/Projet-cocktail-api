import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseUrl = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

// écoute le formulaire et affiche les cocktails
const form = get(".search-form");

form.addEventListener("keyup", () => {
  const input = get("input");
  const inputValue = input.value.toLowerCase();
  // console.log(inputValue);
  presentDrinks(`${baseUrl}${inputValue}`);
});
