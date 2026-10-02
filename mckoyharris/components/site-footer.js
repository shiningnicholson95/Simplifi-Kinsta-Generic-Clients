/* ================================================
   Component: site-footer
   Full four-column footer with services, service
   areas, contact info, payment link, and legal.

   WordPress equivalent: footer.php
   ================================================ */

window.McKoyComponents = window.McKoyComponents || {};

window.McKoyComponents['site-footer'] = function () {

  var starSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  var stars = starSVG + starSVG + starSVG + starSVG + starSVG;

  var year = new Date().getFullYear();

  return '\
<footer class="site-footer" role="contentinfo">\
\
  <div class="container footer-main">\
\
    <!-- Col 1: Brand -->\
    <div class="footer-brand">\
      <div class="footer-brand__logo">\
        <a href="/mckoyharris/" class="site-logo site-logo--banner" aria-label="McKoy Harris Valuation — Home">\
          <img src="/mckoyharris/images/logo-mckoy-harris-white-horizontal-tagline.png" alt="McKoy Harris Valuation — Trusted Source. Detailed Analysis." width="1325" height="297">\
        </a>\
      </div>\
      <p class="footer-brand__tagline">Certified Residential Appraisals for Greater Philadelphia &amp; Southeastern Pennsylvania.</p>\
\
      <div class="footer-rating" aria-label="5.0 stars on Google">\
        <div class="footer-rating__stars" aria-hidden="true">' + stars + '</div>\
        5.0 on Google Reviews\
      </div>\
\
      <a href="/mckoyharris/payment/" class="footer-payment-link" aria-label="Make a payment through our secure portal">\
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>\
        Make a Payment (CPACharge)\
      </a>\
    </div>\
\
    <!-- Col 2: Services -->\
    <div class="footer-col">\
      <p class="footer-col__label">Services</p>\
      <nav class="footer-links" aria-label="Footer services">\
        <a href="/mckoyharris/residential-appraisal/">Residential Appraisal</a>\
        <a href="/mckoyharris/pre-listing-appraisal/">Pre-Listing</a>\
        <a href="/mckoyharris/pmi-removal-appraisal/">PMI Removal</a>\
        <a href="/mckoyharris/tax-appeal-appraisal/">Tax Assessment Appeal</a>\
        <a href="/mckoyharris/appraisal-review/">Appraisal Review</a>\
        <a href="/mckoyharris/divorce-appraisal/">Divorce Appraisals</a>\
        <a href="/mckoyharris/estate-probate-appraisal/">Estate &amp; Probate</a>\
        <a href="/mckoyharris/date-of-death-appraisal/">Date of Death</a>\
        <a href="/mckoyharris/bankruptcy-appraisal/">Bankruptcy</a>\
        <a href="/mckoyharris/foreclosure-appraisal/">Foreclosure &amp; REO</a>\
        <a href="/mckoyharris/pricing/" style="color:var(--accent-light);font-weight:600;margin-top:0.5rem">View Pricing →</a>\
      </nav>\
    </div>\
\
    <!-- Col 3: Service Areas -->\
    <div class="footer-col">\
      <p class="footer-col__label">Service Areas</p>\
      <nav class="footer-links" aria-label="Footer service areas">\
        <a href="/mckoyharris/#service-areas">Chester County, PA</a>\
        <a href="/mckoyharris/#service-areas">Delaware County, PA</a>\
        <a href="/mckoyharris/#service-areas">Philadelphia, PA</a>\
        <a href="/mckoyharris/#service-areas">Montgomery County, PA</a>\
        <a href="/mckoyharris/#service-areas">West Chester</a>\
        <a href="/mckoyharris/#service-areas">Media</a>\
        <a href="/mckoyharris/#service-areas">Wayne</a>\
        <a href="/mckoyharris/#service-areas">Downingtown</a>\
        <a href="/mckoyharris/#service-areas">Upper Darby</a>\
        <a href="/mckoyharris/#service-areas">Norristown</a>\
        <a href="/mckoyharris/#service-areas" style="color:var(--accent-light);font-weight:600;margin-top:0.5rem">View All Areas →</a>\
      </nav>\
    </div>\
\
    <!-- Col 4: Contact -->\
    <div class="footer-col">\
      <p class="footer-col__label">Contact</p>\
      <ul class="footer-contact-list" aria-label="Contact information">\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.46a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>\
          <a href="tel:+16108710318">(610) 871-0318</a>\
        </li>\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\
          <a href="mailto:info@mckoyharris.com">info@mckoyharris.com</a>\
        </li>\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>\
          <span>P.O. Box 566<br>West Chester, PA 19381</span>\
        </li>\
        <li class="footer-contact-item">\
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>\
          <span>Mon–Fri, 8am–7pm</span>\
        </li>\
      </ul>\
      <a href="/mckoyharris/request-appraisal/" class="btn btn--accent btn--sm btn--full" style="margin-top:1.5rem">Request an Appraisal</a>\
      <a href="/mckoyharris/payment/" class="btn btn--ghost btn--sm btn--full" style="margin-top:0.625rem;border-color:rgba(255,255,255,0.2)">Make a Payment</a>\
    </div>\
\
  </div><!-- /footer-main -->\
\
  <!-- Bottom bar -->\
  <div class="footer-bottom">\
    <div class="container" style="display:flex;flex-direction:column;gap:0.75rem;align-items:center;text-align:center;width:100%">\
      <p class="footer-bottom__copy">\
        &copy; ' + year + ' McKoy Harris Ventures LLC dba McKoy Harris Valuation. All rights reserved.\
        &nbsp;&middot;&nbsp; PA Certified Residential Appraiser License #RL140441\
        &nbsp;&middot;&nbsp; USPAP Compliant\
      </p>\
      <nav class="footer-bottom__links" aria-label="Legal navigation">\
        <a href="/mckoyharris/privacy-policy/">Privacy Policy</a>\
        <a href="/mckoyharris/terms-of-service/">Terms of Service</a>\
        <a href="/mckoyharris/sitemap.xml">Sitemap</a>\
        <a href="/mckoyharris/#faq">FAQs</a>\
        <a href="/mckoyharris/request-appraisal/">Contact</a>\
      </nav>\
    </div>\
  </div>\
\
</footer>';
};
