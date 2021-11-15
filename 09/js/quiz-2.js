var start = document.querySelector("#start");

start.addEventListener("click", function () {
  var radius = parseFloat(document.querySelector("#radius").value);
  var round = 2 * Math.PI * radius;
  var area = Math.PI * Math.pow(radius, 2);
  document.querySelector("#round").value = round;
  document.querySelector("#area").value = area;
});
