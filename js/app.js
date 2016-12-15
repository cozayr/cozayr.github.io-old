$(document).ready(function() {

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

});
