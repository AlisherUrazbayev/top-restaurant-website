import renderHomePage from "./pages/home";
import renderMenuPage from "./pages/menu";
import renderAboutPage from "./pages/about";
import clearScreen from "./utils/clearScreen";

const btnHome = document.getElementById("btn-home");
const btnMenu = document.getElementById("btn-menu");
const btnAbout = document.getElementById("btn-about");

//Click listeners for navigation of the website
btnHome.addEventListener("click", () => {
  console.log("Home");
  clearScreen();
  renderHomePage();
});
btnAbout.addEventListener("click", () => {
  console.log("About");
  clearScreen();
  renderAboutPage();
});
btnMenu.addEventListener("click", () => {
  console.log("Menu");
  clearScreen();
  renderMenuPage();
});
