

// Task 3.3
function task3() {
    alert("Натисніть OK, щоб переглянути повідомлення.");
    document.getElementById('result').innerHTML = "Hello, world!";
}

// Task 3.4
function task4() {
    let userInfo = prompt("Будь ласка, введіть інформацію:");
    alert("Ви ввели: " + userInfo);
    document.getElementById('result').innerHTML = "Ви ввели: " + userInfo;
}

// Task 3.5
function task5() {
    let userInput = prompt("Введіть текст:");
    if (userInput !== null) {
        alert("Ви ввели: " + userInput);
        document.getElementById('result').innerHTML = "Ви ввели: " + userInput;
    }
}

// Task 3.6
function task6() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));
    let sum = num1 + num2;
    alert("Результат: " + sum);
    document.getElementById('result').innerHTML = "Результат: " + sum;
}

// Task 3.7
function task7() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));
    let largest = (num1 > num2) ? num1 : num2;
    document.getElementById('result').innerHTML = "Більше число: " + largest;
}

// Task 3.8
function task8() {
    let month = parseInt(prompt("Введіть номер місяця (1-12):"));
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

// Task 3.9
function task9() {
    if (confirm("Ви хочете продовжити?")) {
        document.getElementById('result').innerHTML = "Ви натиснули OK!";
    } else {
        document.getElementById('result').innerHTML = "Ви натиснули Cancel.";
    }
}

// Task 3.10
function task10() {
    let count = parseInt(prompt("Введіть кількість учнів:"));
    let students = "";
    for (let i = 1; i <= count; i++) {
        let name = prompt("Введіть ім'я та прізвище учня" + i + ":");
        students += name + "<br>";
    }
    document.getElementById('result').innerHTML = students;
}

// Task 3.11
function task11() {
    let students = "";
    while (true) {
        let name = prompt("Введіть ім’я студента (натисніть «Скасувати», щоб зупинити):");
        if (name === null) break;
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


