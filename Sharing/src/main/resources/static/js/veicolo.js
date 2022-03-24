let render_veicoli = null;

fetch("http://localhost:8080/api/immagine/allImmagini").then(e => e.json()).then(immagine => {

	for (const i of immagine) {
		let opt = document.createElement('option');
		opt.innerHTML = r;
		SELECT_REGIONE.appendChild(opt);
	}

})

      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  

  var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1,
   accessToken: 'your.mapbox.access.token'
}).addTo(map);

window.addEventListener(
	'DOMContentLoaded', 
	function(event){

		render_veicoli = Handlebars.compile( document.getElementById("template-veicoli").innerHTML );
});


