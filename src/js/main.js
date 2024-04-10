import { getRandomRecipes, searchRecipes } from "./onload.js";
import { loadHeaderFooter } from "./utils.js";
// import { handleSaveClick } from "./save.js";
import { displayCard } from "./displayCards.js";

loadHeaderFooter();
getRandomRecipes()
  .then((recipes) => {
    recipes.forEach((recipe) => {
      if (recipe.id !== undefined) {
        displayCard(recipe, cards);
      } else {
        console.warn("Found undefined recipe in the data.");
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Search Function
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", searchRecipes);
searchRecipes();

// Watch for click to open up recipe instructions
function handleCardClick(event) {
  const recipeId = event.target.dataset.recipeId;
  if (recipeId) {
    console.log("Clicked card with recipeId:", recipeId);
  } else {
    console.error("RecipeId not found for clicked card");
  }
}

// // Watch for click on Save Icon to save recipe to local storage
// document
//   .getElementsByClassName("save-icon")
//   .addEventListener("click", handleSaveClick());
