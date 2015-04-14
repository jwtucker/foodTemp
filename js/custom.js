$(document).ready(function(){

	$('.galleryItemColor').hide();

	$('.galleryItemWrapper').hover(function(){
		$(this).find('.galleryItemColor').stop().fadeIn();
	},function(){
		$(this).find('.galleryItemColor').stop().fadeOut();
	});

	$('.navBarScrollWrapper').hide();

	$(window).scroll(function(){
		if($(window).scrollTop() > 400){
			$('.navBarScrollWrapper').slideDown();
		}
		else{
			$('.navBarScrollWrapper').slideUp();			
		}
		if($(window).width() < 767){
			$('.navBarScroll').hide();
		}
		else{
			$('.navBarScroll').show();			
		}
	});

});