//LEVEL 1
for (let i = 0; i < 11; i++) {
    console.log(i) 
}

let i = 0
while (i < 11) {
    console.log(i)
    i++
}

let j = 0
do {
    console.log(j)
    j++
} while (j < 11)

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let k = 10
do {
    console.log(k)
    k--
} while (k >= 0)

let a = 10
while (a >= 0) {
    console.log(a)
    a--
}

function count(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}
count(6)

function stairs1(n) {
    for (let i = 1; i <= n; i++) {
        let stairs = ''
        for (let j = 1; j <= i; j++) {
            stairs += '#'
        }
        console.log(stairs, i)
    }
}
stairs1(5)

function stairs2(n) {
    for (let i = 1; i <= n; i++) {
        let stairs = ''
        for(let j = 1; j <= n - i; j++) {
            stairs += ' '
        }
        for(let k = 1; k <= i; k++) {
            stairs += '#'
        }
        console.log(stairs, i)
    }
}
stairs2(10/2)

// n=4, where s = space
// sss# i = 1, s = 3, # = 1
// ss## i = 2, s = 2, # = 2
// sss# i = 3, s = 1, # = 3
// sss# i = 4, s = 0, # = 4

//to make a space, s = n - i

//using repeat
function hashstairs(n) {
    for (let i = 1; i <= n; i++) {
       let stairs = ' '.repeat(n-i).concat('#'.repeat(i))
       console.log(stairs, i)
    }
}
hashstairs(5)

function hashstairsCase(n) {
    for (let i = 1; i <= n; i++) {
        let stairs = '#'.repeat(i)
        console.log(stairs, i)
    }
}
hashstairsCase(5)

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${Math.pow(i, 2)}\t${Math.pow(i, 3)}`)
}

for (let i = 0; i < 101; i+=2) {
    console.log(i)
}

for (let i = 1; i < 101; i+=2) {
    console.log(i)
}

for (let i = 0; i <= 100; i++) {
    let j = 2
    while (j < i) { //i can also use a for loop here but i hava to declare j outside the loop like it is for while loop
        if (i % j == 0) {
            break
        }
        j++
    }
    if (i == j) {
        console.log(j)
    }
}

//another approach to prime numbers
for (let j = 2; j <= 100; j++) {
    for (let i = 2; i <= j; i++) {
        if (j % i == 0 && i != j) {
            break;
        } else if (j % i == 0) {
            console.log(j);
        }
    }
}

//another approach to prime numbers
for (let i= 0; i <= 100; i++) {
    let x = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            x = false
            break
        }
    }
    if(x == true && i >= 2) {
      console.log(i)
    }
}

let sum = 0
for (let i = 0; i < 101; i++) {
    sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

let oddSum = 0
let evenSum = 0
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        evenSum += i
    } else {
        oddSum += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

const evenArr = []
const oddArr = []
evenArr.push(evenSum)
oddArr.push(oddSum)
console.log(evenArr.concat(oddArr))

const randArr = []
for(let i = 0; i < 5; i++) {
    randArr.push(Math.floor(Math.random() * 11))
}
console.log(randArr)

const uniqueArr = [] 
while(uniqueArr.length < 5) {
    let uniqueNum = Math.floor(Math.random() * 10)
    if (uniqueArr.includes(uniqueNum) == true) continue             
    else uniqueArr.push(uniqueNum)
}
console.log(uniqueArr)

let characters = '0123456789abcdefghijklmnopqrstuvwxyz'
let randChar = ''
for (let i = 0; i < 6; i++) {
    let char = characters[Math.floor(Math.random() * characters.length)]
    randChar += char
}
console.log(randChar)

//LEVEL 2
let randidLength = Math.floor(Math.random() * 30)
let randId = ''
for (let i = 0; i < randidLength; i++) {
    let char = characters[Math.floor(Math.random() * characters.length)]
    randId += char
}
console.log(randId)

let hex = '#'
let hexCharacters = '012346789abcdef'
for (let i = 0; i < 6; i++) {
    let char = characters[Math.floor(Math.random() * hexCharacters.length)]
    hex += char
}
console.log(hex)

let red = Math.floor(Math.random() * 256)
let green = Math.floor(Math.random() * 256)
let blue = Math.floor(Math.random() * 256)

let rgb = `rgb(${red}, ${green}, ${blue})`
console.log(rgb)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
]

const newCountries = []
for(const country of countries) {
    newCountries.push(country.toUpperCase())
}
console.log(newCountries)

const countryLength = []
for (const country of countries) {
    countryLength.push(country.length)
}
console.log(countryLength)

const allCountries = []
for (const country of countries) {
    let eachCountry = [country, country.slice(0, 3).toUpperCase(), country.length]
    allCountries.push(eachCountry)
}
console.log(allCountries)

const countryLand = []
for (const country of countries) {
    if (country.match('land')){
       countryLand.push(country)
    } else continue
}
console.log(countryLand)

const countryIa = []
for (const country of countries) {
    if (country.endsWith('ia')){
       countryIa.push(country)
    } else continue
}
console.log(countryIa)

let maxCountry = Math.max(...countryLength)
console.log(maxCountry)
for (const country of countries) {
    if (country.length == maxCountry) {
        console.log(country)
    }
}

const fiveCountryLength = []
for (const country of countries) {
    if (country.length == 5) {
        fiveCountryLength.push(country)
    }
}
console.log(fiveCountryLength)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const webtechLength = []
for (const webtech of webTechs) {
    webtechLength.push(webtech.length)
}
console.log(webtechLength)

let longestWebTechs = Math.max(...webtechLength)
console.log(longestWebTechs)
for (const webtech of webTechs) {
    if (webtech.length == longestWebTechs) {
        console.log(webtech)
    }
}

const webtechArr = []
for (const webtech of webTechs) {
    webtechArr.push([webtech, webtech.length])
}
console.log(webtechArr)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let MERN = '';
for (const stack of mernStack) {
    MERN += stack.slice(0, 1)
}
console.log(MERN)

for (i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i])
}

const fruits = ['banana', 'orange', 'mango', 'lemon']
const reverseFruits = []
for (let i = fruits.length - 1; i >= 0; i--) {
    reverseFruits.push(fruits[i])
}
console.log(reverseFruits)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (const arrItems of fullStack) {
    for (const item of arrItems) {
        console.log(item.toUpperCase())
    }
}