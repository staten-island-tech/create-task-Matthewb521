import "../style.css";
import { exercise } from "./array";

console.log(exercise);

const DOMselectors = {
  container: document.getElementById("card-container"),
};

function createCard(exercise) {
  return `
    <div class="card card-compact bg-base-100 w-96 shadow-xl flex items-center justify-center text-center h-full">
      <h2 class="text-2xl">${exercise.name}</h2>
      <h3 class="text-lg">Difficulty level: ${exercise.difficulty}</h3>
      <p class="text-sm">ID: ${exercise.id} </p>
      <button class="btn text-base">Learn More</button>
    </div>
  `;
}

function printCard(exercise) {
  const cardHTML = createCard(exercise);
  DOMselectors.container.innerHTML += cardHTML;
}

printCard("Swimming");
