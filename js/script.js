$(function() {
    $('#carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});​
$(function() {
  $('#scroll').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
