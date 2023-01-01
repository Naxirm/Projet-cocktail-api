import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
  showLoading();

  try {
    const response = await fetch(url);
    const drinks = await response.json();
    return drinks;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
