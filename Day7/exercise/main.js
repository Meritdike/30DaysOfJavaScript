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

