import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (drinks) => {
  hideLoading();

  // affiche les infos d'un cocktail
  const drink = drinks.drinks[0];
  // console.log(drink);
  const {
    strDrink: name,
    strInstructions: description,
    strDrinkThumb: image,
  } = drink;

  const img = get(".drink-img");
  const desc = get(".drink-description");
  const drinkName = get(".drink-name");

  drinkName.textContent = name;
  desc.textContent = description;
  img.src = image;

  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
  ];

  const ingredients = get(".drink-ingredients");
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
};

export default displayDrink;
