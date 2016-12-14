console.log("enabled");

$(document).ready(function() {

  $(".btn_readywhy").click(function() {
    $('html, body').animate({
       scrollTop: $("#pnl_readywhy").offset().top
   }, 700);
   return false;
  });

  $(".btn_samples").click(function() {
    $('html, body').animate({
       scrollTop: $("#pnl_samples").offset().top
   }, 700);
   return false;
  });

  $(".btn_contact").click(function() {
    $('html, body').animate({
       scrollTop: $("#pnl_contact").offset().top
   }, 700);
   return false;
 });

});
