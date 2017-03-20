jQuery(document).ready(function($) {
			
	$(".progress-scroller").each(function(e) {

		var titletext = $(this).find("h1").text();

		console.log("titletext", titletext);

		// if($(".progress-scroller").length > 1) {
		
		// 	$(".progress-scroller").each(function(e) {
				$(this).append("<div class='progress-bar'><p>" + titletext + "</p><div class='progess'></div></div>");
		// 	});
		// } else {
		// 	$(this).append("<div class='progress-bar'></div>");
		// }
	});
});





$(window).scroll(function() {

	$(".progress-scroller").each(function(i) {

		var top_of_object = $(this).offset().top;
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();

		var top_of_window = $(window).scrollTop();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		// calculate the percentage the user has scrolled down the page
		var blurp = 100 * $(this).offset().top;
		var thingy = 100 * $(window).scrollTop();
		var combo = thingy - blurp;

		var obbheight = $(this).outerHeight()

		var scrollPercent = combo / (obbheight - $(window).height());

		var murkmurk = (scrollPercent.toFixed(3));

		var top_o_dis = $(this).offset().top;
		var height_of_object = $(this).outerHeight();

		// console.log("top_of_object", top_of_object);
		// console.log("test", test);
		// console.log("scrollPercent", scrollPercent);
		// console.log("combo", combo);
		// console.log("obbheight", obbheight);
		// console.log("offtop", $('.progress-scroller').offset().top);
		// console.log("outer height", $(".progress-scroller").outerHeight());

		console.log("scrollPercent", scrollPercent);
		console.log("murkmurk", murkmurk);


		//if ((height_of_object >= top_o_dis)) {
		$(this).find('.progess').css('width', murkmurk +"%"  );
		// } else {
		// 	console.log("this page isn\'t really long enough to warrant a scrolling indicator.");
		// }


		if (top_of_object >= top_of_window) {
			$(this).find('.progress-bar').removeClass("fix");
		}

		if ((top_of_object < top_of_window)) {
			$(this).find('.progress-bar').addClass("fix").removeClass("fix-bottom");
		}

		if ((top_of_window > bottom_of_object - 20)) {
			$(this).find('.progress-bar').removeClass("fix").addClass("fix-bottom");
		}
	});
});