// var old = prompt("How should the title be?");
// document.getElementById("new").innerHTML = old;

// // Create a function
// function fun() {
//   console.log("This is a function");
// }
// //Call the function
// fun();

// Lets create a function that take in a name and says hello followed by your name
// Creating
// function greeting() {
//   var name = prompt("Whats your name?");
//   var result = "Hello" + " " + name; // String Concatenation
//   console.log(result);
// }
// // Calling the function
// greeting();

// Creating function while declaring a varaiable outside of the function and than just callin it

// function football() {
//   var result = "My favourite team is: " + myTeam;
//   console.log(result);
// }

// var myTeam = prompt("Who's your favourite team?");
// football();

// the both with have the same result but this one is better to use, more practical
// function football(myTeam) {
//   var result = "My favourite team is: " + myTeam;
//   console.log(result);
// }

// var team = prompt("Who's your favourite team?");
// football(team);

// The Addition of two number using a function

// function sum(num1 = 4, num2 = 6) {
//   var result = num1 + num2;
//   console.log(result);
// }
// sum();

// More practical is the following code

// function sum(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
// }
// sum(4, 6);

// -------------------------------------------------------------------------------

// LOOPS

//the while loop

// var num = 50;

// while (num < 100) {
//   num += 1; // num++; the same result
//   console.log(num);
// }

//---------------------------------------

// the for loop

// the variables must be inside the braces
// for (let num = 0; num <= 100; num++) {
//   // the last part its prefered with num++
//   console.log(num);
// }

// ---------------------------------------------------------

// DATA TYPES

// let yourAge = 26; // number
// let yourName = "Faruk"; // string
// var name = { first: "Faruk", last: "Miftari" }; // object
// let truth = false; // boolean
// let groceries = ["banana", "apple", "ananas"]; // array
// let random; // undefined
// let nothing = null; // value null

//------------------------------------------------------------

// STRINGS IN JAVASCRIPT (COMMON METHODS)

// let fruit = "banana";
// let morefruits = "banana\napple"; // new line
// console.log(fruit.length); // result == 6
// console.log(fruit.indexOf("nan")); // result == 2 "starting from 0"
// console.log(fruit.slice(0, 3)); // result == ban
// console.log(fruit.replace("ban", 123)); // result == 123ana
// console.log(fruit.toLowerCase()); // result == banana
// console.log(fruit.toUpperCase()); // result == BANANA
// console.log(fruit.charAt(2)); // result == n "starting from o"==the second charachter of banana wich is n
// console.log(fruit[2]); // result == the same as the result above == n
// fruit = "banana, apple";
// console.log(fruit.split(",")); // result == (2) "banana", "apple" --->split by comma
// console.log(fruit.split("")); // result == (13) "b", "a", "n", "a", .... till the last letter ---> split by characters

//----------------------------------------------------------

// ARRAYS

// let fruits = ["banana", "apple", "orange", "pineapples"];
// fruits = new Array("banana", "apple", "orange", "pineapples");

// console.log(fruits[2]); // access value at index number 2

// fruits[0] = "kiwi"; // changes index o, which means banana == kiwi, ("kiwi", "apple", ....)
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // ARRAYS COMMON METHODS

// console.log("to string", fruits.toString()); // result == to string kiwi, apple, ....
// console.log(fruits.join(" + ")); // result == kiwi + apple + ....
// console.log(fruits, fruits.pop(), fruits); // removes last item
// console.log(fruits.push("blackberries"), fruits); // appends - dmth shton
// fruits[4] = "strawberry"; // same as push "but in this case while we had 4 items, and with index 4 we add the fifth item"
// fruits[fruits.length] = "new fruit"; // also same as push
// console.log(fruits);
// fruits.shift(); // removes first element on an array
// console.log(fruits);
// fruits.unshift("grapes"); // adds first element on an array
// console.log(fruits);

// let vegetables = ["broccoli", "tomato", "potatos"];
// let allGroceries = fruits.concat(vegetables); // combine arrays
// console.log(allGroceries);
// console.log(allGroceries.slice(1, 4)); // slice("ndaji") elements with index from 1 to 4, means apple, orange, blackberries
// console.log(allGroceries.reverse()); // should reverse the element from the last to the first
// console.log(allGroceries.sort());

// let someNumbers = [4, 10, 25, 6, 98, 120, 10, 34, 87, 4];
// console.log(
//   someNumbers.sort(function (a, b) {
//     // result == ascendig order ---> starting from the smallest number to the bigest
//     return a - b;
//   })
// );

// console.log(
//   someNumbers.sort(function (a, b) {
//     // result == descendig order ---> starting from the bigest numbers to the smallest
//     return b - a;
//   })
// );

// // ADDING ELEMNTS ON AN EMPTY ARRAY

// let emptyArray = new Array();
// for (let num = 5; num <= 10; num++) {
//   emptyArray.push(num);
// }
// console.log(emptyArray);
