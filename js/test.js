$(function() {
	$("#nav-sidebar").on("click", function() {

		setTimeout(function() {
			$("#aside-wrapper").toggleClass("hidden");		
		}, 1000);
	});

	$(".nav-blue").hover(function() {
		$("body").addClass("all-links-blue");
	}, function() {
		$("body").removeClass("all-links-blue");	
	});
})