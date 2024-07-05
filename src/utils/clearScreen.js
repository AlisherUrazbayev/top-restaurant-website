export default function clearScreen() {
  const container = document.getElementById("content");

  container.innerHTML = "";

  console.log("Screen cleared");
}
