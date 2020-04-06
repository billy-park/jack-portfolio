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
  var carouselLinks = document.getElementsByClassName("carousel-link");
  var carouselImgs = document.getElementsByClassName("carousel-image");

  $("#carousel-portfolio").on('slide.bs.carousel', function (event){
    switch(event.to) {
      case 0:
        carouselLinks[0].classList.add('hidden');
        carouselLinks[1].classList.add('hidden');
        carouselImgs[0].classList.add('hidden');
        carouselImgs[1].classList.add('hidden');
        carouselDescs[0].classList.remove('hidden');
        carouselDescs[1].classList.add('hidden');
        carouselDescs[2].classList.add('hidden');
        carouselTitles[0].classList.remove('hidden');
        carouselTitles[1].classList.add('hidden');
        carouselTitles[2].classList.add('hidden');
        break;
      case 1:
        carouselLinks[0].classList.remove('hidden');
        carouselLinks[1].classList.add('hidden');
        carouselImgs[0].classList.remove('hidden');
        carouselImgs[1].classList.add('hidden');
        carouselDescs[0].classList.add('hidden');
        carouselDescs[1].classList.remove('hidden');
        carouselDescs[2].classList.add('hidden');
        carouselTitles[0].classList.add('hidden');
        carouselTitles[1].classList.remove('hidden');
        carouselTitles[2].classList.add('hidden');
        break;
      case 2:
        carouselLinks[0].classList.add('hidden');
        carouselLinks[1].classList.remove('hidden');
        carouselImgs[0].classList.add('hidden');
        carouselImgs[1].classList.remove('hidden');
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
var mainNav = document.querySelector('#mainNav');
var toggler = document.querySelector('.navbar-toggler-icon');
var email = document.querySelector('#contact-logo');
var contactLink = document.querySelectorAll('.contact-link');

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
  });
  contactLink.forEach(element => {
    element.classList.add('contact-link-dark');
  });
  header.classList.add('dark-mode-header');
  mainNav.classList.add('main-nav-dark');
  toggler.classList.add('navbar-toggler-icon-dark');
  email.classList.add('contact-logo-dark');
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
  });
  contactLink.forEach(element => {
    element.classList.remove('contact-link-dark');
  });
  header.classList.remove('dark-mode-header');
  mainNav.classList.remove('main-nav-dark');
  toggler.classList.remove('navbar-toggler-icon-dark');
  email.classList.remove('contact-logo-dark');
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