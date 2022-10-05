//PRIMITIVE DATA TYPES
let word = 'JavaScript'
word[0] = 'Y' //does not work

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

// NON-PRIMITVE DATA TYPES
let num = [1, 2, 3]
num[0] = 10

console.log(num)  // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

//NUMBERS
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num3 = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num3)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718 a constant

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)) 
console.log(Math.log(10))
// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)
console.log(Math.LN10)

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

//STRINGS
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

//ESCAPE CHARACTER
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//TEMPLATE STRINGS
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 9
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let c = 2
let d = 3
console.log(`${a} is greater than ${b}: ${a > b}`)

//STRING METHODS
//.length is a method used for strings
let javaScript = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8

//indexes
let string = 'JavaScript'
let firstLetter = string[0]
let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex], firstLetter) 

//.toUpperCase
//.toLowerCase

//.substr - (starting INDEX and number of characters to have)
let string2 = 'JavaScript'
console.log(string2.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land

//.substring - (starting INDEX and ending INDEX but doesnt include the ending index)
let string3 = 'JavaScript'

console.log(string3.substring(0,4))     // Java
console.log(string3.substring(4,10))    // Script
console.log(string3.substring(4))       // Script

let country2 = 'Finland'

console.log(country2.substring(0, 3))   // Fin
console.log(country2.substring(3, 7))   // land
console.log(country2.substring(3))      // land

//.split - changes a string to and array and cuts it at a specific point
let string4 = '30 Days Of JavaScript'

console.log(string4.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string4.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName2 = 'Asabeneh'

console.log(firstName2.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName2.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//.trim - removes spaces
let string5 = '   30 Days Of JavaScript   '

console.log(string5)
console.log(string5.trim(' '))

let firstName3 = ' Asabeneh '

console.log(firstName3)
console.log(firstName3.trim())  // still removes spaces at the beginning and the end of the string

//.include - checks if the argument exit in the string and returns a boolean. it is case sensitive.
let string7 = '30 Days Of JavaScript'

console.log(string7.includes('Days'))     // true
console.log(string7.includes('days'))     // false - it is case sensitive!
console.log(string7.includes('Script'))   // true
console.log(string7.includes('script'))   // false
console.log(string7.includes('java'))     // false
console.log(string7.includes('Java'))     // true

let country3 = 'Finland'

console.log(country3.includes('fin'))     // false
console.log(country3.includes('Fin'))     // true
console.log(country3.includes('land'))    // true
console.log(country3.includes('Land'))    // false

//string.replace(oldsubstring, newsubstring)
let string6 = '30 Days Of JavaScript'
console.log(string6.replace('JavaScript', 'Python')) // 30 Days Of Python

let country4 = 'Finland'
console.log(country4.replace('Fin', 'Noman'))       // Nomanland

//.charAt() - takes an INDEX as an argument and returns the index
let string8 = '30 Days Of JavaScript'
console.log(string8.charAt(0))        // 3

console.log(string8.length)  //takes in spaces
let lastIndex2 = string.length - 1
console.log(string.charAt(lastIndex2)) // t

//.charCodeAt - takes INDEX as an argument and returns the ASCII number equivalent
let string9 = '30 Days Of JavaScript'
console.log(string9.charCodeAt(3))        // D ASCII number is 68

let lastIndex3 = string.length - 1
console.log(string.charCodeAt(lastIndex3)) // t ASCII is 116

//.indexOf - checks if the argument exits in the string and return the index position of the FISRT place its found. if it doesnt exist, it returns -1.
let string1 = '30 Days Of JavaScript'

console.log(string1.indexOf('D'))          // 3
console.log(string1.indexOf('Days'))       // 3
console.log(string1.indexOf('days'))       // -1
console.log(string1.indexOf('a'))          // 4
console.log(string1.indexOf('JavaScript')) // 11
console.log(string1.indexOf('Script'))     //15
console.log(string1.indexOf('script'))     // -1

//.lastindexOf - checks if the argument exits in the string and return the index position of the first character of the LAST place its found. if it doesnt exist, it returns -1.
let strings1 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(strings1.length)
console.log(strings1.lastIndexOf('love'))       // 67
console.log(strings1.lastIndexOf('you'))        // 63
console.log(strings1.lastIndexOf('JavaScript')) // 38

//.concat - can take more than one argument. joins strings
let strings = '30'
console.log(strings.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country5 = 'Fin'
console.log(country5.concat("land")) // Finland

//.startsWith and .endsWith - starts an argument and checks if the strings starts with or ends with that argument respectively. it returns a boolean and case sensitive
let strings2 = 'Love is the best to in this world'

console.log(strings2.startsWith('Love'))   // true
console.log(strings2.startsWith('love'))   // false
console.log(strings2.startsWith('world'))  // false

let country6 = 'Finland'

console.log(country6.startsWith('Fin'))   // true
console.log(country6.startsWith('fin'))   // false
console.log(country6.startsWith('land'))  //  false

//.search - similar to .includes but returns the INDEX of the first match and can be used in RegEx too returns -1 if not found
let strings3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(strings3.search('love'))          // 2
console.log(strings3.search(/javascript/i))  // 7

//.match - takes a string or a regEx, searches if it matches and returns an array if present or null if not
let strings4 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(strings4.match('love'))
let pattern = /love/gi
console.log(strings4.match(pattern))   // ["love", "love", "love"]

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d/g
let regEx1 = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(regEx1)) 
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]


//.repeat - takes a number as an argument and repeats the string that number of times
let strings5 = 'love '
console.log(strings5.repeat(10))

//DATA CASTING
let num1 = '10.7'
let numInt = parseInt(num1)
console.log(numInt) //returns an integer even for float numbers
console.log(Number(num1))
console.log(+num1)
console.log(parseFloat(num1))
