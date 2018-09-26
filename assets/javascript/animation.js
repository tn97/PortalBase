function UtilSuite (){
  
  var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: function (el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
$(".color").on("click", function () {
  $("#g").attr("stroke", "")
  color = $(this).text();
  console.log(color);
  $("#g").attr("stroke", color);
});

}

UtilSuite ();