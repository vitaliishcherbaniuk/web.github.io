document.getElementById('convertBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    // Регулярний вираз для пошуку дат у форматі DD/MM/YYYY
    const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/g;

    // Функція, що перетворює формат дати на YYYY-MM-DD
    const formattedText = inputText.replace(dateRegex, (match, day, month, year) => {
        return `${year}-${month}-${day}`;
    });

    // Виведення результату
    document.getElementById('outputText').textContent = formattedText;
});
