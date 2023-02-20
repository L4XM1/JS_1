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
  document.write("you ain't coming" + "<br>");
} else {
  document.write("you can come" + "<br>");
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

  if (i === 5 || i === 3) {
    // 7 jbg
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
} else {
  console.log("here's the result of a + b = " + (a + b));
}

//string

var myString1 = 'I am a "fun ninja" string';
var myString2 = 'I\'m a "fun" string'; //escape
console.log(myString2);
console.log(myString1);
console.log(myString1.length); //string is an object, they have methods and properties - length property
console.log(myString1.toUpperCase()); //object method
console.log(myString1.indexOf("string")); //object method //ako ne moze naci vraca -1

if (myString1.indexOf("ninja") === -1) {
  console.log("the word ninja is not in the string");
} else {
  console.log(
    "the word ninja starts at position " + myString1.indexOf("ninja")
  );
}

var string1 = "abc";
var string2 = "ABC";

console.log(string1.toLocaleLowerCase() === string2.toLocaleLowerCase());

string2 = "Bcd";
console.log(string1 < string2); //in js uppercase letter is less than lower

var str = "hello, world";
console.log(str);
var str2 = str.slice(2, 9); //0 based js, from _ to _
console.log(str2);
var str3 = str.slice(2); //0 based js, from _ to end
console.log(str3);

var tags = "fruit, vegetables, nuts, legumes, grains";
console.log(tags);

var tagsArray = tags.split(","); // split on comma
console.log(tagsArray);

//arrays - var that can store multiple values or multiple vars

var myArray = []; //creates an empty array
myArray[0] = 25;
console.log(myArray[0]);
myArray[1] = true;
console.log(myArray[1]);
myArray[2] = "hello";
console.log(myArray[2]);
console.log(myArray);

myArray[1] = false; //updates 2nd index
console.log(myArray);

var myArray2 = [10, 20, "hi", false]; //creates an array and fills it
console.log(myArray2);

var myArray3 = new Array(); // new instance of the Array object

var myArray4 = new Array(5);

//they have methods and properties

console.log(myArray2.length);
console.log(myArray2.sort());
console.log(myArray2.reverse());

//objects - container for data that encloses data that belongs together

var myString = new String();
myString = "hello";
console.log(myString);
console.log(myString.length); //property
console.log(myString.toUpperCase()); //method

var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar1 = new Object();
myCar1.maxSpeed = 140;
myCar1.driver = "Marta";
myCar1.drive = function () {
  console.log("now driving");
};

console.log(myCar1.driver);
myCar1.drive();

// var myCar2 = {} //shorthand for creating a new (empty) object
var myCar2 = {
  maxSpeed: 50,
  driver: "Ninja",
  drive: function (speed, time) {
    //distance travelled
    console.log(speed * time);
  },
  test: function () {
    console.log(this); //this object it is in right now
  },
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

// this keyword

console.log(this); // window obj.
myCar2.test();

var myCar3 = {
  maxSpeed: 180,
  driver: "Alex",
  drive: function (speed, time) {
    //distance travelled
    console.log(speed * time);
  },
  test: function () {
    console.log(this); //this object it is in right now
  },
};

console.log(myCar3);

var myCar4 = {
  maxSpeed: 180,
  driver: "Alex",
  drive: function (speed, time) {
    //distance travelled
    console.log(speed * time);
  },
  logDriver: function () {
    console.log("driver name is " + this.driver); //this object's property (it is in right now)
  },
};

myCar4.logDriver();

//constructor function - quicker/eficient way to make a bunch of objs

var myArray = new Array(); //constructor function
var myArray = new String(); //constructor function
// var myCar5 = new Car(); //constructor function for our "custom obj"

var Car = function (maxSpeed, driver) {
  //capital letter //(variables)
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log("driver name is " + this.driver);
  };
};

var myCar5 = new Car(50, "Gary");
var myCar6 = new Car(40, "Henry");
var myCar7 = new Car(200, "James Bond");
var myCar8 = new Car(80, "Rambo");
var myCar9 = new Car(150, "Spike");

myCar5.drive(30, 5);
myCar7.logDriver();

//date object

var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(1545, 0, 31, 10, 30, 15);
console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1988, 0, 15, 11, 15, 25);
var birthday2 = new Date(1988, 0, 15, 11, 15, 25);

console.log(birthday.getMonth()); // (0-11)
console.log(birthday.getFullYear());
console.log(birthday.getDate()); // (1-31)
console.log(birthday.getDay()); // ( 0 sunday - 6 saturday)(0-6 day of the week)
console.log(birthday.getHours()); // (0-23)
console.log(birthday.getTime()); // (in milliseconds, helps to compare)

if (birthday == birthday2) {
  console.log("birthdays are equal");
} else {
  console.log("birtdays are not equal");
}

if (birthday.getTime() == birthday2.getTime()) {
  console.log("birthdays are equal");
} else {
  console.log("birtdays are not equal");
}

// dom - every html tag is an object /model - hierarchical tree /nodes are anything you can change in html document (tags, attributes and also the text within is a seperate node)

console.log(document.getElementsByClassName("content"));
var myContentDivs = document.getElementsByClassName("content"); //returns all nodes []
console.log(myContentDivs);

var myH2 = myContentDivs[1].getElementsByTagName("h2"); //returns all nodes []
console.log(myH2);

myH2[0].innerHTML = "Hello - this has changed";

console.log(document.getElementById("page-title")); //one element only

var myBody = document.getElementsByTagName("body");
console.log(myBody);

console.log(myBody[0].innerHTML);

// myBody[0].innerHTML = "<p>I am a paragraph tag</p>";

var myTitle = document.getElementById("page-title");
myTitle.textContent = "Hi, I'm learning";

var link = document.getElementById("test");
console.log(link.getAttribute("href")); //value of href
console.log(link.getAttribute("class")); //I added the class name above (var links2) in the for loop

link.setAttribute("class", "pie");
link.setAttribute("alt", "hello");

console.log(link.className);
console.log((link.className = "Class name changed"));

console.log(link.href); //full link

myTitle.setAttribute("style", "position: relative;");
// myTitle.setAttribute("style", "left: 10px;"); //it overrides the 1st one

myTitle.style.left = "20px";
myTitle.style.top = "10px";
myTitle.style.color = "red";
myTitle.style.backgroundColor = "blue";
myTitle.style.width = "250px";

var newLi = document.createElement("li");
console.log(newLi);

var newA = document.createElement("a");
console.log(newA);

var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];

menu.appendChild(newLi); //at bottom
newLi.appendChild(newA);
newA.innerHTML = "Blog";

menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[0];
console.log(child);
var removed = parent.removeChild(child);
parent.appendChild(removed);
