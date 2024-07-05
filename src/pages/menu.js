export default function renderMenuPage() {
  const container = document.getElementById("content");
  const heading = document.createElement("h1");
  const subHeading = document.createElement("h2");

  heading.textContent = "MENU";
  subHeading.textContent = "MENU";

  container.appendChild(heading);
  container.appendChild(subHeading);
}
