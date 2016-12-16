$(document).ready(function() {
  var sidemenu_isAnimating = false;
  // ##############################
  // PAGE NAVIGATION ELEMENTS
  // ##############################

  $(".btn_about").click(function() {
    $('html, body').animate({
       scrollTop: $(".panel").eq(1).offset().top - 50
   }, 700, 'easeInOutSine');
   return false;
  });

  $(".btn_samples").click(function() {
    $('html, body').animate({
       scrollTop: $(".panel").eq(2).offset().top - 50
   }, 700, 'easeInOutSine');
   return false;
  });

  $(".btn_contact").click(function() {
    $('html, body').animate({
       scrollTop: $(".footer").offset().top - 50
   }, 700, 'easeInOutSine');
   return false;
 });
 window.addEventListener('scroll', function() {

   //$("#sm_btn_contact").stop().animate({"top": (Math.floor((($(".panel").eq(2).offset().top  - $('body').scrollTop()) / $(document).height() * 100) + 50) + "%")});
     if ($('body').scrollTop() > $(".panel").eq(1).offset().top - 500) {
       $("#sidemenu").stop().animate({"left" : "0"}, 200);
     }

     else
     {
       $("#sidemenu").stop().animate({"left" : -$("#sidemenu").width()}, 200);
     }
 });







});
