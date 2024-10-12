function startClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Функція для додавання "0" перед значенням
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    // Відображення часу на сторінці
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function addZero(timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
}

// Оновлення годинника кожну секунду
setInterval(startClock, 1000);

// Запустити годинник при завантаженні сторінки
startClock();
