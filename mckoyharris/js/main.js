/* ================================================
   McKoy Harris Valuation — main.js
   Runs after component-loader.js has mounted all
   components into the DOM.
   ================================================ */

(function () {
  'use strict';

  /* ─── Sticky Header ──────────────────────────── */
  function initStickyHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Desktop Dropdown Navigation ───────────── */
  function initDropdowns() {
    var dropdowns = document.querySelectorAll('[data-dropdown]');
    if (!dropdowns.length) return;

    function closeAll() {
      dropdowns.forEach(function (d) {
        d.setAttribute('aria-expanded', 'false');
      });
    }

    dropdowns.forEach(function (dropdown) {
      var trigger = dropdown.querySelector('.dropdown-trigger');
      if (!trigger) return;

      // Toggle on trigger click
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = dropdown.getAttribute('aria-expanded') === 'true';
        closeAll();
        if (!isOpen) dropdown.setAttribute('aria-expanded', 'true');
      });

      // Keyboard: open on Enter/Space, close on Escape
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
        if (e.key === 'Escape') {
          closeAll();
          trigger.focus();
        }
      });

      // Escape from within the panel
      var panel = dropdown.querySelector('.dropdown-panel');
      if (panel) {
        panel.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
            closeAll();
            trigger.focus();
          }
        });
      }
    });

    // Close when clicking outside any dropdown
    document.addEventListener('click', function () { closeAll(); });

    // Keep open when clicking inside a panel
    document.querySelectorAll('.dropdown-panel').forEach(function (panel) {
      panel.addEventListener('click', function (e) { e.stopPropagation(); });
    });
  }

  /* ─── Mobile Navigation Drawer ───────────────── */
  function initMobileNav() {
    var navToggle  = document.getElementById('nav-toggle');
    var mobileNav  = document.getElementById('mobile-nav');
    var navOverlay = document.getElementById('nav-overlay');
    var navClose   = document.getElementById('nav-close');
    if (!navToggle || !mobileNav) return;

    function openNav() {
      mobileNav.classList.add('open');
      if (navOverlay) navOverlay.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      mobileNav.setAttribute('aria-hidden', 'false');
      if (navOverlay) navOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (navClose) navClose.focus();
    }

    function closeNav() {
      mobileNav.classList.remove('open');
      if (navOverlay) navOverlay.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      if (navOverlay) navOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      navToggle.focus();
    }

    navToggle.addEventListener('click', openNav);
    if (navClose)   navClose.addEventListener('click', closeNav);
    if (navOverlay) navOverlay.addEventListener('click', closeNav);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
    });

    // Close on any internal link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* ─── Mobile Nav Accordion ───────────────────── */
  function initMobileAccordion() {
    var triggers = document.querySelectorAll('.mobile-accordion__trigger');
    triggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item   = btn.closest('.mobile-accordion');
        var isOpen = item.classList.contains('open');
        // Close all accordions first
        document.querySelectorAll('.mobile-accordion.open').forEach(function (a) {
          a.classList.remove('open');
          a.querySelector('.mobile-accordion__trigger').setAttribute('aria-expanded', 'false');
        });
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ─── FAQ Accordion ──────────────────────────── */
  function initFaq() {
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      var btn    = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (!btn || !answer) return;

      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function (other) {
          if (other.classList.contains('open')) {
            other.classList.remove('open');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            other.querySelector('.faq-answer').setAttribute('hidden', '');
          }
        });
        // Toggle current
        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
        if (isOpen) {
          answer.setAttribute('hidden', '');
        } else {
          answer.removeAttribute('hidden');
        }
      });
    });
  }

  /* ─── Scroll Animations ──────────────────────── */
  function initAnimations() {
    var els = document.querySelectorAll('[data-animate]');
    if (!els.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      els.forEach(function (el) { observer.observe(el); });
    } else {
      // Fallback: show all immediately
      els.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  /* ─── Mobile CTA Bar ─────────────────────────── */
  function initMobileCta() {
    var bar  = document.getElementById('mobile-cta-bar');
    var hero = document.querySelector('.hero');
    if (!bar || !hero || !('IntersectionObserver' in window)) return;

    var obs = new IntersectionObserver(function (entries) {
      var show = !entries[0].isIntersecting;
      bar.classList.toggle('visible', show);
      bar.setAttribute('aria-hidden', String(!show));
    }, { threshold: 0 });

    obs.observe(hero);
  }

  /* ─── Active Nav Link ────────────────────────── */
  function initActiveNav() {
    function normalize(path) {
      return path.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
    }
    var currentPath = normalize(window.location.pathname);
    document.querySelectorAll('.primary-nav .nav-link, .primary-nav a').forEach(function (link) {
      var url;
      try {
        url = new URL(link.href);
      } catch (e) { return; }
      if (url.hash) return; // in-page section links are not "current page"
      if (normalize(url.pathname) === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ─── Smooth Scroll ──────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ─── Bootstrap ──────────────────────────────── */
  // All component HTML is already in the DOM when this runs (deferred, after component-loader.js)
  initStickyHeader();
  initDropdowns();
  initMobileNav();
  initMobileAccordion();
  initFaq();
  initAnimations();
  initMobileCta();
  initActiveNav();
  initSmoothScroll();

})();
