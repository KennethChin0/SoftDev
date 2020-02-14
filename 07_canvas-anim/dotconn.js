// Kenneth Chin
// SoftDev1 pd1
// K07 They lock us in the tower whenever we get caught
// 2020-02-12

const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');
const check = document.getElementById('check');
var r = 10;
var grow = true;
var stop = false;


var draw = function(e) {
    ctx.beginPath();
    if (stop){
      run = setInterval(draw, 20);
      stop = false;
    }
    if (grow){
        r++;
        if (r == 250){
            grow = false;
        }
    }
    else {
      r--;
      if (r == 10){
        grow = true;
      }
    }
    clean();
    ctx.arc(250 , 250 , r, 0, 2 * Math.PI);
    ctx.fillStyle = "#3370d4";
    ctx.fill();
}

var clean = function(e){
  ctx.clearRect(0,0,500,500);
}


var clear = function(e){
  // console.log("here");
  clearInterval(run)
  stop = true;
}

var run = setInterval(draw, 20);
var button = document.getElementById('Start');
button.addEventListener("click", draw);
var button1 = document.getElementById('Stop');
button1.addEventListener("click", clear);
