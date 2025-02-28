$(document).ready(function() {
    new WOW().init();
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        dots: false, 
        navText: [
            '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
            '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
        ],
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20 
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
document.head.appendChild(script);

script.onload = () => {
  gsap.to(".brush-stroke", {
    strokeDashoffset: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
  });
};

});
  var typed = new Typed("#typed-text", {
    strings: ["حضورى وعن بعد ...", "أفضل المعلمين لجميع المراحل!"], 
    typeSpeed: 50, 
    backSpeed: 30, 
    backDelay: 1500, 
    startDelay: 500, 
    loop: true 
  });

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); 
  const navLinks = document.querySelectorAll(".nav-link");

  function activateNavLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150; 
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active"); 
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active"); 
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);
  activateNavLink();
});

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function showTestimonial(i) {
        testimonials.forEach(t => t.classList.remove("active"));
        testimonials[i].classList.add("active");
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial(index);
    });

    showTestimonial(index);
});
