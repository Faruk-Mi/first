let variableName;
variableName = "Hello Luki";
// console.log(typeof variableName); ---> string
let result;
let number = 20;
// console.log(typeof number); ---> number
let hello = "Hello";
let world = "World";
// console.log(hello instanceof String);  ---> spo funksionon

let booleanVariable = true;
let booleanVariableF = false;

//Or And

if ((hello === "Hello" && world === "World") || number > 20) {
  console.log("Hello World");
} else {
  console.log("Goodbye World");
}

// if (hello === "Hello" || world === "UnderWorld") {
//   console.log("Hello World");
// } else {
//   console.log("Goodbye World");
// }

// let resultt;
// let hello;
// hello = 26;
// let faruk = "I am: ";
// resultt = faruk + hello + " years old";
// console.log(resultt);

// I am: 26 years old -- rezultati

/* the same as: 15 + 15  // 30
is "Hello" + "World" // "Hello World" */

result = 0;
console.log("Rezultati eshte: " + result);

/* Function declaration statement */
function shuma(a, b) {
  result = a + b;
}
shuma(5, 5);
console.log("Rezultati eshte: " + result);

// let hello = "Hello World";

/* Find the h1 tag inside index.html */
let h1_hello = document.querySelector("h1");

h1_hello.textContent = variableName;
h1_hello.textContent = hello;

let o = new Object();
/* variable will have similar structure to this one:

 {
     "if key is"  -- a: 1; -- value is one..
     b: 2; 
     hello: "Hello World";
 }
 */

let a = new Array();

/* variable will have similar structure to this one:

["1"(postion-- 0), 5(position-- 1), true(boolean value)(position 2), "hello World"(position-- 3)]
*/

let x = 10;
let b;
b = x;
x = 20; // ---> kopjimi i vlerat primitive nenkupton zevendesim te vlerave

console.log("x eshte " + x);
console.log("b eshte " + b);

// Arrays
let c = ["1", "2"];
let d = [];

d = c;
d[0] = "3"; //---> dmth kur kopjojme vlera komplekse
// meret ndryshimi perfundimtar per te dy vlerat

console.log("d eshte: " + d);
console.log("c eshte: " + c);

// Objects
// let e = { one: "Hello", two: "World" };
// let f = {};

// f = e;
// f.one = "Goodbye";

// console.log("e eshte " + e);
// console.log("f eshte " + f);
