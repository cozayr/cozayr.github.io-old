$(document).ready(function() {
  var sidemenu_isAnimating = false;
  // ##############################
  // PAGE NAVIGATION ELEMENTS
  // ##############################

  $(".btn_home").click(function() {
    $('html, body').stop().animate({
       scrollTop: 0
   }, 700, 'easeInOutSine');
   return false;
  });

  $(".btn_about").click(function() {
    $('html, body').stop().animate({
       scrollTop: $(".panel").eq(1).offset().top - 50
   }, 700, 'easeInOutSine');
   return false;
  });

  $(".btn_samples").click(function() {
    $('html, body').stop().animate({
       scrollTop: $(".panel").eq(2).offset().top - 50
   }, 700, 'easeInOutSine');
   return false;
  });

  $(".btn_contact").click(function() {
    $('html, body').stop().animate({
       scrollTop: $(".footer").offset().top - 50
   }, 700, 'easeInOutSine');
   return false;
 });

 window.onscroll = function (e) {
   if ($( window ).width() >= 650) {
   if ($("body").scrollTop() > 100) {
     $("#sidemenu").stop().animate({"opacity":".8", "right" : "0"}, 200);
   }
   else {
     $("#sidemenu").stop().animate({"opacity":"0", "right" : "-60"}, 200);
   }


  $(".panel").each(function() {
    if ($("body").scrollTop() > ($(this).offset().top - $(this).height() / 2)) {
      $("#sidemenu a").eq($(this).index() - 3).css({"filter": "grayscale(0%)", "opacity" : "1"});
      $("#sidemenu a").eq($(this).index() - 3).siblings().css({"filter": "grayscale(100%)", "opacity" : ".3"});
    }
  });

}

} ;


 });
