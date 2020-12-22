$(document).ready(function(){
    //Slider
    $('.testimonials__inner').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/prev_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/next_arrow.png"></button>'
      });

    //Smooth scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});
  });