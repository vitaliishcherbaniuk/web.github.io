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

    // Додаємо обробник події для кнопки переходу до пункту призначення
    document.getElementById("goToDestination").onclick = goToDestination;
});
