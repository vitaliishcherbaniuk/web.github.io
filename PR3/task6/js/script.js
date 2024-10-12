document.getElementById('extractBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    // Регулярний вираз для пошуку правильних електронних адрес
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;

    // Пошук всіх збігів
    const foundEmails = inputText.match(emailRegex) || [];

    // Очищення попередніх результатів
    const outputEmails = document.getElementById('outputEmails');
    outputEmails.innerHTML = '';

    // Виведення кожної знайденої адреси
    foundEmails.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        outputEmails.appendChild(li);
    });
});
