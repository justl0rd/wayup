$('.callback__open').click(function(){
	$('.callback').css({'top': $(window).scrollTop() +50}).addClass('callback-active');
	$('.callback-block').addClass('callback-active');
	$('.callback-block__bg').click(function(){
		$('.callback-block').removeClass('callback-active');
	});
});

$(window).scroll(function() {
	$('.callback').css({'top': $(window).scrollTop() +50});
}).scroll();

