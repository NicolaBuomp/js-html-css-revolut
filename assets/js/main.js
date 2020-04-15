$(document).ready(function () {
    
    var arrow = $('.languages > i')
    var language = $('.languages')

    // hoverDrop.mouseenter(function(){
    //     hoverDrop.not($(this)).next('.dropdown').hide();
    //     $(this).children('.dropdown').show();
        
    // });
    // dropDown.mouseleave(function(){
    //     hoverDrop.not($(this)).next('.dropdown').hide();
    // });
    
    $('.with-dropdown').mouseenter(function(){
        $(this).children('.dropdown').addClass('active');
    });

    $('.with-dropdown').mouseleave(function(){
        $(this).children('.dropdown').removeClass('active');
    });

    language.mouseenter(function(){
        arrow.removeClass('fa-angle-down').addClass('fa-angle-up');
    }); 


    language.mouseleave(function(){
        arrow.removeClass('fa-angle-up').addClass('fa-angle-down');
    }); 

});

