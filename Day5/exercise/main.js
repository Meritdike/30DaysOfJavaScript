import { countries } from "./countries.js"
import { webTechs } from "./web_techs.js"

console.log(countries)
console.log(webTechs)

//LEVEL 1
const arr = Array()
const arrFive = ['Merit', 'Dike', 28, 2022, false, 'Nigeria', 'Port-Harcourt']
console.log(arrFive.length)
console.log(arrFive[0])
console.log(arrFive[3])
console.log(arrFive[arrFive.length - 1])

const mixedDataTypes = Array('iron', 7, 'dog', 'Nathan', true, null, 'sound', 'June')
console.log(mixedDataTypes.length)

const itCompanies = Array('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'KodeCamp')
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[Math.round((itCompanies.length - 1)/ 2)])
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length - 1])

for (let i=0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

for (let i=0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

console.log(itCompanies.join(', ').concat(' are big IT companies.'))

itCompanies.includes('Google')
? console.log('Google')
: console.log('Google is not found')


let arrCompanies = Array()
itCompanies.forEach(company => {
    let eachCompany = company.match(/o/gi)
    console.log(eachCompany)
    if (eachCompany == null || eachCompany.length == 1) {
        arrCompanies.push(company)
    }
   console.log(arrCompanies)
})
console.log(arrCompanies)

let sortCompanies = itCompanies.sort()
console.log(sortCompanies)

let revCompanies = itCompanies.reverse()
console.log(revCompanies)

let lastCompanies = itCompanies.slice(itCompanies.length - 3)
console.log(lastCompanies)

let middleCompany = itCompanies.slice(Math.round((itCompanies.length - 2)/ 2), Math.round((itCompanies.length + 1)/ 2))
console.log(middleCompany)

let firstCompanies = itCompanies.slice(0, 3)
console.log(firstCompanies)

let fisrtCompany = itCompanies.shift()
console.log(fisrtCompany)

let lastComapany = itCompanies.pop()
console.log(lastComapany)

console.log(itCompanies.splice())

//LEVEL 2
