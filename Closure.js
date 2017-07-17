// /closure

var c1 = 1;
function cloTest() {
 var c2 = 2;
 var sum = function(c3, c4) {
   return c1 + c2 + c3 + c4;
 }
 
 sum(7, 10);
}

console.log(cloTest());