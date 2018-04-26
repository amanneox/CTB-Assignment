$(function() {
  $('#carousel').each(function() {
    $(this).carousel({
      interval: false
    });
  });
})
$(document).ready(function() {



  $("#scroll").click(function(event) {

    $('html, body').animate({
      scrollTop: '+=500px'
    }, 800);
  });
});
