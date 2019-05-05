$(document).ready(function(){
  $(' div.awesome img').mousemove(function(){
      $('.overlay').hide();
  });
    
    $('.first').click(function(){
        $('.f1 .one').show().siblings().hide();
    });
    
    $('.second').click(function(){
        $('.f1 .two').show().siblings().hide();
    });
    
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 500){
            $('.header').slideDown();
        }
        else{
            $('.header').slideUp();
        }
    });
    
    
    $('.one').css('display','block');
    
    $('div.acordion h3').click(function(){
        $(this).next().slideToggle();
        $('div.acordion p').not($(this).next()).slideUp();
    });
    
    $(".download").click(function(){
        $('.timer').countTo();
    });
    $('.all_images').mixItUp();
    /*$('html').niceScroll();*/
});