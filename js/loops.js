/* Write a for loop that will fill an array with the value of the iterating variable
 */

/* Write for in loop for an object nested in another object
 */
let person = {
  name: "Faruk",
  lastname: "Miftari",
  address: {
    street: "Pere Toshev",
    number: "2-A",
    city: "Skopje",
  },
};
for (let n in person.address) {
  console.log(n);
}

/* Write for in loop for the following object {a: 1, b: 2, c: 3} that will log the following:
"a is 1" "b is 2" "c is 3"
*/
let object = { a: 1, b: 2, c: 3 };

for (let n in object.a) {
  console.log("A eshte = " + n);
}

/* Write a for loop that will fill an array with anonimous functions and than another loop
that will execute those functions. In the first loop use the iterating value inside the anonimous functions.
*/
