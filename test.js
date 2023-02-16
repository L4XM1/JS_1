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
  //console.log(i);

  if (i === 5 || i === 3) {
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
