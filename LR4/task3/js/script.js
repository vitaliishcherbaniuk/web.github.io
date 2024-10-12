let correctAnswers = 0;
let totalQuestions = 0;
let currentTask = {};
let maxNumber = 10; // Максимальне число для множення

// Функція для генерації випадкового завдання
function generateTask() {
    let num1 = Math.floor(Math.random() * maxNumber) + 1;
    let num2 = Math.floor(Math.random() * maxNumber) + 1;
    let correctAnswer = num1 * num2;

    // Генерація варіантів відповідей
    let answers = generateRandomAnswers(correctAnswer);

    return { num1, num2, correctAnswer, answers };
}

// Генерація випадкових відповідей, включаючи правильну
function generateRandomAnswers(correctAnswer) {
    let answers = [];
    answers.push(correctAnswer); // Додаємо правильну відповідь

    while (answers.length < 4) {
        let randomAnswer = Math.floor(Math.random() * maxNumber * maxNumber) + 1;
        if (!answers.includes(randomAnswer)) {
            answers.push(randomAnswer);
        }
    }

    return shuffleArray(answers); // Перемішуємо варіанти відповідей
}

// Функція для перемішування масиву
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Функція для показу наступного завдання
function nextTask() {
    currentTask = generateTask();
    document.getElementById('task').innerHTML = `Завдання: ${currentTask.num1} × ${currentTask.num2} = `;
    document.getElementById('result').innerHTML = '';

    // Очищуємо радіокнопки
    const form = document.getElementById('answersForm');
    form.innerHTML = '';

    // Створюємо радіокнопки для варіантів відповідей
    currentTask.answers.forEach(answer => {
        let radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'answer';
        radioBtn.value = answer;
        radioBtn.onclick = checkAnswer;

        let label = document.createElement('label');
        label.appendChild(radioBtn);
        label.appendChild(document.createTextNode(answer));
        form.appendChild(label);
        form.appendChild(document.createElement('br'));
    });
}

// Функція для перевірки відповіді
function checkAnswer() {
    let selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (selectedAnswer === currentTask.correctAnswer) {
        correctAnswers++;
        document.getElementById('result').style.color = 'green';
        document.getElementById('result').innerHTML = 'Правильно!';
    } else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerHTML = `Помилка, правильна відповідь «${currentTask.correctAnswer}»`;
    }
    totalQuestions++;
    updateScore();

    // Забороняємо вибір після перевірки
    const radios = document.getElementsByName('answer');
    radios.forEach(radio => radio.disabled = true);
}

// Функція для оновлення рахунку
function updateScore() {
    let score = Math.round((correctAnswers / totalQuestions) * 100);
    document.getElementById('score').innerHTML = `Загальний рахунок: ${score}% (${correctAnswers} правильних відповідей з ${totalQuestions})`;
}

// Початкове завдання
nextTask();
