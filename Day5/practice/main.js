const arr = Array()
// syntax
// This the most recommended way to create an empty list
const arr2 = []
console.log(arr, arr2)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) 
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)

const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits2[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon
const numbers2 = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers2.length)  // => to know the size of the array, which is 6
console.log(numbers2)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers2[0])      //  -> 0
console.log(numbers2[5])      //  -> 100

let lastIndex2 = numbers.length - 1;
console.log(numbers[lastIndex2]) // -> 100
const webTechs2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs2)        // all the array items
console.log(webTechs2.length) // => to know the size of the array, which is 7
console.log(webTechs2[0])     //  -> HTML
console.log(webTechs2[6])     //  -> MongoDB

let lastIndex3 = webTechs.length - 1
console.log(webTechs[lastIndex3]) // -> MongoDB
const countries3 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // List of countries

console.log(countries3)      // -> all countries in array
console.log(countries3[0])   //  -> Albania
console.log(countries3[10])  //  -> Kenya

let lastIndex4 = countries3.length - 1;
console.log(countries3[lastIndex4]) //  -> Kenya
const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex5 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex5]) //  -> Sugar

const numbers3 = [1, 2, 3, 4, 5]
numbers3[0] = 10      // changing 1 at index 0 to 10
numbers3[1] = 20      // changing  2 at index 1 to 20

console.log(numbers3) // [10, 20, 3, 4, 5]

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries2[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex6 = countries2.length - 1
countries2[lastIndex6] = 'Korea' // Replacing Kenya by Korea

console.log(countries2)

const arr3 = Array() // creates an an empty array
console.log(arr3)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
const fruits3 = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables3 = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits3.concat(vegetables3)                 // concatenate the two arrays

console.log(fruitsAndVegetables)

const numbers4 = [1, 2, 3, 4, 5]
console.log(numbers4.length) // -> 5 is the size of the array

console.log(numbers4.indexOf(5)) // -> 4
console.log(numbers4.indexOf(0)) // -> -1 (because it does not exist)
console.log(numbers4.indexOf(1)) // -> 0
console.log(numbers4.indexOf(6)) // -> -1 (because it does not exist)

// let us check if a banana exist in the array

const fruits4 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits4.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

// we can use also ternary here
index === -1 
? console.log('This fruit does not exist in the array')
: console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits4.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

const numbers5 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers5.lastIndexOf(2)) // 7
console.log(numbers5.lastIndexOf(0)) // -1
console.log(numbers5.lastIndexOf(1)) //  6
console.log(numbers5.lastIndexOf(4)) //  3
console.log(numbers5.lastIndexOf(6)) // -1

const numbers1 = [1, 2, 3, 4, 5]

console.log(numbers1.includes(5)) // true
console.log(numbers1.includes(0)) // false
console.log(numbers1.includes(1)) // true
console.log(numbers1.includes(6)) // false

const webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs1.includes('Node'))  // true
console.log(webTechs1.includes('C'))     // false

console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false


console.log(numbers4.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

console.log(numbers4.join()) // 1,2,3,4,5

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs3 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log(webTechs3.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs3.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
console.log(webTechs3.join(' + '))  // "HTML + CSS + JavaScript + React + Redux + Node + MongoDB"

console.log(numbers4.slice()) // -> it copies all  item
console.log(numbers4.slice(0)) // -> it copies all  item
console.log(numbers4.slice(0, numbers.length)) // it copies all  item (because it doesnt copy the last number)
console.log(numbers4.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

console.log(numbers4.splice()) // -> remove all items
numbers4.splice(0,1)
console.log(numbers4)   // remove the first item

const numbers6 = [1, 2, 3, 4, 5, 6]
numbers6.splice(3, 3, 7, 8, 9)
console.log(numbers6.splice(3, 3, 7, 8, 9)) //it removes three item and replace three items

const numbers7 = [1, 2, 3, 4, 5]
numbers7.reverse() // -> reverse array order
console.log(numbers7) // [5, 4, 3, 2, 1]

numbers7.reverse()
console.log(numbers7) // [1, 2, 3, 4, 5]

webTechs.sort()
console.log(webTechs) // arranges items in an ascending order

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]