$(window).on('load', function() {});
$(document).ready(function() {

	var currentTime = new Date().getHours();
	console.log(currentTime);
	if (17 <= currentTime || currentTime < 8) {
		console.log('night time');
	} else {
		console.log('daytime');
		$('#layer-3, #layer-4, #layer-5').remove()
	}

	setInterval(function() {
		$('.svg_lights_layer').css('opacity', Math.random());
	}, 500)
	// console.log($('#stars path'));
	$('#stars path').each(function(index, val) {
		setInterval(function() {
			if (Math.random() > 0.5) {
				var opacity = 1;
			} else {
				var opacity = 0
			}
			$(val).css('opacity', opacity);
		}, 200);
	});
});
