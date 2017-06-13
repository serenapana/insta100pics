// update slider
function outputUpdate(vol) {
	document.querySelector('#output').value = vol;
	$("#pictures img").each(function() {
		if ( $(this).attr('likes') < parseInt(vol) ) {
			$(this).addClass('hide');
			$(this).siblings().remove();

			$(this).after( '<span>' + $(this).attr('likes') + '</span>' );

			$(this).parent().addClass('order');

		} else {

			$(this).removeClass('hide');
			$(this).siblings().remove();

			$(this).parent().removeClass('order');
		}
	});
}

$(document).ready(function(){

	// create array with pictures id and likes
	var picsLikes = [];

	$( "#pictures img" ).each(function() {
	  var pic = [ $(this).attr('id'), $(this).attr('likes')];
	  picsLikes.push(pic);
	});

});