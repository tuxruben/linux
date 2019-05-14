(function($){
	$(function(){

		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('#textarea1').val('New Text');
		M.textareaAutoResize($('#textarea1'));
	});
	})(jQuery);

