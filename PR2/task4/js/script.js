// Масив об'єктів книг
const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, rating: 4.5, isRead: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, rating: 4.9, isRead: false },
    { title: "1984", author: "George Orwell", year: 1949, rating: 4.8, isRead: true },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, rating: 4.6, isRead: false },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, rating: 4.2, isRead: false },
];

// Функція для отримання непрочитаних книг
function getUnreadBooks() {
    return books.reduce((unreadBooks, book) => {
        if (!book.isRead) unreadBooks.push(book.title);
        return unreadBooks;
    }, []);
}

// Функція для отримання книг певного автора, відсортованих за роком видання
function getBooksByAuthor(authorName) {
    return books
        .filter(book => book.author.toLowerCase() === authorName.toLowerCase())
        .sort((a, b) => a.year - b.year);
}

// Функція для отримання книг з рейтингом вище 4, відсортованих за рейтингом
function getTopRatedBooks() {
    return books
        .filter(book => book.rating > 4)
        .sort((a, b) => b.rating - a.rating);
}

// Відображення непрочитаних книг на сторінці
function showUnreadBooks() {
    const unreadBooksList = document.getElementById('unreadBooksList');
    unreadBooksList.innerHTML = ''; // Очистка списку

    const unreadBooks = getUnreadBooks();

    if (unreadBooks.length === 0) {
        unreadBooksList.innerHTML = '<li>All books are read</li>';
    } else {
        unreadBooks.forEach(bookTitle => {
            const listItem = document.createElement('li');
            listItem.textContent = bookTitle;
            unreadBooksList.appendChild(listItem);
        });
    }
}

// Відображення книг певного автора на сторінці
function showBooksByAuthor() {
    const authorName = document.getElementById('authorName').value;
    const booksByAuthorList = document.getElementById('booksByAuthorList');
    booksByAuthorList.innerHTML = ''; // Очистка списку

    const booksByAuthor = getBooksByAuthor(authorName);

    if (booksByAuthor.length === 0) {
        booksByAuthorList.innerHTML = '<li>No books found by this author</li>';
    } else {
        booksByAuthor.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} - ${book.year}`;
            booksByAuthorList.appendChild(listItem);
        });
    }
}

// Відображення топових книг на сторінці
function showTopRatedBooks() {
    const topRatedBooksList = document.getElementById('topRatedBooksList');
    topRatedBooksList.innerHTML = ''; // Очистка списку

    const topRatedBooks = getTopRatedBooks();

    if (topRatedBooks.length === 0) {
        topRatedBooksList.innerHTML = '<li>No top rated books found</li>';
    } else {
        topRatedBooks.forEach(book => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} - Rating: ${book.rating}`;
            topRatedBooksList.appendChild(listItem);
        });
    }
}
