 $( document ).ready(function() {

  // prevent more or less elastic scrolling on safari ios
  document.addEventListener("touchmove", function(event){
    event.preventDefault();
  });
  var scrollingDiv = document.getElementById('scroller');
    scrollingDiv.addEventListener('touchmove', function(event){
    event.stopPropagation();
  });

  // function for the popup
  // When the user clicks on <div>, open the popup
  function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});

$(window).on("load", function() {
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
});

function goBack() {
  window.history.back();
}