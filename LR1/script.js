

// Task 3.3
function task3() {
    alert("Натисніть OK, щоб переглянути повідомлення.");
    document.getElementById('result').innerHTML = "Hello, world!";
}

// Task 3.4
function task4() {
    let userInfo = prompt("Будь ласка, введіть інформацію:");
    if (userInfo === null || userInfo.trim() === "") {
        alert("Ви нічого не ввели");
    } else {
        alert("Ви ввели: " + userInfo);
        document.getElementById('result').innerHTML = "Ви ввели: " + userInfo;
    }
}

// Task 3.5
function task5() {
    let userInput = prompt("Введіть текст:");
    if (userInput === null || userInput.trim() === "") {
        alert("Ви нічого не ввели");
    } else {
        alert("Ви ввели: " + userInput);
        document.getElementById('result').innerHTML = "Ви ввели: " + userInput;
    }
}

// Task 3.6
function task6() {
    let num1 = prompt("Введіть перше число:");
    if (num1 === null || num1.trim() === "") {
        alert("Ви нічого не ввели для першого числа");
        return; // Завершуємо функцію, якщо num1 не введено
    }
    
    // Перевірка, чи num1 є числом
    if (isNaN(num1)) {
        alert("Помилка: введіть коректне значення");
        return; // Завершуємо функцію, якщо num1 не є числом
    }

    let num2 = prompt("Введіть друге число:");
    if (num2 === null || num2.trim() === "") {
        alert("Ви нічого не ввели для другого числа");
        return; // Завершуємо функцію, якщо num2 не введено
    }

    // Перевірка, чи num2 є числом
    if (isNaN(num2)) {
        alert("Помилка: введіть коректне значення");
        return; // Завершуємо функцію, якщо num2 не є числом
    }
    
    let sum = parseFloat(num1) + parseFloat(num2);
    alert("Результат: " + sum);
    document.getElementById('result').innerHTML = "Результат: " + sum;
}

// Task 3.7
function task7() {
    let num1 = prompt("Введіть перше число:");
    if (num1 === null || num1.trim() === "") {
        alert("Ви нічого не ввели для першого числа");
        return; // Завершуємо функцію, якщо num1 не введено
    }
    
    let num2 = prompt("Введіть друге число:");
    if (num2 === null || num2.trim() === "") {
        alert("Ви нічого не ввели для другого числа");
        return; // Завершуємо функцію, якщо num2 не введено
    }
    
    let largest = (parseFloat(num1) > parseFloat(num2)) ? num1 : num2;
    document.getElementById('result').innerHTML = "Більше число: " + largest;
}

// Task 3.8
function task8() {
    let month = prompt("Введіть номер місяця (1-12):");
    
    if (month === null || month.trim() === "") {
        alert("Ви нічого не ввели");
    } else {
        month = parseInt(month);
        let season;
        if (month == 12 || month == 1 || month == 2) {
            season = "Зима";
        } else if (month >= 3 && month <= 5) {
            season = "Весна";
        } else if (month >= 6 && month <= 8) {
            season = "Літо";
        } else if (month >= 9 && month <= 11) {
            season = "Осінь";
        } else {
            season = "Немає такого місяця!";
        }
        document.getElementById('result').innerHTML = "Пора року: " + season;
    }
}

// Task 3.9
function task9() {
    if (confirm("Ви хочете продовжити?")) {
        document.getElementById('result').innerHTML = "Ви натиснули Oк";
    } else {
        document.getElementById('result').innerHTML = "Ви натиснули Скасувати.";
    }
}

// Task 3.10
function task10() {
    let count = parseInt(prompt("Введіть кількість учнів:"));
    
    if (isNaN(count) || count <= 0) {
        alert("Будь ласка, введіть коректну кількість учнів.");
        return; // Завершуємо функцію, якщо кількість не введено або вона некоректна
    }

    let students = "";
    for (let i = 1; i <= count; i++) {
        let name = prompt("Введіть ім'я та прізвище учня " + i + ":");
        
        if (name === null || name.trim() === "") {
            alert("Ви нічого не ввели для учня " + i);
            i--; // Повертаємось до цього ж учня, щоб знову запитати його ім'я
            continue;
        }
        
        // Перевірка на число
        if (!isNaN(name)) {
            alert("Помилка: введено некоректне значення " + i);
            i--; // Повертаємось до цього ж учня
            continue;
        }
        
        students += name + "<br>";
    }
    document.getElementById('result').innerHTML = students;
}

// Task 3.11
function task11() {
    let students = "";
    while (true) {
        let name = prompt("Введіть ім’я студента (натисніть «Скасувати», щоб зупинити):");

        if (name === null) break; // Завершуємо, якщо натиснуто "Скасувати"
        
        if (name.trim() === "") {
            alert("Ви нічого не ввели");
            continue; // Продовжуємо запит, якщо поле порожнє
        }
        
        // Перевірка на число
        if (!isNaN(name)) {
            alert("Помилка: введено некоректне значення");
            continue; // Продовжуємо запит, якщо введено число
        }

        students += name + "<br>";
    }
    document.getElementById('result').innerHTML = students;
}

// Task 3.12
function task12() {
    const resultDiv = document.getElementById("result");
    let tableHTML = '<table border="1" cellspacing="0" cellpadding="5">';

    for (let i = 1; i <= 10; i++) {
        tableHTML += '<tr>';
        for (let j = 1; j <= 10; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    resultDiv.innerHTML = tableHTML;
}


