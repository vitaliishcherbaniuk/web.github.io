// Масив об'єктів замовлень
const orders = [
    { orderId: 1, customer: { name: "John Doe", email: "john@example.com" }, items: ["Laptop", "Mouse"], total: 1500 },
    { orderId: 2, customer: { name: "Jane Smith", email: "jane@example.com" }, items: ["Phone"], total: 800 },
    { orderId: 3, customer: { name: "John Doe", email: "john@example.com" }, items: ["Keyboard", "Monitor"], total: 400 },
    { orderId: 4, customer: { name: "Alice Brown", email: "alice@example.com" }, items: ["Tablet"], total: 600 },
    { orderId: 5, customer: { name: "John Doe", email: "john@example.com" }, items: ["Headphones"], total: 100 },
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
