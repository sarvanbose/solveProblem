//// Array

var num = [1, 2, 3, 4, 5];
num.push(6); //Insert into last index
num.pop(); //Remove the last item
num.unshift(1); //Insert into first
num.shift(); //remove first item

/*sort
 if a > b => return 1 then swap 
	a < b => return -1
	a = b => equal
*/

var a = ["c", "b", "a"];
a.sort();

var obj = [{name: 'a', value:10}, {name:'b', value:2}];
obj.sort(function(a, b) {
	return a.value - b.value;
});


/* Slice 
var numbers = [1,12,4,2,0];
numbers.slice(2, 3);
[4]

var numbers = [1,12,4,2,0];

numbers.splice(2, 3);
(3) [4, 2, 0]
*/
var num = [3, 4, 0, 1, 2];
num.slice(2, 5);

//reverse
var str = "HelloWorld!";
var str1 = str.split("").reverse().join("");

//Map
//The map() method creates a new array with the results of calling a provided function on every element in the calling array.

var numbers = [1,12,4,2,0];

numbers.map(function(a){
 return a* 2;
});
//(5) [2, 24, 8, 4, 0]