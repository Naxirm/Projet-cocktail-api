import get from "./getElement.js";

const loading = get(".loading");
// console.log(loading);

// montre le loader
export const showLoading = () => {
  loading.classList.remove("hide-loading");
};

// cache le loader
export const hideLoading = () => {
  loading.classList.add("hide-loading");
};
