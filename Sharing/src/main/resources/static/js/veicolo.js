let render_veicoli = null;
const URL = "http://localhost:8080/api/immagine/allImmagini"
const user = localStorage.getItem('user');
  "use strict";


  
  function listaVeicoli(event){
  
      fetch(URL)
          .then(function(response) {
          return response.json();
        })
          .then(function(json) {
        
              console.log(json);
      
              let rows = "";      
              rows = render_veicoli(json);
                  document.getElementById("bodyDivImmagini").innerHTML = rows;
          })
          .catch(function(err) { 
                  alert(err);
                  console.log('Failed to fetch page: ', err);
          });	
  
  }
  
  window.addEventListener(
    'DOMContentLoaded', 
    function(event){
  
      render_veicoli = Handlebars.compile( document.getElementById("template-veicoli").innerHTML );
  
          listaVeicoli();
      
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
