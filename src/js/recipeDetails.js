import { displayCard } from "./displayCards.js";

// Connect to HTML
const recipeCard = document.querySelector("#recipe-details");

// Function to extract query parameter from URL
function getRecipeId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("recipeId");
}

export default async function fetchRecipe() {
  const recipeId = getRecipeId();

  //   Get step by step instructions
  const apiKey = "647784b66bf746d1a8d43353480d1d4e";
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch recipe details");
    }
    const recipe = await response.json();
    console.log(recipe);
    renderDetails(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }
}

function renderDetails(recipe) {
  displayCard(recipe, recipeCard);
  let card = document.createElement("card");
  let cardCont = document.createElement("section");

  let ingredientsContainer = document.createElement("div");
  let ingredientsHeader = document.createElement("h2");

  let instructionsContainer = document.createElement("div");
  let instructHeader = document.createElement("h2");

  //   let ingredientsList = document.createElement("ul");
  let ingredients = document.createElement("li");

  // Ingredients
  //   ingredientsHeader.textContent = "Ingredients: ";
  //   ingredientsList.forEach((ingredient) => {
  //     const ingredientElement = document.createElement("li");
  //     ingredientElement.classList.add("step");
  //     ingredientElement.innerHTML = `
  //           <div class="ingredient">${ingredient}</div>
  //         `;
  //     instructionsContainer.appendChild(ingredientElement);
  //   });

  //   ingredientsContainer.appendChild(ingredientsHeader);

  //   Step by step instructions
  const instructionSteps = recipe.analyzedInstructions;
  instructHeader.textContent = "Instructions: ";
  instructionsContainer.appendChild(instructHeader);
  instructionSteps.forEach((instruction) => {
    instruction.steps.forEach((step, index) => {
      const stepElement = document.createElement("div");
      stepElement.classList.add("step");
      stepElement.innerHTML = `
          <div class="step-number">Step ${index + 1}</div>
          <div class="step-description">${step.step}</div>
        `;
      instructionsContainer.appendChild(stepElement);
    });
  });

  recipeCard.appendChild(instructionsContainer);
  recipeCard.appendChild(ingredientsContainer);
}
