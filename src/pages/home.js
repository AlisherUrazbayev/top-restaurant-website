import "./../styles/home.scss";

const days = [
  {
    name: "Monday",
    startHours: "11am",
    closeHours: " 10pm",
  },
  {
    name: "Tuesday",
    startHours: "11am",
    closeHours: " 10pm",
  },
  {
    name: "Wendsday",
    startHours: "11am",
    closeHours: " 10pm",
  },
  {
    name: "Thursday",
    startHours: "11am",
    closeHours: " 10pm",
  },
  {
    name: "Friday",
    startHours: "11am",
    closeHours: " 10pm",
  },
  {
    name: "Satarday",
    startHours: "11am",
    closeHours: " 10pm",
  },
  {
    name: "Sunday",
    startHours: "11am",
    closeHours: " 10pm",
  },
];

export default function renderHomePage() {
  const container = document.getElementById("content");
  const content = document.createElement("div");
  const heading = document.createElement("h2");
  const paragraph = document.createElement("p");
  const hoursContainer = document.createElement("div");
  const hoursList = document.createElement("ul");

  const location = document.createElement("p");

  content.className = "content-wrapper";

  //Populate hours information
  for (let i = 0; i < days.length; i++) {
    const day = document.createElement("li");
    day.textContent = `${days[i].name}: ${days[i].startHours} - ${days[i].closeHours}`;
    hoursList.appendChild(day);
  }

  paragraph.textContent = "Lorem ipsum";

  hoursContainer.textContent = "Hours";
  hoursContainer.appendChild(hoursList);

  heading.textContent = "HOME";

  location.textContent = "Location";

  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(hoursList);
  content.appendChild(location);

  container.appendChild(content);
}
