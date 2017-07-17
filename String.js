//// String
var a = new String("test");
typeof a; //Object
a.length;

var b = String("hello");
typeof b; //string
b.length;

b.indexOf("h"); - its case sensitive
b.lastIndexOf("l");
b.charAt(0);
b.charCodeAt(0);
b.toLowerCase();
b.toLocaleLowerCase();
b.toUpperCase();
b.toLocaleUpperCase();
b.concat(" world", "!");


/* substring()
substring() extracts characters from indexStart up to but not including indexEnd. In particular:

If indexStart equals indexEnd, substring() returns an empty string.
If indexEnd is omitted, substring() extracts characters to the end of the string.
If either argument is less than 0 or is NaN, it is treated as if it were 0.
If either argument is greater than stringName.length, it is treated as if it were stringName.length.
If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; for example, str.substring(1, 0) == str.substring(0, 1).

index End - given value minus one

*/
var str = "Hello World!";
str.substring(0, 5);
str.substring(5, 0);

str.substring(6, str.length);
str.substring(6);

/* Sub Str 
  2nd argument is the length.
*/

var str = "Canal";
str.substr(2, 3);

/* 
var str = "Canal";
str.substr(2, 3);    // 2nd argument is the length
"nal"

var str = "Canal";
str.substring(2, 3); // 2nd argument is the index to stop.
"n"
*/

/* Split()
	Separator -  Specifies the character(s) to use for separating the string. If separator is an empty string, str is converted to an array of characters.
	Limit -    Integer specifying a limit on the number of splits to be found
*/
var myString = 'Hello World. How are you doing?';
myString.split(' ', 3);
mystring.split(' ');
mystring.split('');

var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); 

/* slice
	The slice() method extracts a section of a string and returns it as a new string.
*/

/* Search()
	The search() method executes a search for a match between a regular expression and this String object.
*/

var str = "HelloWorld!";
str.search('Hello'); // 0


/*
	The includes() method determines whether one string may be found within another string, returning true or false as appropriate.	
	The includes() method is case sensitive. For example, the following expression returns false:
*/

var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false


//Replace()
var str = "Apples are round, apples are juicy";
var aaaa = str.replace(/Apples/gi, 'oranges');