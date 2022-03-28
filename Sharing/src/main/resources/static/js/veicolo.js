let render_specifiche = null;
let render_veicoli = null;
let veicolo_id = document.getElementById("veicolo_id")
const URL = "http://localhost:8080/api/immagine/allImmagini"
const URL2 = "http://localhost:8080/api/specifiche/"
const URL3 = "http://localhost:8080/api/veicolo/id/"
const URL4 = "http://localhost:8080/api/prenotazioni/"
const user = localStorage.getItem('user');
const idv = localStorage.getItem('veicolo');
let tipo_veicolo = null;
let icon = null;
let bottone_prenota = null;

  "use strict";

  
   async function asyncCall(){
    const veicolo = await loadCoordinate();
     let coo = veicolo.coordinate;
     tipo_veicolo= veicolo.categoria;
     let coo_split=coo.split(',');
    return coo_split;
  }
  
  async function loadCoordinate() {
  
    let response = await fetch(URL3 + idv);
    let veicolo = await response.json();
    return veicolo;
  }

  
  function listaVeicoli(event){
  
      fetch(URL3 + idv)
          .then(function(response) {
          return response.json();
        })
          .then(function(json) {
        
              console.log(json);
      
              let rows = render_veicoli(json);
                  document.getElementById("bodyDivImmagini").innerHTML = rows;
          })
          .catch(function(err) { 
                  alert(err);
                  console.log('Failed to fetch page: ', err);
          });	
  
  }

  function listaSpecifiche(event){
  
    fetch(URL3 + idv)
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

  function createPrenotazione(event){

    let userJson = JSON.parse(user);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

      fetch(URL3 + idv)
          .then(function(response) {
          return response.json();
        })
          .then(function(veicoloPreno) {
        
              console.log(veicoloPreno);

              return fetch(URL4 + "savePrenotazione",{
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },

                          body: JSON.stringify({ 
                            dataInizio: today,
                            dataFine: null,
                            stato: "in corso",
                            utenteId: userJson,
                            veicoloId: veicoloPreno

                          })
              });   
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
      bottone_prenota = document.getElementById("prenota").addEventListener("click", createPrenotazione);
  
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


switch(tipo_veicolo){
  case 'AUTO':
    icon = new LeafIcon({iconUrl: 'img/veicoli/icon/auto.png'})
    break;

  case 'MOTO':
    icon = new LeafIcon({iconUrl: 'img/veicoli/icon/scooter.png'})
    break;
  
  case 'BICICLETTA':
    icon = new LeafIcon({iconUrl: 'img/veicoli/icon/bicicletta.png'})
    break;

  case 'MONOPATTINO':
    icon = new LeafIcon({iconUrl: 'img/veicoli/icon/monopattino.png'})
    break;
}

let mOrange = L.marker([coo_split[0],coo_split[1]], {icon: icon}).bindPopup('I am an orange leaf.').addTo(map);

}