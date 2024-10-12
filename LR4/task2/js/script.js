let correctAnswers = 0;
let totalQuestions = 0;
let currentTask = {};
let maxNumber = 10; // Максимальне число для множення

// Функція для генерації випадкового завдання
function generateTask() {
    let num1 = Math.floor(Math.random() * maxNumber) + 1;
    let num2 = Math.floor(Math.random() * maxNumber) + 1;
    return { num1, num2, answer: num1 * num2 };
}

// Функція для показу наступного завдання
function nextTask() {
    currentTask = generateTask();
    document.getElementById('task').innerHTML = `Завдання: ${currentTask.num1} × ${currentTask.num2} = `;
    document.getElementById('result').innerHTML = '';
    document.getElementById('answer').value = '';
}

// Функція для перевірки відповіді
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentTask.answer) {
        correctAnswers++;
        document.getElementById('result').style.color = 'green';
        document.getElementById('result').innerHTML = 'Правильно!';
    } else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerHTML = `Помилка, правильна відповідь «${currentTask.answer}»`;
    }
    totalQuestions++;
    updateScore();
}

// Функція для оновлення рахунку
function updateScore() {
    let score = Math.round((correctAnswers / totalQuestions) * 100);
    document.getElementById('score').innerHTML = `Загальний рахунок: ${score}% (${correctAnswers} правильних відповідей з ${totalQuestions})`;
}

// Початкове завдання
nextTask();
