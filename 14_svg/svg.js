var pic = document.getElementById("vimage");

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
	window.cancelAnimationFrame(dvdId);
	clear()
	x += deltax;
	y += deltay;
	//console.log(dvdX);
	if (x + 50 == c.width || x + 2 == 0){
		deltax = -1 * deltax;
		//console.log(dvdX);
	}
	if (y + 43 == c.height || y + 7 == 0){
		deltay = -1 * deltay;
		//console.log(dvdY);
	}
	draw();
  console.log("d  ")
	dvdId = window.requestAnimationFrame(move);
}

var clear = function(e) {
  while (pic.lastChild){
    pic.removeChild(pic.lastChild);
  }
}

pic.addEventListener("click", draw)


var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
var moveButton = document,getElementById("move";)
moveButton.addEventListener("click", function(e){move(); draw()});
