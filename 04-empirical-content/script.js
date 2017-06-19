// update slider
function outputUpdate(vol) {
	document.querySelector('#output').value = vol;

	$("#pictures img").each(function() {
		if ( $(this).attr('likes') < parseInt(vol) ) {
			$(this).addClass('hide');
			$(this).siblings().remove();

			$(this).after( '<p class="likesonpict"> <img src="../like.png" style="width:16px;"/> &nbsp;' + $(this).attr('likes') + '</p>' );

			$(this).parent().addClass('order');

		} else {

			$(this).removeClass('hide');
			$(this).siblings().remove();

			$(this).parent().removeClass('order');
		}
	});

	// auto scrolling
	setTimeout(function(){ 
		$('#scroller, body, html').clearQueue();
		scrollTop = $("#scroller").scrollTop() + $( ".order" ).last().children().offset().top;
		$('#scroller, body, html').animate({ scrollTop: scrollTop - 300 });
	}, 50);

}

$(document).ready(function(){

	// create array with pictures id and likes
	var picsLikes = [];

	$( "#pictures img" ).each(function() {
	  var pic = [ $(this).attr('id'), $(this).attr('likes')];
	  picsLikes.push(pic);
	});

	$("#scroller, html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
    $('html, body').stop();
	});


});