/* ================================================
   Component: mobile-cta-bar
   Sticky bottom CTA bar visible on mobile only.
   Appears when the hero section scrolls out of view.

   WordPress equivalent: template-parts/mobile-cta-bar.php
   ================================================ */

window.McKoyComponents = window.McKoyComponents || {};

window.McKoyComponents['mobile-cta-bar'] = function () {
  return '\
<div class="mobile-cta-bar" id="mobile-cta-bar" aria-hidden="true">\
  <a href="tel:+16108710318" class="mobile-cta-bar__phone" aria-label="Call (610) 871-0318">\
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.46a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>\
    </svg>\
    (610) 871-0318\
  </a>\
  <a href="/mckoyharris/request-appraisal/" class="btn btn--accent btn--sm">Request Appraisal</a>\
</div>';
};
