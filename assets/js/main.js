/**
* Template Name: MyResume - v4.7.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

// <![CDATA[
var colour = "random"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
var sparkles = 50;



/****************************
 * Tinkerbell Magic Sparkle *
 *(c)2005-11 mf2fm web-design*
 * http://www.mf2fm.com/rv *
 * DON'T EDIT BELOW THIS BOX *
 ****************************/

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
  if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i = 0; i < sparkles; i++) {
      var rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      document.body.appendChild(tiny[i] = rats);
      starv[i] = 0;
      tinyv[i] = 0;
      var rats = createDiv(5, 5);
      rats.style.backgroundColor = "transparent";
      rats.style.visibility = "hidden";
      var rlef = createDiv(1, 5);
      var rdow = createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild(star[i] = rats);
    }

    set_width();
    sparkle();
  }
}

function sparkle() {
  var c;
  if (x != ox || y != oy) {
    ox = x;
    oy = y;
    for (c = 0; c < sparkles; c++) if (!starv[c]) {
      star[c].style.left = (starx[c] = x) + "px";
      star[c].style.top = (stary[c] = y) + "px";
      star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
      star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour == "random") ? newColour() : colour;

      star[c].style.visibility = "visible";
      starv[c] = 50;
      break;
    }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}



function update_star(i) {
  if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3;
    if (stary[i] < shigh + sdown && starx[i] > 0) {
      star[i].style.top = stary[i] + "px";
      starx[i] += (i % 5 - 2) / 5;
      star[i].style.left = starx[i] + "px";
    }
    else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
      return;
    }
  }

  else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i] == 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }

  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    if (tinyy[i] < shigh + sdown && tinyx[i] > 0) {
      tiny[i].style.top = tinyy[i] + "px";
      tinyx[i] += (i % 5 - 2) / 5;
      tiny[i].style.left = tinyx[i] + "px";
    }

    else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
      return;
    }
  }
  else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
  set_scroll();
  y = (e) ? e.pageY : event.y + sdown;
  x = (e) ? e.pageX : event.x + sleft;
}

function set_scroll() {
  if (typeof (self.pageYOffset) == "number") {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  }
  else {
    sdown = 0;
    sleft = 0;
  }
}

window.onresize = set_width;
function set_width() {
  if (typeof (self.innerWidth) == "number") {
    swide = self.innerWidth;
    shigh = self.innerHeight;
  }

  else if (document.documentElement && document.documentElement.clientWidth) {
    swide = document.documentElement.clientWidth;
    shigh = document.documentElement.clientHeight;
  }

  else if (document.body.clientWidth) {
    swide = document.body.clientWidth;
    shigh = document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  return (div);
}

function newColour() {
  var c = new Array();
  c[0] = 255;
  c[1] = Math.floor(Math.random() * 256);
  c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
  c.sort(function () { return (0.5 - Math.random()); });
  return ("rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")");
}

          // ]]>