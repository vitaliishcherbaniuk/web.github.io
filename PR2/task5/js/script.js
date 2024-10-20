// Масив об'єктів замовлень
const orders = [
    { orderId: 1, customer: { name: "Іван Іванов", email: "ivan@example.com" }, items: ["Ноутбук", "Миша"], total: 1500 },
    { orderId: 2, customer: { name: "Олена Петренко", email: "olena@example.com" }, items: ["Телефон"], total: 800 },
    { orderId: 3, customer: { name: "Олександр Чернов", email: "oleksander@example.com" }, items: ["Клавіатура", "Монітор"], total: 400 },
    { orderId: 4, customer: { name: "Аліса Браун", email: "alisa@example.com" }, items: ["Планшет"], total: 600 },
    { orderId: 5, customer: { name: "Дмитро Іванків", email: "dmytro@example.com" }, items: ["Навушники"], total: 100 },
];

// Функція для отримання загальної суми, витраченої клієнтом
function getTotalSpentByCustomer(orders, customerName) {
    return orders
        .filter(order => order.customer.name.toLowerCase() === customerName.toLowerCase())
        .reduce((total, order) => total + order.total, 0);
}

// Відображення загальної суми, витраченої клієнтом
function showTotalSpent() {
    const customerName = document.getElementById('customerName').value;
    const totalSpentElement = document.getElementById('totalSpent');
    
    const totalSpent = getTotalSpentByCustomer(orders, customerName);
    
    if (totalSpent > 0) {
        totalSpentElement.textContent = `Всього витрачено ${customerName}: $${totalSpent}`;
    } else {
        totalSpentElement.textContent = `Немає замовлень для ${customerName}`;
    }
}
