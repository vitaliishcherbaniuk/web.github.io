// Функція для генерації випадкового числа в діапазоні від -5 до 5
function getRandomNumber() {
    return Math.floor(Math.random() * 11) - 5; // Від -5 до 5
}

// Функція для обробки ставки
function processBet() {
    const betAmount = document.getElementById('betAmount').value;
    const resultDiv = document.getElementById('result');

    // Перевіряємо, чи ввів користувач суму
    if (betAmount === '' || betAmount <= 0) {
        resultDiv.textContent = 'Будь ласка, введіть дійсну суму ставки.';
        return;
    }

    resultDiv.textContent = 'Генеруємо результат...';

    // Через 1 секунду після натискання кнопки
    setTimeout(() => {
        const randomNumber = getRandomNumber();
        
        if (randomNumber <= 0) {
            resultDiv.textContent = `Ви не вгадали зі своєю ставкою. Випало число ${randomNumber}.`;
        } else {
            const winnings = betAmount * randomNumber;
            resultDiv.textContent = `Вітаємо! Ви виграли ${winnings} гривень. Випало число ${randomNumber}.`;
        }
    }, 1000); // Затримка 1 секунда
}

// Додаємо подію на кнопку
document.getElementById('submitBet').addEventListener('click', processBet);
