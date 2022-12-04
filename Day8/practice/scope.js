//scope.js
a = "JavaScript"; // declaring a variable without let or const make it available in browser window object and this found anywhere
b = 10; // this is a global scope variable and found in the browser window object
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // This makes it accessible in the browser console

//scope.js
let aNew = "JavaScript"; // is a global scope it will be found anywhere in this file
let bNew = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(aNew, bNew); // JavaScript 10, accessible
  if (true) {
    let aNew = "Python";
    let bNew = 100;
    console.log(aNew, bNew); // Python 100
  }
  console.log(aNew, bNew);
}
letsLearnScope();
console.log(aNew, bNew); // JavaScript 10, accessible

//scope.js
let a2 = "JavaScript"; // is a global scope it will be found anywhere in this file
let b2 = 10; // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope2() {
  console.log(a2, b2); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a2 = "Python";
    let b2 = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a2, b2, c, d, value); // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a2, b2, value); // JavaScript 10 true
}
letsLearnScope2();
console.log(a2, b2); // JavaScript 10, accessible

//scope.js
//VAR does NOT go beyond function!!!! That is var is function scoped
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
console.log(gravity); // undefined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

//scope.js
//LET and CONST is block scoped and does not go beyond any code wrapped in {}
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity2 = 9.81;
  console.log(gravity2);
}
//   console.log(gravity2) //undefined

if (true) {
  const gravity2 = 9.81;
  console.log(gravity2); // 9.81
}
//   console.log(gravity2) //undefined

for (let j = 0; j < 3; j++) {
  console.log(j); // 0, 1, 2
}
//   console.log(j) //undefined
