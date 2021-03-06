$(function() {
  svg4everybody();

  personsPicsAdjust();

  $('.header').headroom({
    offset: 170,
    tolerance: {
      up: 5,
      down: 0
    }
  });

  var $reviews = $('.reviews-slider').flickity({
    // wrapAround: true,
    pageDots: false,
    selectedAttraction: 0.2,
    friction: 0.8,
    arrowShape: 'M19.1186356,50.0000009 L48.9590407,79.3741542 C51.1456354,81.5265837 51.1733318,85.0440581 49.0209022,87.2306526 C46.8684727,89.4172476 43.3509985,89.4449437 41.1644038,87.2925142 L1.65823711,48.4036253 C-0.552745704,46.2271888 -0.552745704,42.6617018 1.65823711,40.4852653 L41.1644038,1.59637642 C43.3509985,-0.556053125 46.8684727,-0.528356753 49.0209022,1.658238 C51.1733318,3.84483275 51.1456354,7.36230694 48.9590407,9.51473644 L19.1186356,38.8888898 L94.4444444,38.8888898 C97.5126928,38.8888898 100,41.3761967 100,44.4444453 C100,47.5126939 97.5126928,50.0000009 94.4444444,50.0000009 L19.1186356,50.0000009 Z'
  });

  $('#landing-login-action').on('click',function() {
    $('#landing-actions-list a[href="#auth-input"]').tab('show');
  });

  $('#landing-register-action, .js-start-action').on('click', function() {
    $('#landing-actions-list a[href="#auth-registration"]').tab('show');
  });
});

$('#rolesNav').find('.nav-link').on('shown.bs.tab', function(e) {
  personsPicsAdjust();
});

function personsPicsAdjust() {
  $('.roles-side-person').each(function() {
    var $el = $(this).prev().find('.roles-side-speech__item').eq(0);
    $(this).css('width', Math.round($el.width()) + 'px');
  });
}