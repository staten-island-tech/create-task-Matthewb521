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
}

function printCardByBodyPart(bodyPart) {
  const exercisesToPrint = exercise.filter(
    (item) => item.bodyPart === bodyPart
  );
  exercisesToPrint.forEach((item) => {
    container.innerHTML += createCard(item);
  });
}
