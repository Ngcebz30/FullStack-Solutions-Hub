$(function() {
  // window size
  var largeur = ($(window).width()) - 100;
  var hauteur = ($(window).height()) - 100;

  // display square at 100 100
  var p = $('#target').offset();
  p.top= 50;
  p.left= 50;
  $('#target').offset(p);

  // move square on hover
  $("#target").mouseenter(function() {
    x = Math.floor(Math.random()*largeur);
    y = Math.floor(Math.random()*hauteur);
    var p = $('#target').offset();
    p.top = y;
    p.left = x;
    $('#target').offset(p);
  });
  
  // stop game on click
  $("#target").click(function() {
    $("#target").html("Good Game");
    $("#target").css("border-radius", "10%");
    $('#target').off();
  });
});
