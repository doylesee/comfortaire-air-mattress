$(document).foundation();
$(document).ready(function(){
	// Trigger slide effects when user scrolls down to specific section
	if ($('.slide-content').length != 0) {
		$(window).scroll( function(){
			/* Check the location of each desired element */
			$('.slide-content').each( function(i){
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				/* If the object is completely visible in the window, fade it it */
				if( bottom_of_window > bottom_of_object ){
					if ($(this).hasClass('slide-content-left')) {
						$(this).addClass('slideLeft');
					}
					else if ($(this).hasClass('slide-content-right')) {
						$(this).addClass('slideRight');
					}
					else if ($(this).hasClass('slide-content-down')) {
						$(this).addClass('slideDown');
					}
				}
			}); 
		});
	}
});