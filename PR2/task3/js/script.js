// Масив об'єктів працівників
const employees = [
    { name: "John", position: "Manager", salary: 5000, years: 10 },
    { name: "Jane", position: "Developer", salary: 4000, years: 7 },
    { name: "Mike", position: "Designer", salary: 3500, years: 5 },
    { name: "Alice", position: "HR", salary: 3000, years: 8 },
    { name: "Tom", position: "Developer", salary: 4500, years: 9 },
];

// Функція для обчислення середньої зарплати всіх працівників
function getAverageSalary(employees) {
    const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    return totalSalary / employees.length;
}

// Функція для знаходження працівника з найбільшим досвідом роботи
function findMostExperiencedEmployee(employees) {
    return employees.reduce((mostExperienced, employee) => 
        employee.years > mostExperienced.years ? employee : mostExperienced
    );
}

// Відображення середньої зарплати на сторінці
function showAverageSalary() {
    const averageSalaryElement = document.getElementById('averageSalary');
    const averageSalary = getAverageSalary(employees);
    averageSalaryElement.textContent = `Середня зарплата: $${averageSalary.toFixed(2)}`;
}

// Відображення працівника з найбільшим досвідом на сторінці
function showMostExperiencedEmployee() {
    const mostExperiencedElement = document.getElementById('mostExperiencedEmployee');
    const mostExperienced = findMostExperiencedEmployee(employees);
    mostExperiencedElement.textContent = `Найдосвідченіший працівник: ${mostExperienced.name}, ${mostExperienced.years} років досвіду, ${mostExperienced.position}`;
}
