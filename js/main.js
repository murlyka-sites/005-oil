$(document).ready(function() {

	$(".input-range-ion").ionRangeSlider({
		type: "double",
		hide_min_max: true,
		hide_from_to: true,
		onChange: function (data) {
			console.log(this);
			$(".input-range-min").val(data.from);
			$(".input-range-max").val(data.to);
		}
	});

	var range = $(".input-range-ion").data("ionRangeSlider");

	$(".input-range-min").on("change keydown", function() {
		range.update({from: $(this).val()});
	});

	$(".input-range-max").on("change keydown", function() {
		range.update({to: $(this).val()});
	});

	$(".nav__humburger").click(function() {
		$(this).parent().next().toggleClass("open");
	});


	$(".fancy").fancybox({
	});

	$('form').ajaxForm({
		url: "index.html",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger('reset');
			$.fancybox("#success", {padding: 0});
		}
	});

	if(!isMobile.any) {
		$(".main__bg").append('<video loop autoplay preload class="main__video">' +
            '<source src="video/bg.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;">' +
            '<source src="video/bg.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">' +
            '<source src="video/bg.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;">' +
          '</video>');

		// new WOW().init();
	}
	var runsPerfor = true;

	$(window).scroll(function () {
		if (($(document).scrollTop() + $(window).height() > $("#perfor-container").offset().top && $(document).scrollTop() - $("#perfor-container").offset().top < $("#perfor-container").height()) && runsPerfor) {
			runsPerfor = false;

			(function () {

				$(".perfor__item-circle-1").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 2,
					backgroundBorderWidth: 1,
					percent: 84,
					pointSize: 100,
					foregroundColor: "#e01120",
					backgroundColor: "white",
					fontColor: "white"
				});

				$(".perfor__item-circle-2").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 2,
					backgroundBorderWidth: 1,
					percent: 91,
					pointSize: 100,
					foregroundColor: "#e01120",
					backgroundColor: "white",
					fontColor: "white"
				});

				$(".perfor__item-circle-3").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 2,
					backgroundBorderWidth: 1,
					percent: 91,
					foregroundColor: "#e01120",
					backgroundColor: "white",
					fontColor: "white"
				});

				$(".perfor__item-circle-4").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 2,
					backgroundBorderWidth: 1,
					percent: 76,
					foregroundColor: "#e01120",
					backgroundColor: "white",
					fontColor: "white"
				});
			})();
		}

	});
});
