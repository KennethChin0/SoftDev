// Kenneth Chin
// SoftDev1 pd1
// K05 ...and I want to Paint It Better
// 2020-02-06

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


//e.preventDefault();
//The preventDefault() method cancels the event if it is cancelable, meaning
//that the default action that belongs to the event will not occur.
//For example, this can be useful when:
//    Clicking on a "Submit" button, prevent it from submitting a form
//    Clicking on a link, prevent the link from following the URL
//Note: Not all events are cancelable. Use the cancelable property to find out
//  if an event is cancelable.
//Note: The preventDefault() method does not prevent further propagation of an
//  event through the DOM. Use the stopPropagation() method to handle this.

//ctx.beginPath();
//The beginPath() method begins a path, or resets the current path.
//For example, the method can called before beginning a second line, so that
//they may be drawn with different colors.

//e.offsetX / e.offsetY
//The offsetX property returns the x-coordinate / y-coordinate of the mouse
//pointer, relative to the target element.
//Note: This property is read-only.
