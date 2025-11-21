/* script.js - Minimal interactions for the theme */
document.addEventListener('DOMContentLoaded', function () {

  // ----------------------------------------------
  // CONTACT FORM
  // ----------------------------------------------
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! Your message has been received. We will contact you soon.');
      form.reset();
    });
  }

  // ----------------------------------------------
  // MOBILE MENU TOGGLE (HAMBURGER)
  // ----------------------------------------------
 // Menu toggle for small screens (updated)
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');   // mobile menu opens/closes properly
  });
}


  // ----------------------------------------------
  // MOBILE DROPDOWN TOGGLE
  // ----------------------------------------------
  const dropdownButtons = document.querySelectorAll('.dropdown .dropbtn');

  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {

      // Only apply mobile behavior when screen is small
      if (window.innerWidth <= 768) {
        e.preventDefault(); // prevent navigation
        const parent = this.parentElement;
        parent.classList.toggle('open'); // open/close dropdown
      }
    });
  });

  // ----------------------------------------------
  // SLIDE HOVER PAUSE
  // ----------------------------------------------
  const slides = document.querySelector('.slides');
  if (slides) {
    slides.addEventListener('mouseenter', () =>
      slides.style.animationPlayState = 'paused'
    );
    slides.addEventListener('mouseleave', () =>
      slides.style.animationPlayState = 'running'
    );
  }
});

    // Disable right-click on entire page
    document.addEventListener("contextmenu", event => event.preventDefault());

    // Disable dragging of all images
    document.querySelectorAll("img").forEach(img => {
      img.setAttribute("draggable", "false");
      img.style.userSelect = "none";
      img.style.pointerEvents = "none"; // prevents selecting or dragging the image
    });
