/* only execute this script when the document is ready */

$(document).ready(function(){

    $(".menu-button").mouseenter(function(){
    


    $(".drop1").fadeIn('slow');
    setTimeout(function() { $(".drop2").fadeIn('slow');}, 400);
    setTimeout(function() { $(".drop3").fadeIn('slow');}, 800);

    
    $(".menu-table").mouseleave(function() {
     setTimeout(function() {
    $(".drop1").fadeOut('slow');
    $(".drop2").fadeOut('slow');
    $(".drop3").fadeOut('slow');
    },1500);
    });

    });


    $(".r").hover(function(){
    	$(".block", this).fadeIn("fast");
     $(".r").mouseleave(function(){
    	$(".block", this).fadeOut("fast");
    });
        });




});