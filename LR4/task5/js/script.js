let generatedCaptcha = '';

function initCaptcha(length) {
    generatedCaptcha = '';
    const captchaDisplay = document.getElementById('captchaDisplay');
    captchaDisplay.innerHTML = ''; // Очищаємо попередню капчу

    for (let i = 0; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * 10); // Генерація випадкової цифри
        generatedCaptcha += randomDigit;
        const spanElement = document.createElement('span');
        spanElement.innerText = randomDigit;
        captchaDisplay.appendChild(spanElement); // Додаємо пікселізоване число
    }
}

function checkCaptcha() {
    const userInput = document.getElementById('captchaInput').value;
    const resultMessage = document.getElementById('resultMessage');

    if (userInput === generatedCaptcha) {
        resultMessage.innerText = 'Правильно!';
        resultMessage.classList.remove('error');
        resultMessage.classList.add('success');
    } else {
        resultMessage.innerText = 'Помилка';
        resultMessage.classList.remove('success');
        resultMessage.classList.add('error');
    }
}

// Ініціалізація капчі на 3 цифри (можна змінити число на інше значення)
initCaptcha(3);
