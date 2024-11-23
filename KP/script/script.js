document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        nav.classList.toggle('open');
    });
});

//Модальне вікно
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contact-modal");
    const contactButton = document.getElementById("contact-btn");
    const closeButton = document.querySelector(".close-button");
    contactButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Генерація категорій
document.addEventListener("DOMContentLoaded", () => {
    const categorySlider = document.querySelector(".category-slider");
    fetch("https://raw.githubusercontent.com/Akemi2005/kyrsova2/main/categories.json?v=3")
        .then((response) => response.json())
        .then((categories) => {
            categories.forEach((category) => {
                const categoryItem = document.createElement("a");
                categoryItem.href = category.link;
                categoryItem.classList.add("category-item");

                categoryItem.innerHTML = `
          <img src="${category.image}" alt="${category.alt}">
          <span>${category.name}</span>
        `;
                categorySlider.appendChild(categoryItem);
            });
            initSlider();
        })
        .catch((error) => {
            console.error("Помилка завантаження JSON:", error);
        });
});
// Функція для свайпера
function initSlider() {
    const slider = document.querySelector(".category-slider");
    const items = document.querySelectorAll(".category-item");
    const nextBtn = document.querySelector(".slider-btn.next");
    const prevBtn = document.querySelector(".slider-btn.prev");
    let scrollAmount = 0;
    if (items.length === 0) {
        console.error("Список елементів для свайпера порожній!");
        return;
    }
    const itemWidth = items[0].offsetWidth + 32;
    function slideNext() {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        scrollAmount += itemWidth;

        if (scrollAmount > maxScroll) {
            scrollAmount = 0;
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

    function slidePrev() {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        scrollAmount -= itemWidth;

        if (scrollAmount < 0) {
            scrollAmount = maxScroll;
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }
    nextBtn.addEventListener("click", slideNext);
    prevBtn.addEventListener("click", slidePrev);
}

// Перемикає клас для серця при натисканні
function toggleHeartColor(icon) {
    icon.classList.toggle('liked');
    icon.classList.toggle('fa-solid');
}

//Генерація карточок Товари місяця
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://raw.githubusercontent.com/Akemi2005/kyrsova2/main/products.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Помилка завантаження даних");
            }
            return response.json();
        })
        .then((products) => {
            const productsGrid = document.getElementById("products-grid");
            products.forEach((product) => {
                const productItem = document.createElement("article");
                productItem.classList.add("product-item");

                productItem.innerHTML = `
          <div>
            <i class="fa-regular fa-heart fa-2xl heart" style="color: #A8A8A8;" onclick="toggleHeartColor(this)"></i>
          </div>
          <img src="${product.image}" alt="${product.alt}">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">${product.price}</p>
          <button class="buy-now">Купити зараз</button>
        `;
                productsGrid.appendChild(productItem);
            });
        })
        .catch((error) => {
            console.error("Сталася помилка:", error);
        });
});

//Генерація карточок карточок товарів в продуктах
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://raw.githubusercontent.com/Akemi2005/kyrsova2/main/products2.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Помилка завантаження даних");
            }
            return response.json();
        })
        .then((products) => {
            const productsGrid = document.getElementById("products-grid-two");
            products.forEach((product) => {
                const productItem = document.createElement("article");
                productItem.classList.add("product-item");

                productItem.innerHTML = `
          <div>
            <i class="fa-regular fa-heart fa-2xl heart" style="color: #A8A8A8;" onclick="toggleHeartColor(this)"></i>
          </div>
          <img src="${product.image}" alt="${product.alt}">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">${product.price}</p>
          <button class="buy-now">Купити зараз</button>
        `;
                productsGrid.appendChild(productItem);
            });
        })
        .catch((error) => {
            console.error("Сталася помилка:", error);
        });
});

//Сторінка продуктів фільтри відкриття закриття
function toggleFilter(filterId) {
    const filterList = document.getElementById(filterId);
    const icon = filterList.previousElementSibling.querySelector('.toggle-icon i');

    if (filterList.style.display === "none" || filterList.style.display === "") {
        filterList.style.display = "block";
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    } else {
        filterList.style.display = "none";
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
}
