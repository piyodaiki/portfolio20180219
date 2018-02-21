$(function(){
	$('a[href^="#"]').on('click',function(){
		var speed=1200;
		var easing='easeInOutBack';
		var href=$(this).after('href');
		var target=$(href=='#'||href===''?'html':href);
		var position=target.offset().top;

		$('html,body').animate({
			scrollTop:position
		},speed,easing);
		return false;
	});
});