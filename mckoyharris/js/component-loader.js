/* ================================================
   McKoy Harris Valuation — component-loader.js
   Mounts registered components into [data-component]
   placeholder elements in the DOM.

   Load order (all deferred, runs in sequence):
     1. components/site-header.js   → registers SiteHeader
     2. components/site-footer.js   → registers SiteFooter
     3. components/mobile-cta-bar.js
     4. components/stats-bar.js
     5. components/cta-band.js
     6. js/component-loader.js      ← this file, mounts all
     7. js/main.js                  ← adds interactivity

   WordPress conversion: replace each component with the
   corresponding get_template_part() call in your theme.
   ================================================ */

(function () {
  'use strict';

  var registry = window.McKoyComponents || {};

  /**
   * Mount all [data-component] elements.
   * Reads data-* attributes and passes them as config
   * to the component function.
   */
  function mountComponents() {
    var placeholders = document.querySelectorAll('[data-component]');

    placeholders.forEach(function (el) {
      var name = el.getAttribute('data-component');
      var factory = registry[name];

      if (typeof factory !== 'function') {
        console.warn('[ComponentLoader] Unknown component: "' + name + '"');
        return;
      }

      // Collect all data-* attributes as config (excluding data-component itself)
      var config = {};
      Array.prototype.forEach.call(el.attributes, function (attr) {
        if (attr.name !== 'data-component') {
          // Strip "data-" prefix for clean keys
          var key = attr.name.replace(/^data-/, '');
          config[key] = attr.value;
        }
      });

      // Render the component to an HTML string
      var html = factory(config);

      // Replace placeholder with rendered HTML nodes
      var temp = document.createElement('div');
      temp.innerHTML = html;

      var parent = el.parentNode;
      while (temp.firstChild) {
        parent.insertBefore(temp.firstChild, el);
      }
      parent.removeChild(el);
    });
  }

  // Run immediately — all component scripts loaded before this (deferred in order)
  mountComponents();

  // Expose for debugging / re-mounting (e.g. after AJAX page loads)
  window.McKoyComponentLoader = { mount: mountComponents };

})();
