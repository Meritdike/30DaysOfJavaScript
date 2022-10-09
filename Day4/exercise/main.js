// LEVEL 1
let userAge = prompt('Enter your age: ')
if (userAge >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log(`You are left with ${18 - userAge} years to drive.`)
}

let myAge = prompt('Enter my age')
let yourAge = prompt('Enter your age: ')
let result;
if (myAge < yourAge) {
    result = yourAge - myAge
    console.log(`You are ${result} years older than me.`)
} else {
    result = myAge - yourAge
    console.log(`I am ${result} years older than you.`)
}

let a = 4
let b = 3
if (a > b) {
    result = 'a is greater than b'
    console.log(result)
} else {
    result = 'a is lesser than b'
    console.log(result)
}

let res = a < b
res
? console.log('a is greater than b')
: console.log('a is lesser than b')

let num = +prompt('Enter a number: ')
console.log(typeof num)
if (num % 2 === 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

switch(num % 2 === 0) {
    case true:
        console.log(`${num} is an even number`)
        break
    default:
        console.log(`${num} is an odd number`)
}

result = (num % 2 === 0)
result
? console.log(`${num} is an even number`)
: console.log(`${num} is an odd number`)


//LEVEL 2
let score = +prompt('Enter a score: ')
console.log(score)
console.log(typeof score)
if (score >= 80 && score <= 100) {
    console.log('A')
} else if (score >= 70 && score < 80) {
    console.log('B')
} else if (score >= 60 && score < 70) {
    console.log('C')
} else if (score >= 50 && score < 60) {
    console.log('D')
} else if (score >= 0 && score < 50) {
    console.log('F')
} else {
    console.log('Enter a score greater than zero and less than 100')
}

let monthInput = prompt('Enter a month: ')
let month = monthInput.toLowerCase()

switch(month) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn')
        break
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter')
        break
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring')
        break
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer')
        break   
}

let dayInput = prompt('What is the day today?')
let day = dayInput[0].toUpperCase() + dayInput.slice(1).toLowerCase()
console.log(day)
switch(day) {
    case 'Saturday':
    case 'Sunday':
        console.log(`${day} is a weekend`)
        break
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${day} is a working day`)
}

//LEVEL 3
let monthInput2 = prompt('Enter a month: ')
let month2 = monthInput2[0].toUpperCase() + monthInput2.slice(1).toLowerCase()
console.log(month2)
if (month2 == 'January' || month2 == 'March' || month2 == 'May' || month2 == 'July' || month2 == 'August' || month2 == 'October' || month2 == 'December') {
    console.log(`${month2} has 31 days.`)
} else if (month2 == 'September' || month2 == 'April' || month2 == 'June' || month2 == 'November') {
    console.log (`${month2} has 30 days`)
} else if (month2 == 'February') {
    console.log (`${month2} has 28 days`)
}

switch (month2) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month2} has 31 days.`)
        break
    case 'September':
    case 'April':
    case 'June':
    case 'November':
        console.log(`${month2} has 30 days.`)
        break
    case 'February':
        console.log (`${month2} has 29 days`)
        break
}