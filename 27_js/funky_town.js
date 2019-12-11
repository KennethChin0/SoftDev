
var foo = function(n){
  return n;
};

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
