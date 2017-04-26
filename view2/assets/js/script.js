$(document).ready(function(){
	$("#darien").click(function() {
    	$("#text").hide();
       	$("#background").addClass("blurry");
    	$("#modal-container").slideToggle(750);
	});

	$("#carousel-next").click(function() {
    	var val = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	if (val <= -13440) {
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
	$("#overlay").click(function() {
    	$("#background").removeClass("blurry");
    	$("#modal-container").slideToggle(750);
    	$("#text").slideDown(1500);
	});

  $("#rafa").click(function() {
      $("#text").hide();
      $("#site-container").slideToggle(750);
  });
  $("#site-overlay").click(function() {
      $("#site-container").slideToggle(750);
      $("#text").slideDown(1500);
  });
});