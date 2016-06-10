$(document).ready(function(){
	console.log($(location).attr('href'));
		$(".nav a").on("click", function(){
			$(".nav").find(".active").removeClass("active");
			$(this).parent().addClass("active");
	});
});