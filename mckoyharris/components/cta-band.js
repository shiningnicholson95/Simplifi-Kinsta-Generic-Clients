/* ================================================
   Component: cta-band
   Full-width dark navy CTA section used between
   content sections or at page bottom.

   Usage (all data-* optional — defaults to primary CTA):
     <div data-component="cta-band"></div>

   With overrides:
     <div data-component="cta-band"
          data-overline="Get Started"
          data-title="Ready to Order Your Appraisal?"
          data-body="Submit your request online..."
          data-cta-text="Request an Appraisal"
          data-cta-url="/mckoyharris/request-appraisal/"
          data-sec-text="Call (610) 871-0318"
          data-sec-url="tel:+16108710318"
          data-note="Monday–Friday · 8am–7pm"></div>

   WordPress equivalent: template-parts/cta-band.php
   ================================================ */

window.McKoyComponents = window.McKoyComponents || {};

window.McKoyComponents['cta-band'] = function (config) {
  var overline = (config && config.overline)  || 'Get Started';
  var title    = (config && config.title)     || 'Ready to Order Your Appraisal?';
  var body     = (config && config.body)      || 'Submit your request online and we\'ll be in touch within one business day to confirm details, turnaround time, and next steps.';
  var ctaText  = (config && config['cta-text']) || 'Request an Appraisal';
  var ctaUrl   = (config && config['cta-url'])  || '/mckoyharris/request-appraisal/';
  var secText  = (config && config['sec-text']) || 'Call (610) 871-0318';
  var secUrl   = (config && config['sec-url'])  || 'tel:+16108710318';
  var note     = (config && config.note)       || 'Monday–Friday · 8am–7pm · Reports in PDF, XML &amp; ENV format';

  return '\
<section class="cta-band" aria-labelledby="cta-band-title">\
  <div class="container cta-band__inner">\
    <p class="overline cta-band__overline overline--center" data-animate>' + overline + '</p>\
    <h2 class="cta-band__title" id="cta-band-title" data-animate>' + title + '</h2>\
    <p class="cta-band__body" data-animate>' + body + '</p>\
    <div class="btn-group" style="justify-content:center" data-animate>\
      <a href="' + ctaUrl + '" class="btn btn--accent btn--lg">' + ctaText + '</a>\
      <a href="' + secUrl + '" class="btn btn--ghost btn--lg">' + secText + '</a>\
    </div>\
    <p class="cta-band__note" data-animate>' + note + '</p>\
  </div>\
</section>';
};
