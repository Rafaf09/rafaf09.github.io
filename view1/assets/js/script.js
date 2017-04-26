$(document).ready(function(){

	$("#rafa").click(function() {
    	$("#text").hide();
       	$("#background").addClass("blurry");
    	$("#site-container").slideToggle(750);
	});

	$("#carousel-next").click(function() {
    	var val = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	if (val == -3840) {
    		return false;
    	} else { 
     		$('#carousel').css({'margin-left':val-960});
    }
  });

	$("#carousel-prev").click(function() {
    	var val = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	if (val == 0) {
      		return false;
    	} else { 
     		$('#carousel').css({'margin-left':val+960});
    }
	});
	$("#site-overlay").click(function() {
    	$("#site-container").slideToggle(750);
    	$("#text").slideDown(1500);
	});
});