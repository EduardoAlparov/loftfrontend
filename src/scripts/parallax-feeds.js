import $ from 'jquery';

$('.section-feedsandform').on('mousemove', (e) =>{
  
  const x = e.pageX / $(window).width();
  const y = e.pageY / $(window).height();

  $('.feeds__image').css(
    'transform',
     `translate(-${x * 40}px, -${y * 40}px)`
  );

});