// ARRAYS...

// Q 1.

var arr =[];

arr[0] = "moshin"
arr[1] = "akhtar"
arr[2] ="sami"
arr[3] ="nadir"
arr[4] ="khawja"
arr[5] ="farman"

console.log(arr);

// Q 2.

var arr =[];

arr[0] = "moshin"
arr[1] = "akhtar"
arr[2] ="sami"
arr[3] ="nadir"

console.log(arr);

// Q 3.

var car = ["Civic"];

console.log(car);

// Q 4.

var numbers = [1, 2, 3];

console.log(numbers);

// Q 5.

var booleanArray = [true, false];

console.log(booleanArray)

// Q 6.

var mixedArray = [1, "civic", true , false, 1.15]

console.log(mixedArray)

// Q 7.

var qualifications =["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil." ,"Phd"]

document.write(qualifications [0] + "<br>" + qualifications [1] + "<br>" + qualifications [2] + "<br>" + qualifications [3] + "<br>" + qualifications [4] + "<br>" + qualifications [5] + "<br>" + qualifications[6] + "<br>" + qualifications [7]);

// Q 8
var totalmarks = 600
var scores = [320, 450, 550]
var mper = scores[0] / totalmarks * 100;

var jper = scores[1] / totalmarks * 100;

var tper = scores[2] / totalmarks * 100;


document.write( "<br>" + "<br>" + "Score of Micheal is 320. Percentage ; " + mper , "<br>" + "Score of John is 450. Percentage ; " + jper , "<br>" + "Score of Tony is 550. Percentage ; " + tper )


// Q 9.

 colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors);

// Q 9 (a)

var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"];

var newColor = prompt("Enter a color to add to the beginning of the array:");

if (newColor) {
  colors.unshift(newColor);
  
  console.log(colors);
} else {
  console.log("No color entered. Array remains unchanged.");
}

// Q 9 (b)

var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"];

var newColor = prompt("Enter a color to add to the end of the array:");

if (newColor) {
  colors.push(newColor);
  
  console.log(colors);
} else {
  console.log("No color entered. Array remains unchanged.");
}

// Q 9 (c)

var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"];

colors.unshift("Pink", "Cyan");

console.log(colors);

// Q 9 (d)

var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"];

colors.shift();

console.log(colors);

// Q 9(e)

var colors = ["Red", "Green", "Blue"];

colors.pop();

console.log(colors);

// Q 9 (f)

// Array with color names


var colors = ["Red", "Green", "Blue", "Yellow"];

var index = parseInt(prompt("Enter the index where you want to add the color (0 to " + colors.length + "):"));


var newColor = prompt("Enter the color name you want to add:");


if (!isNaN(index) && index >= 0 && index <= colors.length && newColor) {
  
  colors.splice(index, 0, newColor);
  
  console.log("Updated Array:", colors);
} else {
  console.log("Invalid input or color name not entered. Array remains unchanged.");
}


// Q 9 (g) 


var color = ["Red", "Green", "Blue", "Yellow"];

var startIndex = parseInt(prompt("Enter the index from which you want to start deleting colors (0 to " + (colors.length - 1) + "):"));


var deleteCount = parseInt(prompt("Enter the number of colors you want to delete:"));


if (!isNaN(startIndex) && startIndex >= 0 && startIndex < colors.length && !isNaN(deleteCount) && deleteCount >= 0) {

  colors.splice(startIndex, deleteCount);
  

  console.log("Updated Array:", colors);
} else {
  console.log("Invalid input. Array remains unchanged.");
}

// Q10

var studentScores = [320, 230, 480, 120];

studentScores.sort(function(a, b) {
  return a - b;
});

console.log("Ordered Student Scores (Ascending):", studentScores);

// Q11


var cities = ["Karachi", "Islamabad", "Lahore", "Peshawar", "Quetta"];


var selectedCities = [];


selectedCities.push(cities[1]);
selectedCities.push(cities[4]);


console.log("Selected Cities:", selectedCities);


// Q12


var arr = ["This", "is", "my", "cat"];


var singleString = arr.join("");


console.log("Array:", arr);
console.log("String:", singleString);


// Q13


var devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");


var firstDevice = devices.shift();
var secondDevice = devices.shift();
var thirdDevice = devices.shift();
var fourthDevice = devices.shift();


console.log("First Device:", firstDevice);
console.log("Second Device:", secondDevice);
console.log("Third Device:", thirdDevice);
console.log("Fourth Device:", fourthDevice);


// Q14


var lifoStack = [];

lifoStack.push("Value 1");
lifoStack.push("Value 2");
lifoStack.push("Value 3");

var thirdValue = lifoStack.pop();
var secondValue = lifoStack.pop();
var firstValue = lifoStack.pop();

console.log("Third Value (Last In):", thirdValue);
console.log("Second Value:", secondValue);
console.log("First Value (First Out):", firstValue);


// Q15


var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write("<select id='manufacturerSelect'>");


for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");
