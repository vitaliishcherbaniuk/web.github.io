const paragraphs = document.querySelectorAll('p');

const resultInput = document.getElementById('result');

let totalClicks = 0;

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        totalClicks++;
        resultInput.value = totalClicks;
    });
});
