let render_specifiche = null;
let render_veicoli = null;
const URL = "http://localhost:8080/api/immagine/allImmagini"
const URL2 = "http://localhost:8080/api/specifiche/"
const URL3 = "http://localhost:8080/api/veicolo/id/"
const user = localStorage.getItem('user');

  "use strict";


  
   async function asyncCall(){
    const veicolo = await loadCoordinate();
     let coo = veicolo.coordinate;
     let coo_split=coo.split(',');
    return coo_split;
  }
  
  async function loadCoordinate() {
  
    let response = await fetch(URL3 + 1);
    let veicolo = await response.json();
    return veicolo;
  }

  
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
          wrap();

      
  });

async function wrap(){
let coo_split = await asyncCall();

let map = L.map('map').setView([coo_split[0],coo_split[1]], 18);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18, 
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicmFmZmFlbGVkcCIsImEiOiJjbDE2ZGI4M24wMHV6M2NwOXR2Y2plbWQ5In0.N7Rxyu2_1WhiIiZ9Gl6XMw'
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {
   // shadowUrl: 'leaf-shadow.png',
    iconSize:     [70, 70],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
  }
});
/*
var greenIcon = new LeafIcon({iconUrl: 'img/veicoli/icon-car.svg'});
var redIcon = new LeafIcon({iconUrl: 'img/veicoli/icon-car.svg'});
*/
var orangeIcon = new LeafIcon({iconUrl: 'img/veicoli/icon-car.svg'});
/*
var mGreen = L.marker([51.5, -0.09], {icon: greenIcon}).bindPopup('I am a green leaf.').addTo(map);
var mRed = L.marker([51.495, -0.083], {icon: redIcon}).bindPopup('I am a red leaf.').addTo(map);
*/

var mOrange = L.marker([coo_split[0],coo_split[1]], {icon: orangeIcon}).bindPopup('I am an orange leaf.').addTo(map);

}