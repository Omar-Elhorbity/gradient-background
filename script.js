var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var opacity = document.getElementById("opacity");

function colorPicker(){
	var opacityValue = opacity.value;
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	body.style.opacity = opacityValue;
	css.textContent = body.style.background + "."; 
}

color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);
opacity.addEventListener("input", colorPicker);

var randomButton = document.getElementById("randomButton");

randomButton.addEventListener("click", function() {
  var randomColor1 = getRandomColor();
  var randomColor2 = getRandomColor();
  color1.value = randomColor1;
  color2.value = randomColor2;
  colorPicker();
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}