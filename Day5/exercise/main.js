import { countries } from "./countries.js"
import { webTechs } from "./web_techs.js"

// console.log(countries)
// console.log(webTechs)

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
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let word = text.replace(/[^a-z0-9\s]/ig, '').split(" ")
console.log(word)
console.log(word.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.includes('Meat')
? console.log('Meat is already in the cart!')
: shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.includes('Sugar')
? console.log('Sugar is already in the cart!')
: shoppingCart.push('Sugar')
console.log(shoppingCart)

let isAllergic = true
isAllergic
? shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
: console.log('I do not have honey allergies!')
console.log(shoppingCart)

shoppingCart.splice(-2, 1, 'Green Tea')
console.log(shoppingCart)

let countriesCheck = countries.includes('Ethiopia')
console.log(countriesCheck)
switch(countriesCheck) {
    case true:
        console.log('Ethiopia'.toUpperCase())
        break;
    default:
        countries.push('Ethiopia')
        console.log(countries)
}

let web_techsCheck = webTechs.indexOf('Sass')
console.log(web_techsCheck)
web_techsCheck == -1
? webTechs.push('Sass')
: console.log('Sass is a CSS preprocess')
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//LEVEL 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
let maxAge = Math.max(...ages) // spread operator(...) copies the array(ages) into the method (max())
console.log(maxAge)
let minAge = Math.min(...ages)
console.log(minAge)

let medianAge = ages.slice(Math.round((ages.length - 2) / 2), Math.round((ages.length + 1) / 2))
console.log(medianAge)

let sum = 0;
ages.forEach(age => {
    sum += age;
})
console.log(sum)
let averageAge = sum/ages.length
console.log(averageAge)

let ageRange = `${minAge} - ${maxAge}`
console.log(ageRange)

let maxAvg = Math.abs(minAge - averageAge)
let minAvg = Math.abs(maxAge - averageAge)

switch(true) {
    case maxAvg > minAvg:
        console.log('Difference between maximum age and average age is greater than difference between minimum age and average age')
        break;
    case maxAge < minAge:
        console.log('Difference between maximum age and average age is less than difference between minimum age and average age')
        break;
    default:
        console.log('Difference between maximum age and average age is equal to difference between minimum age and average age')
}

const longCountries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
let firstTenCountries = longCountries.slice(0, 10)
console.log(firstTenCountries)

let middleCountry = longCountries.slice(Math.round((longCountries.length - 2) / 2), Math.round((longCountries.length + 1) / 2))
console.log(middleCountry)

let firstCountriesArr;
let secondCountriesArr;
if(longCountries.length % 2 == 0) {
    firstCountriesArr = longCountries.slice(0, longCountries.length / 2)
    secondCountriesArr = longCountries.slice(longCountries.length / 2)
    console.log(firstCountriesArr)
    console.log(secondCountriesArr)
} else {
    firstCountriesArr = longCountries.slice(0, Math.round(longCountries.length / 2))
    secondCountriesArr = longCountries.slice(Math.round(longCountries.length / 2))
    console.log(firstCountriesArr)
    console.log(secondCountriesArr)
}