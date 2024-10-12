let imagesArray = [
    {
        path: 'images/tree1.jpg',
        title: '',
        description: 'Олександрівський дуб'
    },
    {
        path: 'images/tree2.jpg',
        title: '',
        description: 'Акація'
    },
    {
        path: 'images/tree3.jpg',
        title: '',
        description: 'Березовий ліс'
    }
];

function initPhotoRotator(rotatorId, imagesArray) {
    let currentIndex = 0;
    const rotatorDiv = document.getElementById(rotatorId);

    const photoNumber = document.createElement('div');
    photoNumber.classList.add('photo-number');
    rotatorDiv.appendChild(photoNumber);

    const imageElement = document.createElement('img');
    rotatorDiv.appendChild(imageElement);

    const photoInfo = document.createElement('div');
    photoInfo.classList.add('photo-info');
    rotatorDiv.appendChild(photoInfo);

    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    photoInfo.appendChild(titleElement);

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    photoInfo.appendChild(descriptionElement);

    const navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');
    rotatorDiv.appendChild(navLinks);

    const prevLink = document.createElement('a');
    prevLink.href = "#";
    prevLink.innerText = "Назад";
    prevLink.onclick = function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updatePhoto();
        }
    };
    navLinks.appendChild(prevLink);

    const nextLink = document.createElement('a');
    nextLink.href = "#";
    nextLink.innerText = "Вперед";
    nextLink.onclick = function(event) {
        event.preventDefault();
        if (currentIndex < imagesArray.length - 1) {
            currentIndex++;
            updatePhoto();
        }
    };
    navLinks.appendChild(nextLink);

    function updatePhoto() {
        const currentImage = imagesArray[currentIndex];
        photoNumber.innerText = `Фотографія ${currentIndex + 1} з ${imagesArray.length}`;
        imageElement.src = currentImage.path;
        titleElement.innerText = currentImage.title;
        descriptionElement.innerText = currentImage.description;

        prevLink.classList.toggle('hidden', currentIndex === 0);
        nextLink.classList.toggle('hidden', currentIndex === imagesArray.length - 1);
    }

    updatePhoto();  // Ініціалізація першого зображення
}

// Виклик функції для ініціалізації ротатора
initPhotoRotator('rotator', imagesArray);
