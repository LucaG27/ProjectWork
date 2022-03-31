let bottone_login = document.getElementById("btn").addEventListener("click", loadPage);
let bottone_logout = document.getElementById("logout").addEventListener("click", logout);
let render_veicoli = null;
let bottone_prenota= null;
let icon = null;
let coordinate = null;
let counter = null;
let pannello= document.getElementById("pannello").addEventListener("click", controlloPannello);
const user = localStorage.getItem('user');
const idv = localStorage.getItem('veicolo');
let modal= null;
let info= null;
const URL3 = "http://localhost:8080/api/veicolo/id/"
const URL4 = "http://localhost:8080/api/prenotazioni/"

var util = {
  mobileMenu() {
    $("#nav").toggleClass("nav-visible");
  },
  windowResize() {
    if ($(window).width() > 800) {
      $("#nav").removeClass("nav-visible");
    }
  },
  scrollEvent() {
    var scrollPosition = $(document).scrollTop();

    $.each(util.scrollMenuIds, function (i) {
      var link = util.scrollMenuIds[i],
        container = $(link).attr("href"),
        containerOffset = $(container).offset().top,
        containerHeight = $(container).outerHeight(),
        containerBottom = containerOffset + containerHeight;

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(link).addClass("active");
      } else {
        $(link).removeClass("active");
      }
    });
  }
};

$(document).ready(function () {
  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
});

// handlebars Helpers
/*
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

*/
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('is_available', function (disponibilita) {
	return (disponibilita == "DISPONIBILE")?"":"card-disable";
})

Handlebars.registerHelper('is_available_button', function (disponibilita) {
	return (disponibilita == "DISPONIBILE")?"":"disabled";
})

function logout(){

  localStorage.removeItem("user");

  location.href = "/logout";
  
}


function loadPage(){

  let userL = JSON.parse(user);

  if(userL == null){
    document.getElementById("pannello").setAttribute("style", "display:none");
    document.getElementById("iconaProfilo").setAttribute("style", "display:none");
    //document.getElementById("pulsanteProfilo").setAttribute("style", "display:none");
    document.getElementById("buttonLogin").setAttribute("style", "display:block");
  }
  if(userL.ruolo == "RUOLO_UTENTE"){
    document.getElementById("pannello").setAttribute("style", "display:none");
    document.getElementById("iconaProfilo").setAttribute("style", "display:inline");
    //document.getElementById("pulsanteProfilo").setAttribute("style", "display:inline");
    document.getElementById("buttonLogin").setAttribute("style", "display:none");
  }else{
    document.getElementById("pannello").setAttribute("style", "display:inline");
    document.getElementById("iconaProfilo").setAttribute("style", "display:inline");
    //document.getElementById("pulsanteProfilo").setAttribute("style", "display:inline");
    document.getElementById("buttonLogin").setAttribute("style", "display:none");
  }
}


function controlloPannello(){

  if (user == null){

    modal.show();
  }else{
    location.href="pannello-controllo";
  }

}


function listaVeicoli(veicoloId){

  /*let originator = event.currentTarget;
  let veicoloId = originator.getAttribute("veicolo-id");*/ 

  fetch("http://localhost:8080/api/veicolo/categoria/"+ veicoloId)
      .then(response => 
       response.json()
    )
      .then(function(json) {
          console.log(json);
          const context = {
            'veicoli': json
          };    
          let rows = render_veicoli(context);
         
          document.getElementById("bodyDivImmagini").innerHTML = rows;

          agganciaEventi();
      
      })
      .catch(function(err) { 
              
              console.log('Failed to fetch page: ', err);
      })
     
}

  async function asyncCall(){
    const veicolo = await loadCoordinate();
     let coo = veicolo;
     console.log(coo)
    return coo;
  }
  
  async function loadCoordinate() {
  
    let response = await fetch("http://localhost:8080/api/veicolo");
    let veicolo = await response.json();
    return veicolo;
  }

  function veicoliDisponibili(event){

    fetch("http://localhost:8080/api/veicolo/disponibili/DISPONIBILE")
    .then(function(response) {
    return response.json();
  })
    .then(function(json) {
        console.log(json); 
  
        for(let li=0; li<json.length; li++){
          counter++
        }
        document.getElementById("contatore").innerHTML += counter;
        
  
    })
    .catch(function(err) { 
            alert(err);
            console.log('Failed to fetch page: ', err);
    })
  
  }

function switchVeicolo(event) {

  localStorage.removeItem('veicolo');
  let originator = event.currentTarget;
  let veicolo = originator.getAttribute("veicolo-id");
  localStorage.setItem('veicolo', veicolo);
  location.href="/veicolo"
}


function mapsVeicolo() {

  localStorage.removeItem('veicolo');
  let prova = document.getElementById("prova");
  let veicolo = prova.getAttribute("veicolo-id");
  localStorage.setItem('veicolo', veicolo);
  location.href="/veicolo"
}

function agganciaEventi(){
bottone_prenota = document.getElementsByClassName("button-prenota");
for (let i = 0; i < bottone_prenota.length; i++) {
  bottone_prenota[i].addEventListener('click', switchVeicolo);
}
}

async function wrap(){

  let coo = await asyncCall();

  console.log(coo);
  
  let map = L.map('map').setView([43.76928, 11.25524], 18);
  
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

  let icon = new LeafIcon({iconUrl: 'img/veicoli/icon/auto.png'})

for (let x of coo){
let allCoo = x.coordinate;
let coo_split=allCoo.split(',');
info = '<center>'+x.descrizione +'<br>'+ x.indirizzo+'<br>'+ '<button type="button" id="prova" onclick="mapsVeicolo()" veicolo-id="'+x.id+'" class="btn btn-primary">Prenota</button>'+'</center>';
switch(x.categoria){
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
L.marker([coo_split[0],coo_split[1]], {icon: icon}).bindPopup(info).addTo(map);
}
agganciaEventi();
}

  
window.addEventListener(
  'DOMContentLoaded', 
  function(event){

    modal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
    render_veicoli = Handlebars.compile( document.getElementById("template-veicoli").innerHTML );
    veicoliDisponibili();
    wrap();
    loadPage();
    listaVeicoli('AUTO');
    
})

/* HOMEDEF JS */

$(document).ready(function() {
  var o = 0;
  $(window).scroll(function() {
      o = $(window).scrollTop(), $(".counter").html(o),
      o >= 100 ? $(".navbar").addClass("scrolled-nav") : o < 100 && $(".navbar").removeClass("scrolled-nav")
  })
});


  const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,
slidesPerView: 1, //valore di default che funziona fuori dai breakpoint (da 0px)
spaceBetween: 10,
breakpoints: {
  // when window width is >= 576
  576: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  // when window width is >= 1200px
  1200: {
    slidesPerView: 3,
    spaceBetween: 20
  }
},
/*autoplay: {
  delay: 2300,
  disableOnInteraction: false,
},*/
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

$(document).ready(function() {
  var o = 0;
  $(window).scroll(function() {
      o = $(window).scrollTop(), $(".counter").html(o),
      o >= 100 ? $(".navbar").addClass("scrolled-nav") : o < 100 && $(".navbar").removeClass("scrolled-nav")
  })
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('password');

//OCCHIO
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
