(function () {
  'use strict';

  function init() {
    // Stagger card and feature-card entrance animations
    var cards = document.querySelectorAll('.card, .feature-card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.animationDelay = (i * 65) + 'ms';
    }

    // Attach smooth exit transitions to internal navigation links
    var links = document.querySelectorAll('a[href]');
    for (var j = 0; j < links.length; j++) {
      attachTransition(links[j]);
    }
  }

  function attachTransition(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    // Skip anchor links, external URLs, javascript:, mailto:
    if (
      href.charAt(0) === '#' ||
      href.indexOf('://') > -1 ||
      href.indexOf('javascript') === 0 ||
      href.indexOf('mailto') === 0
    ) return;

    link.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;
      e.preventDefault();
      var dest = href;
      document.body.classList.add('page-leaving');
      setTimeout(function () {
        window.location.href = dest;
      }, 210);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
