

var fibonacci = function(n){
  if (n == 0) return 0;
  if (n == 1) return 1;
  return (fibonacci(n-1) + fibonacci(n-2));
};


var gcd = function(a,b){
  if (a < b){
    return gcd(b, a);
  }
  if (a % b == 0) return b;
  return gcd(a - b, b);
}



var studentslist = ["Kenneth","Winston","Jeff","Nichol","Mr. Mykolyk"]

var randomStudent = function(){
  var rand = Math.floor(Math.random() * studentslist.length);
  return studentslist[rand];
}

/*
Team postfix --  Kevin Cai, Kenneth Chin
SoftDev1 pd9
K28 -- Sequential Progression II: Electruc Boogaloo
2019-12-11
*/


var one = document.getElementById("one");
one.addEventListener("click", factEx);
function factEx(){
  console.log(fibonacci(10));
}

var two = document.getElementById("two");
two.addEventListener("click", gcdEx);
function gcdEx(){
  console.log(gcd(88,56));
}

var three = document.getElementById("three");
three.addEventListener("click", randomStudentEx);
function randomStudentEx(){
  console.log(randomStudent());
}
