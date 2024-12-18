import "../style.css";
import { exercise } from "./array";

const textInput = document.getElementById("text-input");
const dropdown = document.getElementById("options");
const form = document.querySelector("#form-container form");

function createCard(exercise) {
  return `
    <div class="card bg-white border border-gray-300 shadow-md w-96 p-6 rounded-lg space-y-4">
    <h2 class="text-2xl font-bold text-gray-800">${exercise.name}</h2>
    <h3 class="text-lg font-semibold text-gray-600">Difficulty level: ${exercise.difficulty}</h3>
    <p class="text-sm text-gray-500">Body Part: ${exercise.bodyPart}</p>
    </div>
  `;
}

function printCard(difficulty, bodyPart) {
  const filteredExercises = [];

  exercise.forEach((item) => {
    let matchesDifficulty = true;
    let matchesBodyPart = true;

    if (difficulty) {
      if (item.difficulty == difficulty) {
        matchesDifficulty = true;
      } else {
        matchesDifficulty = false;
      }
    }

    if (bodyPart) {
      if (item.bodyPart == bodyPart) {
        matchesBodyPart = true;
      } else {
        matchesBodyPart = false;
      }
    }

    if (matchesDifficulty && matchesBodyPart) {
      filteredExercises.push(item);
    }
  });

  const container = document.getElementById("card-container");
  container.innerHTML = "";
  filteredExercises.forEach((exercise) => {
    container.innerHTML += createCard(exercise);
    console.log(exercise.name, exercise.bodyPart, exercise.id);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const difficulty = textInput.value.trim();
  const bodyPart = dropdown.options[dropdown.selectedIndex].text;

  printCard(difficulty, bodyPart);
});
