jQuery(document).ready(function($) {

	var section_count = 0;
	var total_number_of_sections = $(".progress-scroller").length;	
			
	$(".progress-scroller").each(function() {

		section_count ++;

		var prev_link = (section_count - 1);
		var next_link = (section_count + 1);

		if ($(this).attr("data-title")) {
			// If the section has a data-title, this will be used as the section title.
			var section_title = "<p>" + $(this).attr("data-title") + "</p>";

		} else {
			// Edit the text between the paragraph tags if you would prefer something else.
			var section_title = "<p>This Section</p>";
		}

		if ($(this).next(".progress-scroller").attr("data-title")) {
			
			var next_title = $(this).next(".progress-scroller").attr("data-title");

		} else {

			var next_title = "Next";
		}

		if ($(this).prev(".progress-scroller").attr("data-title")) {
			
			var prev_title = $(this).prev(".progress-scroller").attr("data-title");

		} else {

			var prev_title = "Previous";
		}
		
		if (total_number_of_sections > 1 && section_count === 1) { 
			// Multiple sections, this is the first. Only has "next" link.
			$(this).append("<div class='progress-bar'>" + section_title + "<a class='next' href='#section-" + next_link +"'>" + next_title +"</a><div class='progess'></div></div>");
		
		} else if (section_count > 1 && section_count < total_number_of_sections) {
			// Multiple sections, these are all the ones in the middle. Has both "previous" and "next" links.
			$(this).append("<div class='progress-bar'>" + section_title + "<a class='prev' href='#section-" + prev_link +"'>" + prev_title + "</a><a class='next' href='#section-" + next_link +"'>" + next_title +"</a><div class='progess'></div></div>");
		
		} else if (total_number_of_sections > 1 && section_count === total_number_of_sections) {
			// Multiple sections, this is the last. Only has "previous" link.
			$(this).append("<div class='progress-bar'>" + section_title + "<a class='prev' href='#section-" + prev_link +"'>" + prev_title + "</a><div class='progess'></div></div>");
		
		} else {
			// Only one section. No "previous" or "next" required.
			$(this).append("<div class='progress-bar'>" + section_title + "<div class='progess'></div></div>");
		}

		// Add ID's to each section, based on their order. This is used for the previous/next links, and is only required if there is more than 1.
		if (total_number_of_sections > 1) {
			$(this).attr("id", "section-" + section_count);
		}
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
		var top_of_window = $(window).scrollTop();
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var object_height = $(this).outerHeight();

		// Calculate the percentage the user has scrolled down the page
		var too_multiplied = 100 * top_of_object;
		var tow_multilied = 100 * top_of_window;
		var tow_minus_too = tow_multilied - too_multiplied;
		var scrollPercent = tow_minus_too / (object_height - $(window).height());
		var percentage_output = (scrollPercent.toFixed(3));
		
		$(this).find('.progess').css('width', percentage_output +"%"  );

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