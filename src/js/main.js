(function($) {
  var transitionEl;
  $('#menu li a').click(function(e) {
    e.preventDefault();
    
    if (transitionEl != undefined) {
      $('.page.transition').removeClass('transition');
      $('.page#' + transitionEl).addClass('transition');
    }

    var page = $(this).data('id');
    transitionEl = page;
    $('body').removeClass().addClass(page);


    if (page == undefined) {
      $('.page.transition').removeClass('transition');
      $('#top-bar').slideUp();
    } else if (!$('#top-bar').is(':visible')) {
      $('#top-bar').delay(400).slideDown();
    }
  });
})(jQuery);