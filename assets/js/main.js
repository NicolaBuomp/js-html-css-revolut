$(document).ready(function () {
    
    var dropDown = $('.dropdown');
    var hoverDrop = $('.with-dropdown');


    hoverDrop.mouseenter(function(){
        var statuDropdown = $(this).next('.dropdown');
        statuDropdown.show().slide(1);
        
    });

    hoverDrop.mouseleave(function(){

        var statuDropdown = $(this).next('.dropdown');
        statuDropdown.hide().slide(1);
        
    });
    
});