let bottone_auto  = document.getElementById("btn_auto").addEventListener("click", listaVeicoli);
let render_veicoli = null;

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

function listaVeicoli(event){

  fetch("http://localhost:8080/api/veicolo/")
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
        slidesPerView: 3,
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

  
window.addEventListener(
  'DOMContentLoaded', 
  function(event){

    render_veicoli = Handlebars.compile( document.getElementById("template-veicoli").innerHTML );
    
});