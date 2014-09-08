var lastScroll = 0;
$(document).ready(function() {
	$(document).scroll(function(event) {
		var st = $(this).scrollTop();
		if (st < lastScroll){
			$('footer').removeClass('close');
		} else {
			$('footer').addClass('close');
		}
		lastScroll = st;
	});
});