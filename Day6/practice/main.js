//FOR LOOP
for(let i = 0; i <= 5; i++){
    console.log(i)
}
  
for(let i = 5; i >= 0; i--){
    console.log(i)
}

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum)

let numArr = []
for (let i = 0; i < numbers.length; i++) {
    numArr.push(numbers[i] ** 2)  
}
console.log(numArr)

//WHILE LOOP
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

//DO WHILE LOOP - This first runs once before checking if the condition passes
let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

//FOR OF LOOP - This is used for only arrays and is without indexes
for (const num of numbers) {
    console.log(num)
}

for (const num of numbers) {
    console.log(num * num)
}

let sumNum = 0
for (const num of numbers) {
    sumNum += num
}
console.log(sumNum)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const webtech of webTechs) {
    console.log(webtech.toUpperCase())
}

for (const webtech of webTechs) {
    console.log(webtech[0])
}

let countryArr = []
for (const country of countries) {
    countryArr.push(country.toUpperCase())
}
console.log(countryArr)

//FOR EACH LOOP - This is used only for arrays and the items, index and array itself can be gotten
countryArr.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

//FOR IN LOOP - This is mostly used with objects
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true
}

for (const key in person) {
    console.log(key, person[key]) //how can i get the items in an array nested in object with the for in loop?
}

//BREAK - When this condition is met, the loop stops
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
}

//CONTINUE - When this condition is met, the loop skips it
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
}