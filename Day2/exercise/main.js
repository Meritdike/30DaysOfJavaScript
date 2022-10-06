//LEVEL 1
let challenge = '30 Days Of JavaScript';
console.log(challenge)
console.log(challenge.length)

console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())

console.log(challenge.substring(3))
console.log(challenge.substr(3, challenge.length))

console.log(challenge.substring(0, 3))
console.log(challenge.substr(0, 2))

console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let twister = 'You cannot end a sentence with because because because is a conjunction'
console.log(twister.indexOf('because'))
console.log(twister.lastIndexOf('because'))

console.log(twister.search('because'))

let string = ' 30 Days Of JavaScript    '
console.log(string.trim())

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))

let regEx = /a/gi;
console.log(challenge.match(regEx))

console.log(twister.concat(' in ', '30 Days of ', 'JavaScript'))
console.log(challenge.repeat(2))

//LEVEL 2
let statement = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
console.log(statement)

let quote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote)

let num = '10'
let checker = typeof num
console.log(num === 10)
let checkerNum = parseInt(num)
console.log(checkerNum === 10)

let num2 = '9.8'
let checker2 = parseFloat(num2)
console.log(num2 === 10)
let checkerNum2 = Math.ceil(num2)
console.log(checkerNum2 === 10)

let python = 'python'
let jargon = 'jargon'

console.log(python.includes('on'))
console.log(jargon.includes('on'))

let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'))

let rand = Math.floor(Math.random() * 101)
console.log(rand)

let rand1 = Math.floor(Math.random() * 51) + 50  //Math.floor(Math.random() * (max - min + 1)) + min {Here, max: 100 aand min: 50}
console.log(rand1)

let rand2 = Math.floor(Math.random() * 256)
console.log(rand2)

let js = 'JavaScript'
let getRanChar = Math.floor(Math.random() * 10)
console.log(js[getRanChar])

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

let because = twister.substr(twister.indexOf('because'), 24)
console.log(because)
console.log(twister.replace(because, ''))

//LEVEL 3
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveSentence.match(/love/gi).length
)
console.log(twister.match(/because/gi).length)

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let charEx = /[^A-Za-z0-9 ]/g  //added space after 9 to keep space in the string ie not replace space
let sentenceMatch = sentence2.match(charEx)
console.log(sentenceMatch)
console.log(sentence2.replace(charEx, ''))

let incomeStatement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = /\d+/g
let annualIncome = incomeStatement.match(income)
let sum = parseInt(annualIncome[0] * 12) + parseInt(annualIncome[1]) + parseInt(annualIncome[annualIncome.length - 1] * 12)
console.log(sum)