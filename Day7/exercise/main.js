//LEVEL 1
function fullname() {
    console.log('Dike Merit')
}
fullname()

const fullname1 = (firstName, lastName) => `${firstName} ${lastName}`
console.log(fullname1('Merit', 'Dike'))

function addNumbers(num1, num2) {
    let sum = num1 + num2
    return sum
}
console.log(addNumbers(5, 7))

function areaOfRectangle(length, width) {
    let area = length * width
    return area + 'm^2'
}
console.log(areaOfRectangle(34, 65))

const perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length + width)
    return perimeter +' m'
}
console.log('Perimeter = ', perimeterOfRectangle(34, 52))

const volumeOfRectPrism = (l, w, h) => {
    let vol = l * w * h
    return vol + 'm^3'
}
console.log(volumeOfRectPrism(5, 3, 7))

const areaOfCircle = (r, PI = Math.PI.toFixed(2)) => { // unassigned or undefined args always comes first before the defined arg
    let area = PI * Math.pow(r, 2)
    return area + 'm^2'
}
console.log(areaOfCircle(4))

function circumOfCircle(r, PI = Math.PI.toFixed(3)) {
    let circumference = 2 * PI * r
    return circumference + 'm'
}
console.log(circumOfCircle(6))

function density(mass, vol) {
    let density = mass / vol
    return density.toPrecision(3) + 'kg/m^3'
}
console.log(density(10, 7))

const speed = (d,t) => d/t + 'm/s'
console.log(speed(2,4))

const weight = (m, g) =>  m*g + 'kg'
console.log(weight(7, 9))

const convertCelsiusToFahrenheit = (oC) => (oC * 9/5) + 32 + 'oF'
console.log(convertCelsiusToFahrenheit(56))

function BMI(m, h) {
    let bmi = (m / Math.pow(h, 2)).toFixed(2)
    if (bmi < 18.5) return `You are Underweight with ${bmi}kg/m^2`
    else if (bmi > 18.5 && bmi <= 24.9) return `You are Normal weight with ${bmi}kg/m^2`
    else if (bmi >= 25 && bmi <= 29.9) return `You are Overweight with ${bmi}kg/m^2`
    else if(bmi >= 30) return `You are Obese with ${bmi}kg/m^2`
    else return 'Input a correct parameter'
}
console.log(BMI(66, 1.73));

function checkMonth(monthCheck) {
    let month = monthCheck[0].toUpperCase() + monthCheck.slice(1).toLowerCase()
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return`${month} has 31 days.`
        case 'September':
        case 'April':
        case 'June':
        case 'November':
            return`${month} has 30 days.`
        case 'February':
            return`${month} has 29 days`
        default:
            return`${month} is not a month of the year`
    }
}
console.log(checkMonth('JUNE'));

function checkSeason(monthCheck) {
    let month = monthCheck[0].toUpperCase() + monthCheck.slice(1).toLowerCase()
    switch (month) {
        case 'January':
        case 'February':
        case 'December':
            return 'Winter'
        case 'March':
        case 'April':
        case 'May':
            return 'Spring'
        case 'June':
        case 'July':
        case 'August':
            return 'Summer'
        case 'September':
        case 'October':
        case 'November':
            return 'Autumn'
        default:
            return `${month} is not a month of the year`
    }
}
console.log(checkSeason('JUNe'));

const findMax = (a, b, c) => Math.max(a,b,c)
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

