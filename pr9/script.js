let cart = [];
const cartIcon = document.getElementById('cart-icon');
const cartItemsCount = document.getElementById('cart-items-count');
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');

// Завантаження корзини з localStorage
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    } else {
        cart = [];
    }
    updateCartCount();
}

// Оновлення кількості товарів у корзині
function updateCartCount() {
    cartItemsCount.textContent = cart.length;
}

// Додавання товару до корзини
function addToCart(productName, productPrice) {
    const quantity = parseInt(prompt(`Вкажіть кількість для "${productName}":`, 1), 10);
    if (!quantity || quantity <= 0) {
        alert('Невірна кількість!');
        return;
    }

    const existingProduct = cart.find((item) => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ name: productName, price: productPrice, quantity });
    }

    saveCart();
    alert('Товар додано до корзини!');
    updateCartCount();
}

// Збереження корзини в localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Відображення корзини
cartIcon.addEventListener('click', () => {
    if (cart.length === 0) {
        modal.classList.remove('hidden');
        modalContent.querySelector('p').textContent = 'Корзина пуста';
    } else {
        window.location.href = 'cart.html';
    }
});

// Закриття модального вікна
modalContent.querySelector('button').addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Додавання обробників до кнопок "У корзину"
function setupAddToCartButtons() {
    document.querySelectorAll('.button-active').forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.closest('.article').querySelector('.article-bottom-caption a').textContent.trim();
            const productPrice = parseFloat(button.closest('.article').querySelector('.price b').textContent);
            addToCart(productName, productPrice);
        });
    });
}

// Завантаження продуктів з JSON
async function fetchProducts() {
    try {
        const response = await fetch('https://vitaliishcherbaniuk.github.io/web.github.io/pr9/products.json');
        const data = await response.json();
        renderProducts(data.products);
        document.title = data.pageTitle; // Встановлення заголовку сторінки
    } catch (error) {
        console.error('Помилка завантаження даних:', error);
    }
}

// Рендеринг продуктів на сторінку
function renderProducts(products) {
    const articleWrapper = document.querySelector('.article-wrapper');
    articleWrapper.innerHTML = ''; // Очищення перед рендерингом нових продуктів

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('article');

        productCard.innerHTML = `
            <div class="article-header"><a href="${product.link}" target="_blank">${product.category}</a></div>
            <div class="image-box"><a href="${product.link}" target="_blank"><img src="${product.image}" alt="${product.name}"></a></div>
            <div class="article-bottom-caption"><a href="${product.link}" target="_blank">${product.name}</a></div>
            <div class="price-box">
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice} грн</span>` : ''}
                <span class="price"><b>${product.price}</b> грн</span>
            </div>
            <div class="button ${product.status === 'Незабаром у продажі' ? 'button-inactive' : 'button-active'}">
                <span class="inner-center">${product.status}</span>
            </div>
        `;

        articleWrapper.appendChild(productCard);
    });

    setupAddToCartButtons(); // Додаємо обробники подій до кнопок
}

// Виконання при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    fetchProducts();
});
