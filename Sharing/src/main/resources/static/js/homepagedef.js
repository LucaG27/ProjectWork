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

$(document).ready(function() {
    var o = 0;
    $(window).scroll(function() {
        o = $(window).scrollTop(), $(".counter").html(o),
        o >= 100 ? $(".navbar").addClass("scrolled-nav") : o < 100 && $(".navbar").removeClass("scrolled-nav")
    })
  });

  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
  