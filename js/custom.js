$(document).ready(function(){

	$('.galleryItemColor').hide();

	$('.galleryItemWrapper').hover(function(){
		$(this).find('.galleryItemColor').stop().fadeIn();
	},function(){
		$(this).find('.galleryItemColor').stop().fadeOut();
	});

});