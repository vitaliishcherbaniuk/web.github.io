function formatDate(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // difference in seconds

    if (diff < 1) {
        return "прямо зараз";
    } else if (diff < 60) {
        return `${diff} сек. назад`;
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return `${minutes} хв. назад`;
    } else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

function showFormattedDate() {
    const input = document.getElementById("dateInput").value;
    const date = new Date(input);
    const resultDiv = document.getElementById("result");

    if (isNaN(date)) {
        resultDiv.textContent = "Неправильний формат дати!";
    } else {
        resultDiv.textContent = formatDate(date);
    }
}
