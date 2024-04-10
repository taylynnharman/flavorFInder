import { displayCard } from "./displayCards.js";
import { loadHeaderFooter } from "./utils.js";
import { getLocalStorage, setLocalStorage } from "./utils.js";

loadHeaderFooter();

const apiKey = "647784b66bf746d1a8d43353480d1d4e";

export function handleSaveClick(event) {
  const recipeId = event.target.dataset.recipeId;
  if (recipeId) {
    saveRecipe(recipeId);
  } else {
    console.error("RecipeId not found for clicked card");
  }
}

// function buttonAnimation() {
//   // Get the save button
//   const saveButton = document.querySelector(".btn-add-to-cart");
//   // Add CSS class for added animation
//   saveButton.classList.add("saved");
// }

// Add a recipie to saved
export async function saveRecipe(recipeId) {
  const updaterecipeBook = getLocalStorage("recipeBook") || [];

  // Add the new recipe to the recipe book

  updaterecipeBook.push(recipeId);
  console.log("recipebook", recipeId);

  //   Update the local storage with the Recipe Book
  setLocalStorage("recipeBook", updaterecipeBook);
}

export function renderRecipeBook() {
  const recipeBookContainer = document.querySelector("#recipe-book");
  const recipeBook = getLocalStorage("recipeBook");

  if (!recipeBook || recipeBook.length === 0) {
    recipeBookContainer.innerHTML = "<h3>No recipes have been saved yet!</h3>";
    return;
  }

  recipeBook.forEach((recipeId) => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((recipe) => {
        displayCard(recipe, recipeBookContainer);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
      });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  renderRecipeBook();
});
