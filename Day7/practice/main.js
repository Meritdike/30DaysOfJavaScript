// function without parameter,  a function which make a number square
function square1() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square1() // 4
  
  // function without parameter
  function addTwoNumbers1() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers1() // a function has to be called by its name to be executed 

  function printFullName2(){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName2() // calling a function

function printFullName1 (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName1())

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total
}
console.log(addTwoNumbers())

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))

  // Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers1(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers1(10, 20) // calling functions
  // If a function doesn't return it doesn't store data, so it should return
  
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbers(10, 20))
  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'))

  // funtion with multiple parameters
  // this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));

  //ARROW FUNCTION 
  const areaOfCircle2 = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
  }
    console.log(areaOfCircle2(10))


// Let us access the arguments object
function sumAllNums1() {
 console.log(arguments)
}

console.log(sumAllNums1(1, 2, 3, 4))
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

//ARROW FUNCTION
// Let us access the arguments object
const sumAllNums2 = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums2(1, 2, 3, 4)

// function declaration
const sumAllNums3 = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums3(1, 2, 3, 4)) // 10
console.log(sumAllNums3(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums3(15, 20, 30, 25, 10, 33, 40))  // 173

const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
() // calling an anonymous function


// Function expression
const square2 = function(n) {
  return n * n
}
console.log(square2(2)) // calling an anonymous function with the name of its assigned variable

//Self Invoking Functions - functions which do not need to be called to return a value
let sq = (function(a) { // I didn't assign this to sq initially and i got an error
  console.log(a * a)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum1 = (function(n) {
  return n * n
})(10)

console.log(squaredNum1)

//ARROWN FUNCTIONS!!!!!!!
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square3(n) {
  return n * n
}

console.log(square3(2)) // 4

const square4 = n => {
  return n * n
}

console.log(square4(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square5 = n => n * n
console.log(square5)

const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
const printFullName3 = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName3('Asabeneh', 'Yetayeh'))
// The above function has only the return statement, therefore, we can explicitly return it as follows.
const printFullName4 = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullName4('Asabeneh', 'Yetayeh'))

//Function with default parameters
//Regular function
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
function calculateAge(birthYear, currentYear = 2022) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1997))
console.log('Age: ', calculateAge(1997, 2025))
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

//Arrow function
const greetings1 = (name = 'Peter') => {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}
console.log(greetings1())
console.log(greetings1('Asabeneh'))

const generateFullName1 = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(generateFullName1())
console.log(generateFullName1('David', 'Smith'))

const calculateAge1 = (birthYear, currentYear = 2022) => {
  let age = currentYear - birthYear
  return age
}
console.log('Age: ', calculateAge1(1990))
console.log('Age: ', calculateAge1(1990, 2025))

const weightOfObject1 = (mass, gravity = 9.81) => {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}
console.log('Weight of an object in Newton: ', weightOfObject1(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject1(100, 1.62)) // gravity at surface of Moon