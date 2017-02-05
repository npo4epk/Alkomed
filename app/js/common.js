$(document).ready(function() {
			
	$(".fancybox").fancybox({
		'padding'		: 0,
		'margin' : 0,
		'autoScale'		: true,
		'autoHeight' : true,
		'autoWidth' : true,
		'autoResize' : true,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'   
	});

	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",  
			data: $(this).serialize()
		}).done(function() {
			$("#callback").trigger("reset");
			$.fancybox.close();
			window.location.href="thank.html";
		}); 
		return false;  
	});
	
});

 