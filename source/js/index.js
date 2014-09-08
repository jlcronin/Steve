var lastScroll = 0,
	timeout;
$(document).ready(function() {
	$(document).scroll(function(event) {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			var st = $(this).scrollTop();
			if (st < lastScroll){
				$('footer').removeClass('close');
			} else {
				$('footer').addClass('close');
			}
			lastScroll = st;
		}, 250);
	});
});