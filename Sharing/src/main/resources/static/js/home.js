/*$(document).ready(function() {
  var o = 0;
  $(window).scroll(function() {
      o = $(window).scrollTop(), $(".counter").html(o),
      o >= 100 ? $(".navbar").addClass("scrolled-nav") : o < 100 && $(".navbar").removeClass("scrolled-nav")
  })
});*/

let bottone_auto  = document.getElementById("btn_auto").addEventListener("click", listaVeicoli);
let bottone_moto  = document.getElementById("btn_moto").addEventListener("click", listaVeicoli);
let bottone_mono  = document.getElementById("btn_mono").addEventListener("click", listaVeicoli);
let bottone_bici  = document.getElementById("btn_bici").addEventListener("click", listaVeicoli);
let render_veicoli = null;
let bottone_prenota= null;
let icon = null;
let coordinate = null;
let counter = null;



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
	return (disponibilita == "DISPONIBILE")?"btn-primary":"btn-outline-primary";
})


function listaVeicoli(event){

  let originator = event.currentTarget;
  let veicoloId = originator.getAttribute("veicolo-id");

  fetch("http://localhost:8080/api/veicolo/categoria/"+ veicoloId)
      .then(function(response) {
      return response.json();
    })
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
              alert(err);
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
//INIZIALIZZO SWIPER CON I RELATIVI PARAMETRI 

  


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
      slidesPerView: 4,
      spaceBetween: 20
    }
  },

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

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };
  

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })


  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

function switchVeicolo(event) {

  let originator = event.currentTarget;
  let veicolo = originator.getAttribute("veicolo-id");
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
L.marker([coo_split[0],coo_split[1]], {icon: icon}).bindPopup('I am an orange leaf.').addTo(map);
}
}
  
window.addEventListener(
  'DOMContentLoaded', 
  function(event){

    render_veicoli = Handlebars.compile( document.getElementById("template-veicoli").innerHTML );
    veicoliDisponibili();
    wrap();
})


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

/*
$(document).ready(function () {
  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
});
*/