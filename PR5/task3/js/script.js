function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

function showLastDayOfMonth() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);

    if (isNaN(year) || isNaN(month) || month < 0 || month > 11) {
        document.getElementById('last-day-output').textContent = "Будь ласка, введіть коректні значення року і місяця.";
        return;
    }

    const lastDay = getLastDayOfMonth(year, month);
    document.getElementById('last-day-output').textContent = `Останній день: ${lastDay}`;
}
