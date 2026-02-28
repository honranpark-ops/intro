(function () {
  'use strict';

  var sidebar = document.querySelector('.sidebar');
  var menuToggle = document.getElementById('menuToggle');
  var main = document.getElementById('main');
  var navLinks = document.querySelectorAll('.side-nav a');

  // ----- Mobile: open/close sidebar -----
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-label', sidebar.classList.contains('open') ? '메뉴 닫기' : '메뉴 열기');
      menuToggle.textContent = sidebar.classList.contains('open') ? '✕' : '≡';
    });

    // Close sidebar when clicking a nav link (mobile)
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.textContent = '≡';
        }
      });
    });

    // Optional: close on main content tap (mobile)
    if (main) {
      main.addEventListener('click', function () {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.textContent = '≡';
        }
      });
    }
  }

  // ----- Active nav link based on scroll -----
  var sections = document.querySelectorAll('.section, .hero');

  function setActiveLink() {
    var scrollY = window.scrollY;
    var innerHeightHalf = window.innerHeight * 0.4;

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      if (!id) return;
      var top = section.offsetTop;
      var height = section.offsetHeight;
      if (scrollY >= top - innerHeightHalf && scrollY < top + height - innerHeightHalf) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(setActiveLink);
  }, { passive: true });
  setActiveLink();

  // ----- Smooth scroll for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
