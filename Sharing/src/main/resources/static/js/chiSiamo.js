let bottone_logout = document.getElementById("logout").addEventListener("click", logout);
let bottone_login = document.getElementById("btn").addEventListener("click", loadPage);
let pannello= document.getElementById("pannello").addEventListener("click", controlloPannello);
const user = localStorage.getItem('user');

function logout(){

  localStorage.removeItem("user");

  location.href = "/logout";
  
}

function controlloPannello(){

  if (user == null){

    modal.show();
  }else{
    location.href="pannello-controllo";
  }

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

window.addEventListener(
  'DOMContentLoaded', 
  function(event){

    modal = new bootstrap.Modal(document.getElementById('exampleModal'), {});

    loadPage();
    
})



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
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
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