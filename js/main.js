$(function(){
  $('.toggle-personal-info').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('closed');
    $('.personal-info-list').slideToggle();
  });
});
