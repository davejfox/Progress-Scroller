/*

if page has more than one progress scroller {
	
	use script that creates ID's, prev next button etc
}

else {
	use script that just creates one standard progress scoller. 
}

both should only work if progress scroller section is larger than the screen.



*/







jQuery(document).ready(function($) {

	var count = 0;
			
	$(".progress-scroller").each(function(index) {

		count ++;

		var titletext = $(this).find("h1").text();

		$(this).find().next(".progress-scroller").addClass('class_name');


		$(this).attr("id", "section-" + count);

		// if($(".progress-scroller").length > 1) {
		
		// 	$(".progress-scroller").each(function(e) {
				$(this).append("<div class='progress-bar'><p>" + titletext + "</p><a class='prev' href='#section-" + (count - 1) +"'>Previous Section</a><a class='next' href='#section-" + (count + 1) +"'>Next</a><div class='progess'></div></div>");
		// 	});
		// } else {
		// 	$(this).append("<div class='progress-bar'></div>");
		// }



	});


	
});


$(window).scroll(function() {

	$(".progress-scroller").each(function(e) {

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

		// console.log("scrollPercent", scrollPercent);
		// console.log("murkmurk", murkmurk);

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



jQuery(document).ready(function($) {
	
	$(function() {

		$(".progress-bar a").click(function(e) {

			if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") || location.hostname == this.hostname) {

				var target = $(this.hash);

				target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
					if (target.length) {
					e.preventDefault();
					$("html,body").stop().animate({
						scrollTop: target.offset().top
					}, 1200);
				}
			}
		});
	});
});