/* script.js - Minimal interactions for the theme */
document.addEventListener('DOMContentLoaded', function () {
  // Simple contact form behavior
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! Your message has been received. We will contact you soon.');
      form.reset();
    });
  }

  // Menu toggle for small screens
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Optional: pause slides on hover
  const slides = document.querySelector('.slides');
  if (slides) {
    slides.addEventListener('mouseenter', () => slides.style.animationPlayState = 'paused');
    slides.addEventListener('mouseleave', () => slides.style.animationPlayState = 'running');
  }
});
