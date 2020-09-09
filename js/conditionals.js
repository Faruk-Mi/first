/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will
log "Sorry, you are missing at least one value"
*/
// let a = 7;
// let b = 5;

// if (a <= b) {
//   console.log(a + b);
// } else {
//   console.log("Sorry, you are missing at least one value");
// }

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure
*/
let f = 10,
  g = 15,
  h = 20;

if (f >= (g && h)) {
  console.log(f + (h - g));
} else if ((g = f || h)) {
  console.log(f + (g * h - g));
} else {
  console.log(f + (g * h - h));
}

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */

let k = 25;

switch (k) {
  case 25:
    console.log("You're 25");
    break;
  case 26:
    console.log("You're 26");
    break;
  case 27:
    console.log("You're 27");
    break;
  default:
    console.log("You're not 25, 26 or 27");
}
