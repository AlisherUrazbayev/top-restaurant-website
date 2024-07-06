export default function renderAboutPage() {
  const container = document.getElementById("content");
  const content = document.createElement("div");
  const heading = document.createElement("h2");
  const subHeading = document.createElement("h3");
  const paragraph = document.createElement("p");

  heading.textContent = "Lorem ipsum";
  subHeading.textContent = "Lorem ipsum";
  paragraph.textContent = "Lorem ipsum";

  content.appendChild(heading);
  content.appendChild(subHeading);
  content.appendChild(paragraph);

  container.appendChild(content);
}
