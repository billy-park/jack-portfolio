(function($) {
  "use strict"; // Start of use strict

  var darkMode = 0;

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if (($("#mainNav").offset().top > 100) && darkMode == 0) {
      $("#mainNav").addClass("navbar-shrink");
      $("#mainNav").removeClass("navbar-shrink-dark"); 
    } else if (($("#mainNav").offset().top > 100)  && darkMode == 1 ){
      $("#mainNav").addClass("navbar-shrink-dark");
      $("#mainNav").removeClass("navbar-shrink");  
    }
    else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav").removeClass("navbar-shrink-dark");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  /* 
  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  }); 
  */

  // Carousel item matches description
  var carouselDescs = document.getElementsByClassName("carousel-description");
  var carouselTitles = document.getElementsByClassName("carousel-title");
  $("#carousel-portfolio").on('slide.bs.carousel', function (event){
    switch(event.to) {
      case 0:
        carouselDescs[0].classList.remove('hidden');
        carouselDescs[1].classList.add('hidden');
        carouselDescs[2].classList.add('hidden');
        carouselTitles[0].classList.remove('hidden');
        carouselTitles[1].classList.add('hidden');
        carouselTitles[2].classList.add('hidden');
        break;
      case 1:
        carouselDescs[0].classList.add('hidden');
        carouselDescs[1].classList.remove('hidden');
        carouselDescs[2].classList.add('hidden');
        carouselTitles[0].classList.add('hidden');
        carouselTitles[1].classList.remove('hidden');
        carouselTitles[2].classList.add('hidden');
        break;
      case 2:
        carouselDescs[0].classList.add('hidden');
        carouselDescs[1].classList.add('hidden');
        carouselDescs[2].classList.remove('hidden');
        carouselTitles[0].classList.add('hidden');
        carouselTitles[1].classList.add('hidden');
        carouselTitles[2].classList.remove('hidden');
        break;
    } 
});


var redElements = document.querySelectorAll('.red');
var whiteElements = document.querySelectorAll('.white');
var mutedText = document.querySelectorAll('.text-muted');
var darkMutedText = document.querySelectorAll('.text-change');
var header = document.querySelector('.masthead');

var enableDarkMode = function() {
  redElements.forEach(element => {
    element.classList.add('dark-mode');
  });
  whiteElements.forEach(element => {
    element.classList.add('dark-mode-lighter');
  });
  mutedText.forEach(element => {
    element.classList.remove('text-muted');
    element.classList.add('dark-mode-muted');
  })
  header.classList.add('dark-mode-header');
  darkMode = 1;
}

var disableDarkMode = function() {
  redElements.forEach(element => {
    element.classList.remove('dark-mode');
  });
  whiteElements.forEach(element => {
    element.classList.remove('dark-mode-lighter');
  });
  darkMutedText.forEach(element => {
    element.classList.add('text-muted');
    element.classList.remove('dark-mode-muted');
  })
  header.classList.remove('dark-mode-header');
  darkMode = 0;
}
var lightModeSun = document.getElementById("sun");
var darkModeMoon = document.getElementById("moon");
lightModeSun.addEventListener("click", function() {
  lightModeSun.classList.add('hidden');
  darkModeMoon.classList.remove('hidden');
  disableDarkMode();
});

darkModeMoon.addEventListener("click", function() {
  lightModeSun.classList.remove('hidden');
  darkModeMoon.classList.add('hidden');
  enableDarkMode();
});

})(jQuery); // End of use strict