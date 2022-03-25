let render_specifiche = null;
let render_veicoli = null;
const URL = "http://localhost:8080/api/immagine/allImmagini"
const URL2 = "http://localhost:8080/api/specifiche/"
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

    
  function listaSpecifiche(event){
  
    fetch(URL2+"id/"+5)
        .then(function(response) {
        return response.json();
      })
        .then(function(json) {
      
            console.log(json);
    
            let rows = "";      
            rows = render_specifiche(json);
                document.getElementById("body_specifiche").innerHTML = rows;
        })
        .catch(function(err) { 
                alert(err);
                console.log('Failed to fetch page: ', err);
        });	

}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


  
  window.addEventListener(
    'DOMContentLoaded', 
    function(event){
  
      render_veicoli = Handlebars.compile( document.getElementById("template-veicoli").innerHTML );
      render_specifiche = Handlebars.compile( document.getElementById("template-specifiche").innerHTML );
  
          listaVeicoli();
          listaSpecifiche();
      
  });

  let map = L.map('map').setView([40.91907 ,14.30608], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18, 
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmFmZmFlbGVkcCIsImEiOiJjbDE2ZGI4M24wMHV6M2NwOXR2Y2plbWQ5In0.N7Rxyu2_1WhiIiZ9Gl6XMw'
}).addTo(map);