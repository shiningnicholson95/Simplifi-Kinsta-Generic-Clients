/* ================================================
   Component: stats-bar
   Four-stat credibility bar. Accepts data-* overrides.

   Usage:
     <div data-component="stats-bar"></div>

   With custom values:
     <div data-component="stats-bar"
          data-s1-num="$450+" data-s1-label="Appraisals Starting At"
          data-s2-num="4"    data-s2-label="Counties Served"
          data-s3-num="4-day" data-s3-label="Rush Available"
          data-s4-num="5.0★" data-s4-label="Google Rating"></div>

   WordPress equivalent: template-parts/stats-bar.php
   ================================================ */

window.McKoyComponents = window.McKoyComponents || {};

window.McKoyComponents['stats-bar'] = function (config) {
  var stats = [
    {
      num:   (config && config['s1-num'])   || '$450<span style="font-size:1.5rem">+</span>',
      label: (config && config['s1-label']) || 'Appraisals Starting At'
    },
    {
      num:   (config && config['s2-num'])   || '4',
      label: (config && config['s2-label']) || 'Counties Served'
    },
    {
      num:   (config && config['s3-num'])   || '4<span style="font-size:1.25rem">-day</span>',
      label: (config && config['s3-label']) || 'Rush Turnaround Available'
    },
    {
      num:   (config && config['s4-num'])   || '5.0<span style="font-size:1.25rem">&#9733;</span>',
      label: (config && config['s4-label']) || 'Google Rating'
    }
  ];

  var items = stats.map(function (s, i) {
    var delay = i > 0 ? ' data-animate-delay="' + i + '"' : '';
    return '<div class="stat-item" data-animate' + delay + '>'
      + '<div class="stat-item__number">' + s.num + '</div>'
      + '<div class="stat-item__label">' + s.label + '</div>'
      + '</div>';
  }).join('');

  return '<div class="stats-bar" role="region" aria-label="Key statistics">'
    + '<div class="container">'
    + '<div class="stats-bar__inner">' + items + '</div>'
    + '</div>'
    + '</div>';
};
