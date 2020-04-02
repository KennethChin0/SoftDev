var pic = document.getElementById("vimage");
var circleID, x, y;
deltax = 1;
deltay = 1;
var requestID;

var drawRandom = function(e){
  console.log("hello");
}

var draw = function(e) {
  var x = e.offsetX;//top left corner xcoord of mouse //xcoord of mouse pointer relative to target element
  var y = e.offsetY;//top left corner ycoord of mouse //ycoord of mouse pointer relative to target element
  if (e.target.id == "vimage"){
    var c = document.createElementNS(
      "http://www.w3.org/2000/svg","circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", 15);
      c.setAttribute("fill", "black");
      c.setAttribute("stroke", "black");
      c.setAttribute("dirX", 1);
      c.setAttribute("dirY", 1);
      c.addEventListener("click", function() {
          if (c.getAttribute("fill") == "black"){
            c.setAttribute("fill","cyan");
          }
          else{
            c.setAttribute("cx", Math.random() * 501);
            c.setAttribute("cy", Math.random() * 501);
            c.setAttribute("fill","black");
          }
      });
    pic.appendChild(c);
  }
}


var move= function(){
	window.cancelAnimationFrame(requestID);
	// window.cancelAnimationFrame(dvdId);
	clear();
	x += deltax;
	y += deltay;
	var allCircles = document.getElementsByTagName("circle");
  for (var x = 0; x < allCircles.length; x++){
  var circle = allCircles[x];
  var x1 = parseInt(circle.getAttribute("cx"));
  var y1 = parseInt(circle.getAttribute("cy"));
	if (x + 50 == x1 || x + 2 == 0){
		deltax = -1 * deltax;
		//console.log(dvdX);
	}
	if (y + 43 == y1 || y + 7 == 0){
		deltay = -1 * deltay;
		//console.log(dvdY);
	}
	circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("dirX", deltax);
  circle.setAttribute("dirY", deltay);
  console.log("d  ")
}
	dvdId = window.requestAnimationFrame(move);
}

var clear = function(e) {
  window.cancelAnimationFrame(requestID);
}

pic.addEventListener("click", draw)

var stop = function(e){
  window.cancelAnimationFrame(requestID);
}

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);

var moveButton = document.getElementById("move");
moveButton.addEventListener("click", function(e){move()});

var stopButton = document.getElementById("stop");
stopButton.addEventListener("stop", stop);
