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

//LEVEL 2
// let b = prompt('Enter base:')
// let h = prompt('Enter height:')

// let area = 0.5 * h * b;
// alert(`The area of the triangle is ${area}`)

// let a = parseFloat(prompt('Enter side a:'))
// let b = parseFloat(prompt('Enter side b:'))
// let c = parseFloat(prompt('Enter side c:'))

// let perimeter =a + b + c
// alert(`The perimeter of the triangle is ${perimeter}`)

// let length = parseFloat(prompt('Enter the height:'))
// let width = parseFloat(prompt('Enter the width:'))

// let perimeter = 2 * (length + width)
// let area = length * width
// alert(`The area is ${area} and perimeter is ${perimeter}`)

let pi = Math.PI
let r = parseFloat(prompt('Enter the radius: '))
let area = pi * r * r
let circumference = 2 * pi * r
alert(`The area is ${area} and circumference is ${circumference}`)