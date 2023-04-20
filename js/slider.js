function loadMap() {

    var map = L.map('map').setView([-23.303794, -51.159618], 40);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }

    map.on('click', onMapClick);
}

function loadHTML(page) {
    if (page == "2.html") {
        fetch(page)
            .then(response => response.text())
            .then(text => document.getElementById('pagina').innerHTML = text)
            .then(text => loadMap());
    } else {
        fetch(page)
            .then(response => response.text())
            .then(text => document.getElementById('pagina').innerHTML = text);
    }

}


current_page = 0;
total_pages = 2;
document.getElementById("paginas").innerHTML = "Página " + current_page + " de " + total_pages;
loadHTML(current_page + ".html")

function lastPage() {
    if (current_page > 0) {
        current_page--;
    }
    loadHTML(current_page + ".html");
    document.getElementById("paginas").innerHTML = "Página " + current_page + " de " + total_pages;
}

function nextPage() {
    if (current_page < total_pages) {
        current_page++;
    }
    loadHTML(current_page + ".html");
    document.getElementById("paginas").innerHTML = "Página " + current_page + " de " + total_pages;
}