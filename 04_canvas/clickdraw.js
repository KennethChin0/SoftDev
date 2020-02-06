const canvas = document.getElementById('slate');
const ctx = canvas.getContext('2d');
const check = document.getElementById('check');
var toggle = true;


var isChecked = function(e) {
  if (toggle){
    toggle = false;
  }
  else {
  toggle = true;
}
}
var draw = function(e) {
  if (toggle){
    ctx.beginPath();
    ctx.arc(e.clientX - 8, e.clientY - 8, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
  else{
    ctx.beginPath();
    ctx.fillRect(e.clientX, e.clientY, 20, 10);
  }
}



var clear = function(e){
  ctx.clearRect(0,0,500,500);
}


var button = document.getElementById('clear');
button.addEventListener("click", clear);
canvas.addEventListener("click", draw);
check.addEventListener("click", isChecked);
