// Функція для друку фрази
function typeWriter(text, speed) {
    let i = 0;
    let outputElement = document.getElementById('output');
    outputElement.textContent = ''; // Очищаємо поле перед новим друком

    // Використовуємо setInterval для поступового виведення тексту
    let typingEffect = setInterval(() => {
        if (i < text.length) {
            outputElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect); // Зупиняємо ефект після завершення друку
        }
    }, speed);
}

// Функція для запуску ефекту
function startTyping() {
    let userInput = document.getElementById('userInput').value;
    let textToType = userInput ? userInput : "Це приклад тексту для ефекту друкарської машинки!";
    
    // Використовуємо setTimeout, щоб додати затримку перед початком друку
    setTimeout(() => {
        typeWriter(textToType, 100); // Швидкість друку 100 мс на символ
    }, 500); // Затримка в 500 мс перед стартом
}

// Додаємо подію на кнопку для запуску друку
document.getElementById('startButton').addEventListener('click', startTyping);
