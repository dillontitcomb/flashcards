$(document).ready(function(){

  // $(".clickable").click(function() {
  //   $("#operators").toggle();
  //   $("#operators-definition").toggle();
  // });

  $(".clickable").click(function() {
    $(this).children("h3").toggle();
    $(this).children("p").toggle();
  });
});
