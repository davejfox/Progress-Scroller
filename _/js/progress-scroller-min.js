jQuery(document).ready(function($){var s=0,e=$(".progress-scroller").length;$(".progress-scroller").each(function(){s++;var t=s-1,i=s+1;if($(this).attr("data-title"))var o="<p>"+$(this).attr("data-title")+"</p>";else var o="<p>This Section</p>";e>1&&1===s?$(this).append("<div class='progress-bar'>"+o+"<a class='next' href='#section-"+i+"'>Next Section</a><div class='progess'></div></div>"):s>1&&s<e?$(this).append("<div class='progress-bar'>"+o+"<a class='prev' href='#section-"+t+"'>Previous Section</a><a class='next' href='#section-"+i+"'>Next Section</a><div class='progess'></div></div>"):e>1&&s===e?$(this).append("<div class='progress-bar'>"+o+"<a class='prev' href='#section-"+t+"'>Previous Section</a><div class='progess'></div></div>"):$(this).append("<div class='progress-bar'>"+o+"<div class='progess'></div></div>"),$(this).attr("id","section-"+s)}),$(".progress-bar a").click(function(s){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length&&(s.preventDefault(),$("html,body").stop().animate({scrollTop:e.offset().top},1e3))}})}),$(window).scroll(function(){$(".progress-scroller").each(function(){var s=$(this).offset().top,e=$(this).offset().top+$(this).outerHeight(),t=$(window).scrollTop(),i=100*$(this).offset().top,o=100*$(window).scrollTop(),a=o-i,r=$(this).outerHeight(),n=a/(r-$(window).height()),c=n.toFixed(3);$(this).find(".progess").css("width",c+"%"),s>=t&&$(this).find(".progress-bar").removeClass("fix"),s<t&&$(this).find(".progress-bar").addClass("fix").removeClass("fix-bottom"),t>e-20&&$(this).find(".progress-bar").removeClass("fix").addClass("fix-bottom")})});