$(function(){
  $('.toggle-personal-info').on('click', function(e) {
    var currentIcon = $(this).find('span');
    var currentState = currentIcon.text();
    
    e.preventDefault();
    $(this).find('span').text(
      currentState == "+" ? "-" : "+"
    );
    $('.personal-info-list').slideToggle();
  });
});
