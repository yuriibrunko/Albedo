(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);

  $('.slider').slick({
    dots: true
  });

  
  $('.galery-slider').slick({
    dots: false,
    arrows: false
  });