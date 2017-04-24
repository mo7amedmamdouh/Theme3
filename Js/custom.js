/* global $ , alert, console */

$(function () {
    
    'user strict';
    // Adjust header Hight
    
    var myHeader =  $('.header'),
        mySlider =  $('.bxslider');
    
    
    
  myHeader.height($(window).height());
    
    $(window).resize(function() {
            myHeader.height($(window).height());
        
              mySlider.each(function(){
        
        $(this).css('paddingTop' , ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
        
    })
    
    // links Active Class
    
    $('.links li a').click(function() {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
    
   mySlider.each(function(){
        
        $(this).css('paddingTop' , ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    
    // Triglle BX Slider
      mySlider.bxSlider(
      { 
            pager:false
      });
    
    
    // Smooz Scroll TO Div
        $('.links li a').click(function() {
        
        $('html , body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top 
            
        } , 10);
    });
    
    
    //Out Auto Slider Code --------------------------------- Start Slider-------------------------------------------------
    
    (function autoSlider(){
        
        $('.slider .active').each(function(){
            if (!$(this).is(':last-child')){
                    
                $(this).delay(3000).fadeOut(1000,function(){
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                                                autoSlider();

                    
                });
                

            }
            else {
                
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    autoSlider();
                });
            };
            
        });
        
    }());
    
    // -----------------------------------------------------End SLider ----------------------------------------------------------------------
    
            // Useing Mix Up Plugin
        	$('#Container').mixItUp();
    //------------------------------------------------------------------------------------------------------------------------------------------
        // Adjust Shuffle Link
    
            $('.shuffle li').click(function(){
                
                $(this).addClass('selected').siblings().removeClass('selected');
                
            })
            
      //-----------------------------------------------------------------------------------------------------------------------------------------
          
            //Triglle Nice Scrolle
            $('html').niceScroll({
                
                cursorcolor: '#1abc9c',
                cursorborder:'1px solid #1abc9c'
            });
    
    

});