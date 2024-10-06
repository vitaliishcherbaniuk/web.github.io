// Масив об'єктів товарів
const products = [
    { name: "Laptop", category: "Electronics", price: 1200, inStock: 5 },
    { name: "Phone", category: "Electronics", price: 800, inStock: 0 },
    { name: "Headphones", category: "Accessories", price: 150, inStock: 10 },
    { name: "Keyboard", category: "Accessories", price: 100, inStock: 3 },
    { name: "Mouse", category: "Accessories", price: 50, inStock: 0 },
];

// Функція для отримання доступних товарів (ті, що мають inStock більше 0)
function getAvailableProducts() {
    return products.filter(product => product.inStock > 0);
}

// Функція для пошуку товару за назвою
function findProductByName(name) {
    const product = products.find(product => product.name.toLowerCase() === name.toLowerCase());
    return product ? product : "Товар не знайдено";
}

// Відображення доступних товарів на сторінці
function showAvailableProducts() {
    const availableProductsList = document.getElementById('availableProductsList');
    availableProductsList.innerHTML = ''; // Очистка списку

    const availableProducts = getAvailableProducts();

    if (availableProducts.length === 0) {
        availableProductsList.innerHTML = '<li>Немає доступних товарів</li>';
    } else {
        availableProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - ${product.category} - $${product.price} (In stock: ${product.inStock})`;
            availableProductsList.appendChild(listItem);
        });
    }
}

// Пошук товару за назвою
function searchProduct() {
    const productName = document.getElementById('productName').value;
    const productResult = document.getElementById('productResult');
    const result = findProductByName(productName);

    if (typeof result === 'string') {
        productResult.textContent = result; // "Товар не знайдено"
    } else {
        productResult.textContent = `Found: ${result.name} - ${result.category} - $${result.price} (In stock: ${result.inStock})`;
    }
}
