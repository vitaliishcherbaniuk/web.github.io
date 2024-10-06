// Масив об'єктів студентів
const students = [
    { name: "John", age: 21, grade: 85, group: "A" },
    { name: "Jane", age: 22, grade: 90, group: "B" },
    { name: "Bob", age: 20, grade: 70, group: "A" },
    { name: "Alice", age: 23, grade: 95, group: "B" },
    { name: "Mike", age: 21, grade: 80, group: "C" },
    { name: "Tom", age: 22, grade: 75, group: "C" },
];

// Функція для групування студентів за групами
function groupBy(students) {
    return students.reduce((grouped, student) => {
        if (!grouped[student.group]) {
            grouped[student.group] = [];
        }
        grouped[student.group].push(student);
        return grouped;
    }, {});
}

// Функція для сортування студентів за оцінками в порядку спадання
function sortStudentsByGrade(students) {
    return [...students].sort((a, b) => b.grade - a.grade);
}

// Відображення студентів, згрупованих за групами
function showGroupedStudents() {
    const groupedStudentsDiv = document.getElementById('groupedStudents');
    groupedStudentsDiv.innerHTML = ''; // Очистка

    const groupedStudents = groupBy(students);

    for (const group in groupedStudents) {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('group');
        groupDiv.innerHTML = `<h3>Група ${group}</h3>`;
        
        const studentList = document.createElement('ul');
        groupedStudents[group].forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = `${student.name} - Age: ${student.age} - Grade: ${student.grade}`;
            studentList.appendChild(listItem);
        });

        groupDiv.appendChild(studentList);
        groupedStudentsDiv.appendChild(groupDiv);
    }
}

// Відображення студентів, відсортованих за оцінками
function showSortedStudents() {
    const sortedStudentsList = document.getElementById('sortedStudentsList');
    sortedStudentsList.innerHTML = ''; // Очистка

    const sortedStudents = sortStudentsByGrade(students);

    sortedStudents.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} - Age: ${student.age} - Grade: ${student.grade}`;
        sortedStudentsList.appendChild(listItem);
    });
}
