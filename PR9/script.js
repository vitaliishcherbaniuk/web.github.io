let cart = [];
const cartIcon = document.getElementById('cart-icon');
const cartItemsCount = document.getElementById('cart-items-count');
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const productContainer = document.querySelector('.article-wrapper');

// Завантаження даних із JSON
fetch('https://vitaliishcherbaniuk.github.io/web.github.io/PR9/products.json') // Замість "your-username" та "your-repository" вкажіть ваші дані
    .then(response => response.json())
    .then(data => {
        document.title = data.pageTitle; // Оновлення заголовка сторінки
        renderProducts(data.products);  // Динамічне створення карток товарів
    })
    .catch(error => console.error('Помилка завантаження даних:', error));

function renderProducts(products) {
    productContainer.innerHTML = ''; // Очищуємо контейнер
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('article', product.status === 'soon' ? 'new-article' : 'bestseller-article');
        productCard.innerHTML = `
            <div class="article-header"><a href="#" target="_blank" class="inner-center">Телевізори</a></div>
            <div class="image-box"><img class="inner-center" src="${product.image}" alt="${product.name}"></div>
            <div class="article-bottom-caption"><a href="#" target="_blank">${product.name}</a></div>
            <div class="price-box"><span class="price"><b>${product.price}</b> грн</span></div>
            <div class="button ${product.status === 'soon' ? 'button-inactive' : 'button-active'}">
                <span class="inner-center">${product.status === 'soon' ? 'Незабаром у продажі' : 'У корзину'}</span>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Додаємо обробники подій для кнопок "У корзину"
    document.querySelectorAll('.button-active').forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.closest('.article').querySelector('.article-bottom-caption a').textContent.trim();
            const productPrice = parseFloat(button.closest('.article').querySelector('.price b').textContent);
            addToCart(productName, productPrice);
        });
    });
}

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

function updateCartCount() {
    cartItemsCount.textContent = cart.length;
}

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

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

cartIcon.addEventListener('click', () => {
    if (cart.length === 0) {
        modal.classList.remove('hidden');
        modalContent.querySelector('p').textContent = 'Корзина пуста';
    } else {
        window.location.href = 'cart.html';
    }
});

modalContent.querySelector('button').addEventListener('click', () => {
    modal.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', loadCart);
