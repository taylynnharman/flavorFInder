import { displayCard } from "./displayCards.js";

const apiKey = "647784b66bf746d1a8d43353480d1d4e";

export async function getRandomRecipes() {
  const totalRecipes = 30;

  const url = `https://api.spoonacular.com/recipes/random?number=${totalRecipes}&apiKey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.recipes;
}

export async function searchRecipes() {
  document.getElementById("cards").innerHTML = "";

  const ingredients = document.getElementById("searchInput").value;
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;
  console.log;
  fetch(url)
    .then((response) => response.json())
    .then((recipes) => {
      recipes.forEach((recipe) => {
        displayCard(recipe, cards);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
