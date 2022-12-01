import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
const sectionCenter = get(".section-center");
const title = get(".title");

const displayDrinks = async ({ drinks }) => {
  if (!drinks) {
    hideLoading();
    title.textContent = "sorry, no results!";
    sectionCenter.innerHTML = null;
    return;
  }
  const DrinkItems = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return ` <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}"/>
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  hideLoading();
  sectionCenter.innerHTML = DrinkItems;
  title.textContent = "";
};

export default displayDrinks;
