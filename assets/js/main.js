 $( document ).ready(function() {



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