import $ from 'jquery';

$('.hamburger-menu-link').click(function(){
  
  $('#hamburger-menu').toggleClass('active');

  
});

$('.hamburger-menu__close').click(function(){
  
  $('#hamburger-menu').toggleClass('active');
  
});

$('#nav__linktwo').click(function(){
  
  $('#about').toggleClass('active');
  
});

$('.hamburger-menu a').click(function() {

  $('#hamburger-menu').removeClass('active');

});