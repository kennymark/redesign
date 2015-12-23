

var hide = $('.hide');
var $this = $(this);

$(function(){

 $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 750);
            return false;
          }
        }
      });
    hidegototop();
    $('.desc2').hide();
    $('.cutenav').hide();

  });

function hidegototop(){
  var mq = window.matchMedia("(max-width: 675px)");

  if(mq.matches){
    $('.backtotop').remove();
    $('.cutenav').remove();
    $('.nav2').show();
    console.log('media'); 
  }

  else {
    return false;
  }
};


$(document).scroll(function() {
  /* Act on the event */
  showSecnav();

});


function showSecnav(){
  var height = $(document).scrollTop();
  var scrollH =  $(document).height() / 6;
  var cuteNav = $('.cutenav');

  if (height > scrollH){
    cuteNav.fadeIn(200);
    console.log('hey');
  }

  else {
    cuteNav.fadeOut(200)
  }
};


$('.active').css("width", '20px')
      .addClass('animated bounceInleft');

$('.fa-bars').on('click',function(){
  $('.menubar').addClass('animated bounceInDown').fadeToggle(200);
  $('.menubar').show();
  $('nav').hide();
  
});

$('.fa-times').on('click',function(){
  
  $('nav').show();
  $('.menubar').fadeOut(200);
  hide.show();
});

$('.fa-caret-down').on('click', function(){
  $('.desc2').slideToggle(300);
  $('.desc2').slideToggle(200);
});

$('ul a').click(function(e){

 
  $this.addClass('active').siblings()
   .removeClass('active')
   e.preventDefault();

});

$('.menubar a').click(function(e){
  hide.show();
  $('nav').show();
  $('.menubar').fadeOut();

  $this.addClass('active').siblings()
   .removeClass('active')
  

});