$(document).ready(function () {
    
    var dropDown = $('.dropdown');
    var hoverDrop = $('.with-dropdown');
    var arrow = $('.languages > i')
    var language = $('.languages')

    hoverDrop.mouseenter(function(){

        hoverDrop.not($(this)).next('.dropdown').hide();

        $(this).next('.dropdown').show();
        
    });

    dropDown.mouseleave(function(){

        hoverDrop.not($(this)).next('.dropdown').hide();
    });
    

    language.mouseenter(function(){
        arrow.removeClass('fa-angle-down').addClass('fa-angle-up');
    }); 


    language.mouseleave(function(){
        arrow.removeClass('fa-angle-up').addClass('fa-angle-down');
    }); 

});

