let cart = JSON.parse(localStorage.getItem("cart")) || []; // Завантаження корзини з localStorage

function addToCart(productName, productPrice) {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
        <p>Вкажіть кількість:</p>
        <input type="number" id="product-quantity" value="1" min="1">
        <button onclick="confirmAddToCart('${productName}', ${productPrice})">Додати до корзини</button>
    `;
    document.getElementById("modal").style.display = "flex";
}

function confirmAddToCart(productName, productPrice) {
    const quantity = parseInt(document.getElementById("product-quantity").value, 10);
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ name: productName, price: productPrice, quantity });
    }
    updateCartCount();
    saveCart(); // Зберегти корзину в localStorage
    closeModal();
    showModal(`
        <p>Товар додано!</p>
        <button onclick="goToCart()">Перейти у корзину</button>
        <button onclick="closeModal()">Повернутись до покупок</button>
    `);
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function openCart() {
    if (cart.length === 0) {
        showModal("<p>Корзина пуста</p>");
    } else {
        window.location.href = "cart.html";
    }
}

function showModal(content) {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = content;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function goToCart() {
    window.location.href = "cart.html";
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || []; // Завантаження корзини з localStorage
    const tableBody = document.querySelector("#cart-table tbody");
    tableBody.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        const sum = item.price * item.quantity;
        total += sum;
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.price} грн</td>
                <td>${item.quantity}</td>
                <td>${sum} грн</td>
                <td><button onclick="removeFromCart(${index})">Видалити</button></td>
            </tr>
        `;
    });
    document.getElementById("total-amount").textContent = `Разом до оплати: ${total} грн`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    saveCart(); // Зберегти оновлену корзину
    loadCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart)); // Зберегти корзину в localStorage
}

function checkout() {
    alert("Оплата поки недоступна!");
    // Очищення корзини після успішної "оплати"
    cart = [];
    saveCart();
    loadCart();
}

// Оновлення лічильника корзини при завантаженні сторінки
updateCartCount();
