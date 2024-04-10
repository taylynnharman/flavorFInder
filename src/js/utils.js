// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storagee
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export async function loadHeaderFooter() {
  const headerElement = document.querySelector("#header");
  const footerElement = document.querySelector("#footer");

  // Fetch header and footer HTML
  const headerResponse = await fetch("/src/partials/header.html");
  const headerHTML = await headerResponse.text();

  const footerResponse = await fetch("/src/partials/footer.html");
  const footerHTML = await footerResponse.text();

  // Set the innerHTML of the header and footer elements
  headerElement.innerHTML = headerHTML;
  footerElement.innerHTML = footerHTML;
}
// export function toggleNav() {
//   const nav = document.getElementById("nav");
//   const menuLines = document.querySelectorAll(".menu-line");

//   nav.style.right = nav.style.right === "0px" ? "-300px" : "0px";
//   menuLines.forEach((line) => {
//     line.style.transform =
//       line.style.transform === "rotate(45deg)" ? "none" : "rotate(45deg)";
//     line.style.opacity = line.style.opacity === "0" ? "1" : "0";
//   });
// }
