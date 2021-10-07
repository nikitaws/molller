$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })
  
$('.prim').slick({
  dots: false,
  infinite: true,
  speed: 200,
  fade: true,
  cssEase: 'linear'
});
    
$('.reviews').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear'
});    
    
});


$(".to_form").on("touchend, click", function (e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $('.zakaz').offset().top
  }, 400);
});
setTimeout(function () {
  var flag = true;
  $(window).mouseout(function (e) {
    if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
      $('.demon_popup').fadeIn(300);
      flag = false;
    }
  })
}, 000);
$('.demon_popup, .demon_close, .popup_btn').click(function () {
  $('.demon_popup').fadeOut(100);
})
$('.demon_popup_body').click(function (e) {
  e.stopPropagation();
});
