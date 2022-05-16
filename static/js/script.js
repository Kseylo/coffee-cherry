const map = L.map('map').setView([53.6900, 88.0700], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    minZoom: 15

}).addTo(map);

L.marker([53.692097, 88.056789]).addTo(map)
    .bindPopup('<p>ТЦ "Район", 1 этаж. <br>Ул. Интернациональная 14.<br> Открыто с 9:00 до 21:00</p>', {
        closeButton: false,
        closeOnClick: false
    })
    .openPopup();

L.marker([53.685972, 88.072945]).addTo(map)
.bindPopup('<p>ТРЦ "Бель-су", 2 этаж.<br>Пр. Строителей 31<br> Открыто с 9:00 до 21:00</p>', {
    closeButton: false,
    closeOnClick: false
})
.openPopup();

L.marker([53.695044, 88.048624]).addTo(map)
.bindPopup('<p>ТЦ "Праздничный", 1 этаж.<br>Пр. Шахтеров 15А.<br> Открыто с 9:00 до 21:00</p>', {
    closeButton: false,
    closeOnClick: false
})
.openPopup();



