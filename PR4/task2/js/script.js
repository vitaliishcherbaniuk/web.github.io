function startClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Додаємо нулі, якщо значення менше 10
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    // Відображаємо час
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function addZero(timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
}

// Оновлюємо час і попереджаємо кожні 30 секунд
function updateTimeWithWarning() {
    startClock();
    
    setTimeout(() => {
        alert("Час оновлено!"); // Попередження через 30 секунд
        updateTimeWithWarning(); // Оновлюємо цикл
    }, 30000);
}

// Запуск при завантаженні сторінки
updateTimeWithWarning();
