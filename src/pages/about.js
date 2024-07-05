export default function renderAboutPage() {
  const container = document.getElementById("content");
  const heading = document.createElement("h1");
  const subHeading = document.createElement("h2");

  heading.textContent = "ABOUT";
  subHeading.textContent = "ABOUT";

  container.appendChild(heading);
  container.appendChild(subHeading);
}
