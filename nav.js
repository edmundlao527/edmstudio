$(document).ready(function() {
   $(".logo").hover(
     function() {
	    $(this).find("span").fadeToggle();
    } )
	
	$(".poster").hover(
     function() {
	    $(this).height($(this).height()*2.6);
	    $(this).find("#p1").fadeOut();
		$(this).find("#p2").fadeIn();
     },function() {
	    $(this).height($(this).height()/2.6);
		$(this).find("#p2").fadeOut(1);
		$(this).find("#p1").fadeIn(500);
     })
	 
	 $(".stop").hover(
     function() {
	    $(this).height($(this).height()*2.1);
	    $(this).find("#s1").fadeOut();
		$(this).find("#s2").fadeIn();
     },function() {
	    $(this).height($(this).height()/2.1);
		$(this).find("#s2").fadeOut(1);
		$(this).find("#s1").fadeIn(500);
     })
	
	});