// Початкові тренування
const initialTrainings = [
    { type: 'Біг', duration: 30, difficulty: 'Легкий', completed: 'Не виконано' },
    { type: 'Силове тренування', duration: 45, difficulty: 'Середній', completed: 'Виконано' },
    { type: 'Йога', duration: 60, difficulty: 'Легкий', completed: 'Не виконано' }
];

// Функція для відображення тренування
function displayTraining(training) {
    const trainingItem = document.createElement('li');
    trainingItem.textContent = `Вид тренування: ${training.type}, Тривалість: ${training.duration} хв, Рівень складності: ${training.difficulty}, Стан: ${training.completed}`;
    document.getElementById('trainingList').appendChild(trainingItem);
}

// Відображення початкових тренувань при завантаженні сторінки
window.onload = function() {
    initialTrainings.forEach(displayTraining);
};

// Додавання нового тренування з форми
function addTraining(event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    const type = document.getElementById('training-type').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const difficulty = document.getElementById('difficulty').value;
    const completed = document.getElementById('completed').checked ? 'Виконано' : 'Не виконано';

    // Перевірка на порожні поля
    if (!type || !duration) {
        alert("Будь ласка, заповніть усі необхідні поля перед додаванням тренування.");
        return;
    }

    const newTraining = { type, duration, difficulty, completed };
    displayTraining(newTraining);

    document.getElementById('trainingForm').reset();
}
