/* ================================================
   Component: site-header
   Renders the full site header, desktop dropdown nav,
   and mobile drawer nav.

   WordPress equivalent: header.php +
     template-parts/nav/desktop-nav.php
     template-parts/nav/mobile-nav.php
   ================================================ */

window.McKoyComponents = window.McKoyComponents || {};

window.McKoyComponents['site-header'] = function () {

  /* ── Nav data (single source of truth) ────────── */

  /* Group A: homeowner / seller services */
  var servicesA = [
    { label: 'Residential Appraisal',  url: '/mckoyharris/residential-appraisal/',      icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { label: 'Pre-Listing Appraisal',  url: '/mckoyharris/pre-listing-appraisal/',       icon: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>' },
    { label: 'PMI Removal',            url: '/mckoyharris/pmi-removal-appraisal/',       icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>' },
    { label: 'Tax Appeal',             url: '/mckoyharris/tax-appeal-appraisal/',        icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="17" x2="12" y2="17"/>' },
    { label: 'Appraisal Review',       url: '/mckoyharris/appraisal-review/',            icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' }
  ];

  /* Group B: legal / estate / distressed */
  var servicesB = [
    { label: 'Divorce Appraisal',      url: '/mckoyharris/divorce-appraisal/',           icon: '<line x1="12" y1="3" x2="12" y2="21"/><path d="M5 12l-2 5h4l-2-5z"/><path d="M19 12l-2 5h4l-2-5z"/><line x1="3" y1="12" x2="21" y2="12"/>' },
    { label: 'Estate &amp; Probate',   url: '/mckoyharris/estate-probate-appraisal/',    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>' },
    { label: 'Date of Death',          url: '/mckoyharris/date-of-death-appraisal/',     icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
    { label: 'Bankruptcy Appraisal',   url: '/mckoyharris/bankruptcy-appraisal/',        icon: '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>' },
    { label: 'Foreclosure &amp; REO',  url: '/mckoyharris/foreclosure-appraisal/',       icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="12" y1="9" x2="12.01" y2="9"/>' }
  ];

  /* Flat list used by mobile nav */
  var services = servicesA.concat(servicesB);

  var areas = {
    'Chester County': [
      { label: 'West Chester',   url: '/mckoyharris/#service-areas' },
      { label: 'Downingtown',    url: '/mckoyharris/#service-areas' },
      { label: 'Malvern',        url: '/mckoyharris/#service-areas' },
      { label: 'Exton',          url: '/mckoyharris/#service-areas' },
      { label: 'Phoenixville',   url: '/mckoyharris/#service-areas' },
      { label: 'Coatesville',    url: '/mckoyharris/#service-areas' }
    ],
    'Delaware County': [
      { label: 'Media',          url: '/mckoyharris/#service-areas' },
      { label: 'Upper Darby',    url: '/mckoyharris/#service-areas' },
      { label: 'Havertown',      url: '/mckoyharris/#service-areas' },
      { label: 'Ardmore',        url: '/mckoyharris/#service-areas' },
      { label: 'Lansdowne',      url: '/mckoyharris/#service-areas' }
    ],
    'Philadelphia': [
      { label: 'Philadelphia',        url: '/mckoyharris/#service-areas' },
      { label: 'NE Philadelphia',     url: '/mckoyharris/#service-areas' },
      { label: 'South Philadelphia',  url: '/mckoyharris/#service-areas' },
      { label: 'West Philadelphia',   url: '/mckoyharris/#service-areas' }
    ],
    'Montgomery County': [
      { label: 'Norristown',       url: '/mckoyharris/#service-areas' },
      { label: 'Wayne',            url: '/mckoyharris/#service-areas' },
      { label: 'Conshohocken',     url: '/mckoyharris/#service-areas' },
      { label: 'King of Prussia',  url: '/mckoyharris/#service-areas' }
    ]
  };

  /* ── Build desktop service links ───────────────── */
  function buildServiceCol(groupLabel, items) {
    var links = items.map(function (s) {
      return '<a href="' + s.url + '" class="dropdown-service-link">'
        + '<span class="dropdown-service-icon" aria-hidden="true">'
        + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' + s.icon + '</svg>'
        + '</span>'
        + s.label
        + '</a>';
    }).join('');
    return '<div class="dropdown-service-col">'
      + '<p class="dropdown-service-col__label">' + groupLabel + '</p>'
      + links
      + '</div>';
  }

  var serviceLinksDesktop = buildServiceCol('Homeowner &amp; Seller', servicesA)
    + buildServiceCol('Legal &amp; Specialized', servicesB);

  /* ── Build desktop area columns ─────────────────── */
  var areaColsDesktop = Object.keys(areas).map(function (county) {
    var links = areas[county].map(function (city) {
      return '<a href="' + city.url + '">' + city.label + '</a>';
    }).join('');
    return '<div class="dropdown-area-col">'
      + '<p class="dropdown-area-col__name">' + county + '</p>'
      + '<div class="dropdown-area-col__links">' + links + '</div>'
      + '</div>';
  }).join('');

  /* ── Build mobile service links ─────────────────── */
  var groupHeadStyle = 'font-family:var(--font-ui);font-size:0.625rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent-light);padding:0.625rem 1rem 0.25rem;opacity:0.8';
  var serviceLinksMobile = '<p style="' + groupHeadStyle + '">Homeowner &amp; Seller</p>'
    + servicesA.map(function (s) { return '<a href="' + s.url + '">' + s.label + '</a>'; }).join('')
    + '<p style="' + groupHeadStyle + '">Legal &amp; Specialized</p>'
    + servicesB.map(function (s) { return '<a href="' + s.url + '">' + s.label + '</a>'; }).join('');

  /* ── Build mobile area links ────────────────────── */
  var areaLinksMobile = Object.keys(areas).map(function (county) {
    var links = areas[county].map(function (city) {
      return '<a href="' + city.url + '">' + city.label + '</a>';
    }).join('');
    return '<p style="font-family:var(--font-ui);font-size:0.625rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent-light);padding:0.625rem 1rem 0.25rem;opacity:0.8">'
      + county + '</p>' + links;
  }).join('');

  /* ── Shared chevron SVG ─────────────────────────── */
  var chevronSVG = '<svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';

  return '\
<a href="#main-content" class="skip-link">Skip to main content</a>\
\
<header class="site-header" id="site-header" role="banner">\
  <div class="container header-inner">\
\
    <!-- Logo -->\
    <a href="/mckoyharris/" class="site-logo" aria-label="McKoy Harris Valuation — Home">\
      <img src="/mckoyharris/images/logo-mckoy-harris-navy-horizontal-transparent.png" alt="McKoy Harris Valuation" width="786" height="157">\
    </a>\
\
    <!-- Desktop Primary Navigation -->\
    <nav class="primary-nav" aria-label="Primary navigation">\
      <ul role="list">\
        <li><a href="/mckoyharris/" class="nav-link">Home</a></li>\
\
        <!-- Services Dropdown -->\
        <li class="has-dropdown" aria-expanded="false" data-dropdown>\
          <button class="dropdown-trigger" aria-haspopup="true" aria-controls="dropdown-services">\
            Services ' + chevronSVG + '\
          </button>\
          <div class="dropdown-panel dropdown-panel--services" id="dropdown-services" role="region" aria-label="Services menu">\
            <div class="dropdown-services-cols">\
              ' + serviceLinksDesktop + '\
            </div>\
            <div class="dropdown-footer-row">\
              <a href="/mckoyharris/request-appraisal/" class="dropdown-footer-link">\
                Request an Appraisal\
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>\
              </a>\
            </div>\
          </div>\
        </li>\
\
        <!-- Service Areas Dropdown -->\
        <li class="has-dropdown" aria-expanded="false" data-dropdown>\
          <button class="dropdown-trigger" aria-haspopup="true" aria-controls="dropdown-areas">\
            Service Areas ' + chevronSVG + '\
          </button>\
          <div class="dropdown-panel dropdown-panel--areas" id="dropdown-areas" role="region" aria-label="Service areas menu">\
            <div class="dropdown-areas-grid">\
              ' + areaColsDesktop + '\
            </div>\
            <div class="dropdown-footer-row">\
              <a href="/mckoyharris/#service-areas" class="dropdown-footer-link">\
                View All Service Areas\
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>\
              </a>\
            </div>\
          </div>\
        </li>\
\
        <li><a href="/mckoyharris/pricing/" class="nav-link">Pricing</a></li>\
        <li><a href="/mckoyharris/#about" class="nav-link">About</a></li>\
        <li><a href="/mckoyharris/#reviews" class="nav-link">Reviews</a></li>\
      </ul>\
    </nav>\
\
    <!-- Header Actions -->\
    <div class="header-actions">\
      <a href="tel:+16108710318" class="header-phone" aria-label="Call us at (610) 871-0318">\
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right:4px;vertical-align:middle"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.46a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>\
        (610) 871-0318\
      </a>\
      <a href="/mckoyharris/request-appraisal/" class="btn btn--accent btn--sm">Request an Appraisal</a>\
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation menu">\
        <span></span><span></span><span></span>\
      </button>\
    </div>\
\
  </div>\
</header>\
\
<!-- Mobile overlay -->\
<div class="mobile-nav__overlay" id="nav-overlay" aria-hidden="true"></div>\
\
<!-- Mobile drawer nav -->\
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" aria-hidden="true">\
\
  <div class="mobile-nav__head">\
    <a href="/mckoyharris/" class="site-logo site-logo--banner" aria-label="McKoy Harris Valuation — Home">\
      <img src="/mckoyharris/images/logo-mckoy-harris-white-horizontal.png" alt="McKoy Harris Valuation" width="885" height="159">\
    </a>\
    <button class="mobile-nav__close" id="nav-close" aria-label="Close navigation menu">\
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\
    </button>\
  </div>\
\
  <div class="mobile-nav__links">\
    <a href="/mckoyharris/" class="mobile-nav__links a" style="display:block;padding:0.875rem 1.5rem;font-family:var(--font-ui);font-size:1.0625rem;font-weight:500;color:rgba(255,255,255,0.8);border-left:3px solid transparent;transition:color 0.2s,border-color 0.2s,background 0.2s;text-decoration:none" onmouseover="this.style.color=\'#fff\';this.style.borderLeftColor=\'var(--accent)\'" onmouseout="this.style.color=\'rgba(255,255,255,0.8)\';this.style.borderLeftColor=\'transparent\'">Home</a>\
\
    <!-- Services accordion -->\
    <div class="mobile-accordion" id="mobile-acc-services">\
      <button class="mobile-accordion__trigger" aria-expanded="false" aria-controls="mobile-acc-services-panel">\
        Services\
        <svg class="mobile-accordion__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>\
      </button>\
      <div class="mobile-accordion__panel" id="mobile-acc-services-panel">\
        <div class="mobile-accordion__links">\
          ' + serviceLinksMobile + '\
          <a href="/mckoyharris/request-appraisal/" class="see-all">Request an Appraisal →</a>\
        </div>\
      </div>\
    </div>\
\
    <!-- Service Areas accordion -->\
    <div class="mobile-accordion" id="mobile-acc-areas">\
      <button class="mobile-accordion__trigger" aria-expanded="false" aria-controls="mobile-acc-areas-panel">\
        Service Areas\
        <svg class="mobile-accordion__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>\
      </button>\
      <div class="mobile-accordion__panel" id="mobile-acc-areas-panel">\
        <div class="mobile-accordion__links">\
          ' + areaLinksMobile + '\
          <a href="/mckoyharris/#service-areas" class="see-all" style="margin-top:0.5rem">View All Service Areas →</a>\
        </div>\
      </div>\
    </div>\
\
    <a href="/mckoyharris/pricing/" style="display:block;padding:0.875rem 1.5rem;font-family:var(--font-ui);font-size:1.0625rem;font-weight:500;color:rgba(255,255,255,0.8);border-left:3px solid transparent;text-decoration:none">Pricing</a>\
    <a href="/mckoyharris/#about"    style="display:block;padding:0.875rem 1.5rem;font-family:var(--font-ui);font-size:1.0625rem;font-weight:500;color:rgba(255,255,255,0.8);border-left:3px solid transparent;text-decoration:none">About</a>\
    <a href="/mckoyharris/#reviews"  style="display:block;padding:0.875rem 1.5rem;font-family:var(--font-ui);font-size:1.0625rem;font-weight:500;color:rgba(255,255,255,0.8);border-left:3px solid transparent;text-decoration:none">Reviews</a>\
    <a href="/mckoyharris/#faq"     style="display:block;padding:0.875rem 1.5rem;font-family:var(--font-ui);font-size:1.0625rem;font-weight:500;color:rgba(255,255,255,0.8);border-left:3px solid transparent;text-decoration:none">FAQs</a>\
    <a href="/mckoyharris/request-appraisal/"  style="display:block;padding:0.875rem 1.5rem;font-family:var(--font-ui);font-size:1.0625rem;font-weight:500;color:rgba(255,255,255,0.8);border-left:3px solid transparent;text-decoration:none">Contact</a>\
  </div>\
\
  <div class="mobile-nav__footer">\
    <p class="mobile-nav__phone">Call us: <a href="tel:+16108710318">(610) 871-0318</a></p>\
    <a href="/mckoyharris/request-appraisal/" class="btn btn--accent btn--full">Request an Appraisal</a>\
    <p style="font-family:var(--font-ui);font-size:0.75rem;color:rgba(255,255,255,0.3);text-align:center">Mon–Fri · 8am–7pm · PA License #RL140441</p>\
  </div>\
\
</nav>';
};
