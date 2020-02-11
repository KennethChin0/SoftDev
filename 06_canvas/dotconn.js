// Kenneth Chin
// SoftDev1 pd1
// K06 Dot Dot Dot
// 2020-02-11

const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');
const check = document.getElementById('check');
var x,y;

var draw = function(e) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    var x0 = e.clientX;
    var y0 = e.clientY;
    ctx.lineTo(x0,y0);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x0 , y0 , 5, 0, 2 * Math.PI);
    ctx.fill();
    x = x0;
    y = y0;
}



var clear = function(e){
  ctx.clearRect(0,0,500,500);
}


var button = document.getElementById('clear');
button.addEventListener("click", clear);
canvas.addEventListener("click", draw);
