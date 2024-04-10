import { handleSaveClick } from "./save.js";

export function displayCard(recipe, container) {
  // Create a new anchor tag to wrap the card
  let cardLink = document.createElement("a");
  cardLink.setAttribute(
    "href",
    `/src/recipe_details/index.html?recipeId=${recipe.id}`
  );
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let image = document.createElement("img");
  let save = document.createElement("img");

  card.dataset.recipeId = recipe.id;

  // H2 Recipe Name
  name.textContent = recipe.title;

  // Image with alt attribute
  image.setAttribute("src", recipe.image);
  image.classList.add("recipe-img");
  image.setAttribute("alt", `image of ${recipe.title}`);
  image.setAttribute("loading", "lazy");

  // Save Button
  if (window.location.pathname === "/recipe_details/index.html") {
    save.setAttribute("src", "./images/save_icon.svg");
  } else {
    save.setAttribute("src", "../src/images/save_icon.svg");
  }
  save.setAttribute("alt", `Save Icon`);
  save.classList.add("save-icon");
  save.setAttribute("loading", "lazy");
  save.dataset.recipeId = recipe.id;
  save.addEventListener("click", handleSaveClick);

  // Append the card to the anchor tag
  cardLink.appendChild(image);
  cardLink.appendChild(name);
  // Append the card content to the card element
  card.appendChild(save);
  card.appendChild(cardLink);

  // Append the anchor tag to the specified container
  container.appendChild(card);
}
