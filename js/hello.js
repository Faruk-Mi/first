let variableName;
variableName = "Hello Luki";
let result;
let number = 20;

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
// let h1_hello = document.querySelector("h1");

// h1_hello.textContent = variableName;
// h1_hello.textContent = hello;

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
