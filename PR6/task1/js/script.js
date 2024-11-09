// Глобальні змінні
let watchId = null;
let ourCoords = {
    latitude: 48.94321,
    longitude: 24.73380
};
let map;
let userMarker;

// Ініціалізація карти
function initMap(latitude, longitude) {
    map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// Відслідковування місцезнаходження у реальному часі
function watchLocation() {
    watchId = navigator.geolocation.watchPosition(
        (position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let timestamp = new Date(position.timestamp).toLocaleTimeString();

            if (!map) {
                initMap(latitude, longitude);
            }

            // Додаємо або оновлюємо маркер з поточними координатами та часом
            if (userMarker) {
                map.removeLayer(userMarker);
            }
            userMarker = L.marker([latitude, longitude]).addTo(map)
                .bindPopup(`You are here: ${latitude}, ${longitude} <br>Time: ${timestamp}`)
                .openPopup();

            map.setView([latitude, longitude], 13);
        },
        displayError
    );
}

// Зупинка відслідковування
function clearWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

// Переходження до пункту призначення
function goToDestination() {
    let destLatitude = parseFloat(document.getElementById("destLatitude").value);
    let destLongitude = parseFloat(document.getElementById("destLongitude").value);

    if (!isNaN(destLatitude) && !isNaN(destLongitude)) {
        map.setView([destLatitude, destLongitude], 13);
        L.marker([destLatitude, destLongitude]).addTo(map)
            .bindPopup(`Destination: ${destLatitude}, ${destLongitude}`)
            .openPopup();
    } else {
        alert("Please enter valid coordinates for the destination.");
    }
}

// Обробка помилок
function displayError(error) {
    console.log("Error in getting location:", error.message);
}

// Ініціалізація після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    getMyLocation();

    // Додаємо обробники подій для кнопок
    document.getElementById("watch").onclick = watchLocation;
    document.getElementById("clearWatch").onclick = clearWatch;
    document.getElementById("goToDestination").onclick = goToDestination;
});

// Функція для ініціалізації початкового місцезнаходження
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    } else {
        alert("Geolocation not supported by your browser.");
    }
}

// Відображення початкового місцезнаходження та відстані до Коледжу
function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let div = document.getElementById("location");
    div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;

    let km = computeDistance(position.coords, ourCoords);
    let distance = document.getElementById("distance");
    distance.innerHTML = `You are ${km.toFixed(2)} km from the College`;

    // Ініціалізуємо карту тільки при початковому визначенні місцезнаходження
    if (!map) {
        initMap(latitude, longitude);
    }
}

// Обчислення відстані між двома координатами
function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.latitude);
    let destLongRads = degreesToRadians(destCoords.longitude);
    let Radius = 6371; // Радіус Землі в км

    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
                    Math.cos(startLatRads) * Math.cos(destLatRads) *
                    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

// Конвертація градусів у радіани
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
