function getSecondsToTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diffInMs = tomorrow - now;
    return Math.floor(diffInMs / 1000);
}

function showSecondsToTomorrow() {
    const seconds = getSecondsToTomorrow();
    document.getElementById('seconds-output').textContent = `Залишилося ${seconds} секунд до завтра.`;
}
