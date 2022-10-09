//IF ELSE
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}

let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

// IF ELSE IF ELSE
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

//SWITCH
weather = 'cloudy'
switch(weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    default:
        console.log('No need for rain coat.')
}

// let dayInput = prompt('What day is today')
// let day = dayInput.toUpperCase()

// switch(day) {
//   case 'MONDAY':
//     console.log('Today is Monday')
//     break
//   case 'TUESDAY':
//     console.log('Today is Tuesday')
//     break
//   case 'WEDNESDAY':
//     console.log('Today is Wednesday')
//     break
//   case 'THURSDAY':
//     console.log('Today is Thursday')
//     break
//   case 'FRIDAY':
//     console.log('Today is Friday')
//     break
//   case 'SATURDAY':
//     console.log('Today is Saturday')
//     break
//   case 'SUNDAY':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day. Please input the correct day')
// }

// num = prompt('Enter a number')
// switch(true) {
//   case num < 0:
//     console.log('Number is negative')
//     break
//   case num === 0:
//     console.log('Number is zero')
//     break
//   case num > 0:
//     console.log('Number is positive')
//     break
//   default:
//     console.log('Entered value was not a number. Please input a number')
// }

//TERNARY OPERATORS
isRaining = prompt('Today is a rainny day. Enter true or false')
let answer = (isRaining == 'true')
console.log(answer)
console.log(typeof answer)
answer
? console.log('It is a rainy day.You need a rain coat.')
: console.log('It is not a rainy day. No need for a rain coat.')
