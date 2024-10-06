// Масив об'єктів товарів
const products = [
    { productId: 1, name: "Laptop", price: 1500 },
    { productId: 2, name: "Phone", price: 800 },
    { productId: 3, name: "Tablet", price: 600 },
    { productId: 4, name: "Monitor", price: 300 },
];

// Масив об'єктів покупок
const purchases = [
    { purchaseId: 1, productId: 1, quantity: 2 },
    { purchaseId: 2, productId: 2, quantity: 3 },
    { purchaseId: 3, productId: 1, quantity: 1 },
    { purchaseId: 4, productId: 3, quantity: 5 },
    { purchaseId: 5, productId: 4, quantity: 4 },
];

// Функція для об'єднання даних з масивів products та purchases
function getTotalSales(products, purchases) {
    return purchases.reduce((sales, purchase) => {
        // Знаходимо товар за productId
        const product = products.find(p => p.productId === purchase.productId);
        // Обчислюємо дохід від продажу цього товару
        const revenue = product.price * purchase.quantity;

        // Якщо товар вже є в об'єкті sales, додаємо до нього дохід
        if (sales[product.name]) {
            sales[product.name] += revenue;
        } else {
            sales[product.name] = revenue;
        }

        return sales;
    }, {});
}

// Відображення загальної суми доходу від продажу на сторінці
function showTotalSales() {
    const totalSalesList = document.getElementById('totalSalesList');
    totalSalesList.innerHTML = ''; // Очистка списку

    const totalSales = getTotalSales(products, purchases);

    // Виведення результатів на екран
    for (const [productName, totalRevenue] of Object.entries(totalSales)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${productName}: $${totalRevenue.toFixed(2)}`;
        totalSalesList.appendChild(listItem);
    }
}
