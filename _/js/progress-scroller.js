jQuery(document).ready(function($) {

	var section_count = 0;
	var total_number_of_sections = $(".progress-scroller").length;	
			
	$(".progress-scroller").each(function() {

		section_count ++;

		var prev_link = (section_count - 1);
		var next_link = (section_count + 1);

		// If the section has a data-title, this will be used as the section title.
		if ($(this).attr("data-title")) {

			var section_title = "<p>" + $(this).attr("data-title") + "</p>";

		} else {

			// Edit the text between the paragraph tags if you would prefer something else.
			var section_title = "<p>This Section</p>";
		}

		// Multiple sections, this is the first. Only has "next" link.
		if (total_number_of_sections > 1 && section_count === 1) { 
			$(this).append("<div class='progress-bar'>" + section_title + "<a class='next' href='#section-" + next_link +"'>Next Section</a><div class='progess'></div></div>");
		}

		// Multiple sections, these are all the ones in the middle. Has both "previous" and "next" links.
		else if (section_count > 1 && section_count < total_number_of_sections) {
			$(this).append("<div class='progress-bar'>" + section_title + "<a class='prev' href='#section-" + prev_link +"'>Previous Section</a><a class='next' href='#section-" + next_link +"'>Next Section</a><div class='progess'></div></div>");
		}

		// Multiple sections, this is the last. Only has "previous" link.
		else if (total_number_of_sections > 1 && section_count === total_number_of_sections) {
			$(this).append("<div class='progress-bar'>" + section_title + "<a class='prev' href='#section-" + prev_link +"'>Previous Section</a><div class='progess'></div></div>");
		}

		// Only one section. No "previous" or "next" required.
		else {
			$(this).append("<div class='progress-bar'>" + section_title + "<div class='progess'></div></div>");
		}

		// Add ID's to each section, based on their order. This is used for the previous/next links.
		$(this).attr("id", "section-" + section_count);
	});

	$(".progress-bar a").click(function(e) {

		if (location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,"") || location.hostname === this.hostname) {

			var target = $(this.hash);

			target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
				if (target.length) {
				e.preventDefault();
				$("html,body").stop().animate({
					scrollTop: target.offset().top
				}, 1000);
			}
		}
	});
});

$(window).scroll(function() {

	$(".progress-scroller").each(function() {

		var top_of_object = $(this).offset().top;
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();

		var top_of_window = $(window).scrollTop();
		//var bottom_of_window = $(window).scrollTop() + $(window).height();

		// Calculate the percentage the user has scrolled down the page
		var blurp = 100 * $(this).offset().top;
		var thingy = 100 * $(window).scrollTop();
		var combo = thingy - blurp;

		var obbheight = $(this).outerHeight();

		var scrollPercent = combo / (obbheight - $(window).height());

		var murkmurk = (scrollPercent.toFixed(3));

		//var top_o_dis = $(this).offset().top;
		//var height_of_object = $(this).outerHeight();

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