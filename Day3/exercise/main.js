//LEVEL 1
let firstName = 'Merit'
let lastName = 'Dike'
let country = 'Nigeria'
let city = 'Lagos'
let age = 35;
let isMarried = false
let year = 1987;

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log(typeof '10' == 10)
console.log(parseInt('9.8') == 10)

console.log(47 > 40)
console.log(' ' == false)
console.log('' == false)
console.log(0 == false)
console.log(null == undefined)

console.log(null === undefined)
console.log(NaN == NaN)
console.log(1 == false)
console.log("6" == false)
console.log("" === false)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length < 'jargon'.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('python'.includes('on')))
console.log(!('jargon'.includes('on')))

let now = new Date();
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay()+ 1)
console.log(now.getHours())
console.log(now.getMinutes())
console.log(Date.now())
console.log(now.getTime())

// LEVEL 2
let base = prompt('Enter base:')
let h = prompt('Enter height:')

let areaOfTriangle = 0.5 * h * base;
alert(`The area of the triangle is ${areaOfTriangle}`)

let a = parseFloat(prompt('Enter side a:'))
let b = parseFloat(prompt('Enter side b:'))
let c = parseFloat(prompt('Enter side c:'))

let perimeterOfTriangle =a + b + c
alert(`The perimeter of the triangle is ${perimeterOfTriangle}`)

let length = parseFloat(prompt('Enter the height:'))
let width = parseFloat(prompt('Enter the width:'))

let perimeter = 2 * (length + width)
let areaOfSquare = length * width
alert(`The area is ${area} and perimeter is ${perimeter}`)

let pi = Math.PI
let r = parseFloat(prompt('Enter the radius: '))
let area = pi * r * r
let circumference = 2 * pi * r
alert(`The area is ${area} and circumference is ${circumference}`)

// equation: y = 2x-2. Find slope, x and y intercepts. formular: y=mx+c where m=slope
let m = 2
c = -2

let slope1 = m
console.log(`Slope = ${slope1}`)
console.log(`x-intercept = ${-c/m}`) // where y = 0;
console.log(`y-intercept = ${c}`) //y-intercept is usually equal to the slope in a linear equation which is c in this case

//equation: (x1: 2, y1: 2)(x2: 6, y2: 10)
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10

let slope2 = (y2-y1)/(x2-x1)
console.log(`Slope = ${slope2}`)

console.log(slope1 === slope2)

//equation: y = x2 + 6x + 9
let x = 0 
x = 2 
x = -6
x = -3 //at -3, y=0
let y = x**2 + 6*x +9
console.log(y)

let hours = parseFloat(prompt('Enter hours: '))
let hoursPerRate = parseFloat(prompt('Enter hours per rate: '))
let result = hours * hoursPerRate
alert(`Result = ${result}`)

let userName = prompt('Enter your name')
if (userName.length > 7) {
    console.log('Your name is long')
} else {
    console.log('Your name is short')
}

let fName = prompt('Enter your  firstname')
let lName = prompt('Enter your lastname')
console.log(`Your first name, ${fName} is longer than your family name, ${lName}`)
if (fName.length > lName.length) {
    console.log(`Your first name is longer than your last name`)
} else {
    console.log(`Your first name is shorter than your last name`)
}

let myAge = 92
let yourAge = 29
console.log(`I am ${myAge - yourAge} years older than you.`)

let yearOfBirth = parseInt(prompt('Enter birth year:'))
let today = new Date()
let yearToday = today.getFullYear()
let userAge = yearToday - yearOfBirth
let yearLeft = 18 - userAge
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive`)
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${yearLeft} years.`)
}

let myYears = parseInt(prompt('Enter number of years you live: '))
let secsLived = myYears * 60 * 60 * 24 * 365
console.log(`${secsLived}`)

let rYear = today.getFullYear()
let rMonth = today.getMonth() + 1
let rDate = today.getDate()
let rHour = today.getHours()
let rMins = today.getMinutes()

console.log(`${rYear}-${rMonth}-${rDate} ${rHour}:${rMins}`)
console.log(`${rDate}-${rMonth}-${rYear} ${rHour}:${rMins}`)
console.log(`${rDate}/${rMonth}/${rYear} ${rHour}:${rMins}`)


//LEVEL 3
let doubleDigitHour = rHour.toString().padStart(2, '0') //padStart(maxlength, fillWith-a string)
let doubleDigitMins = rMins.toString().padStart(2, '0')

console.log(`${rYear}-${rMonth}-${rDate} ${doubleDigitHour}:${doubleDigitMins}`)
