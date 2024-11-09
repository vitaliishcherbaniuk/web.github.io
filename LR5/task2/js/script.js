function openTab(evt, tabName) {
    // Ховаємо всі вкладки
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Видаляємо клас "active" з усіх кнопок
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Відображаємо поточну вкладку і додаємо "active" клас до кнопки
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Відкриваємо вкладку "border-radius" за замовчуванням
document.getElementById("defaultOpen").click();

function generate() {
    // Отримуємо значення з повзунків для border-radius
    const rtl = document.getElementById("rtl").value;
    const rtr = document.getElementById("rtr").value;
    const rbl = document.getElementById("rbl").value;
    const rbr = document.getElementById("rbr").value;

    // Оновлюємо значення текстових полів
    document.getElementById("ttl").value = rtl;
    document.getElementById("ttr").value = rtr;
    document.getElementById("tbl").value = rbl;
    document.getElementById("tbr").value = rbr;

    // Отримуємо значення для transition-duration та transition-property
    const durationValue = document.getElementById("durationValue").value;
    const durationUnit = document.getElementById("durationUnit").value;
    const duration = durationValue + durationUnit;
    const property = document.getElementById("property").value;

    // Застосовуємо стилі до блоку
    const block = document.getElementById("block");
    block.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;
    block.style.transitionDuration = duration;
    block.style.transitionProperty = property;

    // Виводимо CSS-код у textarea
    document.getElementById("cssCode").value =
        `border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;\n` +
        `transition-duration: ${duration};\n` +
        `transition-property: ${property};`;
}
