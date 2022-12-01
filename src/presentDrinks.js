import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
import get from "./getElement.js";

const presentDrinks = async (url) => {
  const drinks = await fetchDrinks(url);
  // console.log(drinks);
  displayDrinks(drinks);

  const section = get(".section-center");
  setDrink(section);
};
export default presentDrinks;
