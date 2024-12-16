function printCardByName(name) {
  const exerciseToPrint = exercise.find((item) => item.name === name);
  container.innerHTML += createCard(exerciseToPrint);
}

function printCardByDifficulty(difficulty) {
  const exercisesToPrint = exercise.filter(
    (item) => item.difficulty === difficulty
  );
  exercisesToPrint.forEach((item) => {
    container.innerHTML += createCard(item);
  });
  const container = document.getElementById("card-container");
  container.innerHTML = filteredExercises.map(createCard).join("");
}

function printCardByBodyPart(bodyPart) {
  const exercisesToPrint = exercise.filter(
    (item) => item.bodyPart === bodyPart
  );
  exercisesToPrint.forEach((item) => {
    container.innerHTML += createCard(item);
  });
}

function printCard(difficulty, bodyPart) {
  const filteredExercises = exercise.filter(
    (item) =>
      (difficulty ? item.difficulty == difficulty : true) &&
      (bodyPart ? item.bodyPart == bodyPart : true)
  );
  const container = document.getElementById("card-container");
  container.innerHTML = filteredExercises.map(createCard).join("");
}
