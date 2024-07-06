const dishes = [
  { name: "Steamed fish", price: 55, cals: 544 },
  { name: "Fried potatoes", price: 55, cals: 544 },
  { name: "Roasted chicken", price: 55, cals: 544 },
  { name: "Boiled pork chops", price: 55, cals: 544 },
];

export default function renderMenuPage() {
  const container = document.getElementById("content");
  const content = document.createElement("div");
  const heading = document.createElement("h2");
  const menuList = document.createElement("ol");

  for (const dish of dishes) {
    const menuItem = document.createElement("li");
    menuItem.textContent = `${dish.name} ---  $${dish.price}, calories: ${dish.cals}`;
    menuList.appendChild(menuItem);
  }

  heading.textContent = "Menu";

  content.appendChild(heading);
  content.appendChild(menuList);

  container.appendChild(content);
}
