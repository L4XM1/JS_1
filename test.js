// alert("hello world");

/*
function myFunction() {}
    myfunction(); //case-sensitive, so not the same

*/

//make the image invisible
//move the image from top to bottom
//make thr image visable

var youLikeMe = true;
var myNum = 10;

if (youLikeMe) {
  document.write("you like me " + "<br>");
} else {
  document.write("you don't like me " + "<br>");
}

var myAge = 19;

if (myAge > 30) {
  document.write("you are over 30" + "<br>");
} else if (myAge > 20) {
  document.write("you are over 20" + "<br>");
} else if (myAge > 10) {
  document.write("you are over 10" + "<br>");
} else {
  document.write("you are not over 10" + "<br>");
}

var myAge = 26;

if (myAge < 18 || myAge > 30 || myAge === 25) {
  document.write(" u ain't coming" + "<br>");
} else {
  document.write(" u can come" + "<br>");
}

var age = 4;

while (age < 8) {
  console.log("your age is less than 8");
  age++;
}

document.write(" you are now over 8" + "<br>");

var links = document.getElementsByTagName("a");
for (i = 1; i <= links.length; i++) {
  console.log("this is link number " + i);
}
document.write(" you are now over 10");
console.log(links);

for (i = 0; i < 10; i++) {
  // console.log("joj" + i); // 7

  if (i === 5 || i === 3) { // 7 jbg
    continue;
  }
  console.log(i);

  if (i === 7) {
    break;
  }
}

console.log("I have broken out of the loop");

var links2 = document.getElementsByTagName("a");

for (i = 0; i < links2.length; i++) {
  links2[i].className = "link-" + i;
}

function getAverage(a, b, c, d, e, f) {
  var average = (a + b + c + d + e + f) / 6; //local var
  console.log(average);
  return average;
}

var myResult = getAverage(7, 8, 9, 10, 11, 12); //global var
console.log("the average is " + myResult);

function logResult() {
  console.log("the average is " + myResult + " inside the function");
}

logResult();


//numbers

var a = "7";
var b = 5;

console.log(a + b); //string
// console.log(typeof (a + b));

console.log(Math.round(7.5)); //Math object
console.log(Math.ceil(7.8));
console.log(Math.floor(7.8));
console.log(Math.max(7, 4, 9, 8)); // max num
console.log(Math.PI); // max num

//NaN

console.log(a * b); //vraca broj

var a = "apple";
console.log(a * b); //vraca NaN

if (!isNaN(a)) {
  console.log("that's not a number");
} else{
  console.log("here's the result of a + b = " + (a + b));
}


//string

var myString1 = 'I am a "fun ninja" string';
var myString2 = 'I\'m a "fun" string'; //escape
console.log(myString2); 
console.log(myString1);
console.log(myString1.length);//string is an object, they have methods and properties - length property
console.log(myString1.toUpperCase()); //object method
console.log(myString1.indexOf("string")); //object method //ako ne moze naci vraca -1

if (myString1.indexOf("ninja") === -1) {
  console.log("the word ninja is not in the string");
} else{
  console.log("the word ninja starts at position " + myString1.indexOf("ninja"));
}


var string1 = "abc";
var string2 = "ABC";

console.log(string1.toLocaleLowerCase() === string2.toLocaleLowerCase());

string2 = "Bcd";
console.log(string1 < string2); //in js uppercase letter is less than lower

var str = "hello, world";
console.log(str);
var str2 = str.slice(2,9); //0 based js, from _ to _
console.log(str2);
var str3 = str.slice(2); //0 based js, from _ to end
console.log(str3);

var tags = "fruit, vegetables, nuts, legumes, grains";
console.log(tags);

var tagsArray = tags.split(","); // split on comma
console.log(tagsArray);



