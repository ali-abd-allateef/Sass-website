$(function(){
    'use strict';
    $('.list-info li').click(function() {
         $(this).addClass('selected').siblings('li').removeClass('selected');  
         $('.Tap-info div').hide();
         $('.' + $(this).data('class')).fadeIn();
    });
}); 


$(function(){
    $('.the-toggler').on('click', function(){
        $('.navbar').slideToggle();
    });
});
