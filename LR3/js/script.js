// Створення об'єктів тренувань
let workout1 = {
    type: "Кардіо",
    duration: 45, // хвилин
    difficulty: "середній",
    isDone: false,
    markAsDone() {
      this.isDone = true;
    }
  };
  
  let workout2 = {
    type: "Силові вправи",
    duration: 60,
    difficulty: "важкий",
    isDone: false,
    markAsDone() {
      this.isDone = true;
    }
  };
  
  let workout3 = {
    type: "Йога",
    duration: 30,
    difficulty: "легкий",
    isDone: true,
    markAsDone() {
      this.isDone = true;
    }
  };
  
  // Масив тренувань
  let workoutSchedule = [workout1, workout2, workout3];
  
  // Функція для відображення розкладу тренувань на сторінці
  function displayWorkoutSchedule(schedule) {
    let scheduleDiv = document.getElementById('workout-schedule');
    scheduleDiv.innerHTML = ''; // Очищення перед додаванням нових тренувань
    schedule.forEach(workout => {
      scheduleDiv.innerHTML += `
        <p>Тип: ${workout.type}, Тривалість: ${workout.duration} хв., Рівень: ${workout.difficulty}, Виконано: ${workout.isDone ? "Так" : "Ні"}</p>
      `;
    });
  }
  
  // Виведення початкового масиву
  displayWorkoutSchedule(workoutSchedule);
  
  // Сортування за тривалістю і оновлення розкладу
  workoutSchedule.sort((a, b) => a.duration - b.duration);
  displayWorkoutSchedule(workoutSchedule);
  
  // Приклад фільтрації невиконаних тренувань
  let unfinishedWorkouts = workoutSchedule.filter(workout => !workout.isDone);
  console.log("Невиконані тренування:", unfinishedWorkouts);
  