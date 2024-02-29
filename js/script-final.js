/*Появление бургер-меню*/

$('.burger').click(function(){
  $('.sidebar').toggleClass('active', 'slow');
})


/* Интерфейс плеера*/



$(document).ready(function(){

  const audio = document.querySelector('audio');


  $('.play').click(function(){
    $('.stop-button-wrapper').removeClass('button-active');
    $('.play-button-wrapper').addClass('button-active');
    $('.play').attr('src','./img/pause.svg');
    $('.playbutton-label').addClass('zero-opacity');
    audio.play();
  })
  
  $('.stop').click(function(){
    $('.stop-button-wrapper').addClass('button-active');
    $('.play-button-wrapper').removeClass('button-active');
    $('.play').attr('src','./img/play.svg');
    $('.playbutton-label').removeClass('zero-opacity');
    audio.pause(); 
  })
  
  $('.mute').click(function(){
    audio.volume = 0;
    $('#seek-slider').val('0');
    $('.mute').addClass('muted');
  })
  
  $('#seek-slider').change(function(){
    audio.volume = parseFloat(this.value / 10);
    if (audio.volume === 0) {
      $('.mute').addClass('muted');
    } else {
      $('.mute').removeClass('muted');
    }
  })
})


