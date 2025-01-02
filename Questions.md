# 2024 AP Computer Science Principles Free-Response Questions: Set 1

## AP® Computer Science Principles Written Response Prompts

### Instructions:

- **Time:** 1 hour
- **Questions:** 2
- Read each question carefully and completely.
- Write your response in the space provided for each question in the Written Response booklet.
- You may plan your answers in this orange booklet, but no credit will be given for anything written in this booklet. You will only earn credit for what you write in the separate Written Response booklet.

---

### Pre-FRQ Practice

## Identify the Algorithm present in the JavaScript Files.

### Aspects of Algorithm

Sequencing
Selection
Iteration

### Question 1

Programs accept input to achieve their intended functionality. **Describe at least one valid input to your program and what your program does with that input.**

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.

```javascript
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
```

```
Two valid inputs in this program are difficulty and bodypart. These two inputs are taken and then used to find exercises that have the same values for difficulty level and body part trained from the array, and create a workout plan with those exercies.
```

### Question 2

Refer to your Personalized Project Reference when answering this question.

#### Part (a):

Consider the first iteration statement included in the Procedure section of your Personalized Project Reference. **Describe what is being accomplished by the code in the body of the iteration statement.**

```javascript
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
```

```
The iteration here is the forEach loop. The forEach looks through the array provided and then matches the difficulty level and body part trained from the inputs given in the function and findes exersies that fill both parameters.
```

#### Part (b):

Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference.

- Write two calls to your procedure that each cause a different code segment in the procedure to execute.
- Describe the expected behavior of each call. If it is not possible for two calls to your procedure to cause different code segments to execute, explain why this is the case for your procedure.

```javascript
printCard(1, chest);

printCard(1, back);
```

```
The first call stated would run the code correctly and return all the exerices with a difficulty level of 1 that train the chest. However, for the second call since there are no exerices that match the two given parameters one of the paramters will return false and not print anything since no matches were found.
```

#### Part (c):

Suppose another programmer provides you with a procedure called `checkValidity(value)` that:

- Returns `true` if a value passed as an argument is considered valid by the other programmer.
- Returns `false` otherwise.

Using the list identified in the List section of your Personalized Project Reference, **explain in detailed steps an algorithm that uses `checkValidity` to check whether all elements in your list are considered valid by the other programmer.** Your explanation must be detailed enough for someone else to write the program code for the algorithm that uses `checkValidity`.

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.

```javascript

```

```

```

---

### End of Exam
