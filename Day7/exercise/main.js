//LEVEL 1
function fullname() {
  console.log("Dike Merit");
}
fullname();

const fullname1 = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullname1("Merit", "Dike"));

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(addNumbers(5, 7));

function areaOfRectangle(length, width) {
  let area = length * width;
  return area + "m^2";
}
console.log(areaOfRectangle(34, 65));

const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length + width);
  return perimeter + " m";
};
console.log("Perimeter = ", perimeterOfRectangle(34, 52));

const volumeOfRectPrism = (l, w, h) => {
  let vol = l * w * h;
  return vol + "m^3";
};
console.log(volumeOfRectPrism(5, 3, 7));

const areaOfCircle = (r, PI = Math.PI.toFixed(2)) => {
  // unassigned or undefined args always comes first before the defined arg
  let area = PI * Math.pow(r, 2);
  return area + "m^2";
};
console.log(areaOfCircle(4));

function circumOfCircle(r, PI = Math.PI.toFixed(3)) {
  let circumference = 2 * PI * r;
  return circumference + "m";
}
console.log(circumOfCircle(6));

function density(mass, vol) {
  let density = mass / vol;
  return density.toPrecision(3) + "kg/m^3";
}
console.log(density(10, 7));

const speed = (d, t) => d / t + "m/s";
console.log(speed(2, 4));

const weight = (m, g) => m * g + "kg";
console.log(weight(7, 9));

const convertCelsiusToFahrenheit = (oC) => (oC * 9) / 5 + 32 + "oF";
console.log(convertCelsiusToFahrenheit(56));

function BMI(m, h) {
  let bmi = (m / Math.pow(h, 2)).toFixed(2);
  if (bmi < 18.5) return `You are Underweight with ${bmi}kg/m^2`;
  else if (bmi > 18.5 && bmi <= 24.9)
    return `You are Normal weight with ${bmi}kg/m^2`;
  else if (bmi >= 25 && bmi <= 29.9)
    return `You are Overweight with ${bmi}kg/m^2`;
  else if (bmi >= 30) return `You are Obese with ${bmi}kg/m^2`;
  else return "Input a correct parameter";
}
console.log(BMI(66, 1.73));

function checkMonth(monthCheck) {
  let month = monthCheck[0].toUpperCase() + monthCheck.slice(1).toLowerCase();
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return `${month} has 31 days.`;
    case "September":
    case "April":
    case "June":
    case "November":
      return `${month} has 30 days.`;
    case "February":
      return `${month} has 29 days`;
    default:
      return `${month} is not a month of the year`;
  }
}
console.log(checkMonth("JUNE"));

function checkSeason(monthCheck) {
  let month = monthCheck[0].toUpperCase() + monthCheck.slice(1).toLowerCase();
  switch (month) {
    case "January":
    case "February":
    case "December":
      return "Winter";
    case "March":
    case "April":
    case "May":
      return "Spring";
    case "June":
    case "July":
    case "August":
      return "Summer";
    case "September":
    case "October":
    case "November":
      return "Autumn";
    default:
      return `${month} is not a month of the year`;
  }
}
console.log(checkSeason("JUNe"));

const findMax = (a, b, c) => Math.max(a, b, c);
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//LEVEL 2
function solveLinEquation(a, b, c) {
  let slope = a / b;
  let x = -c / a;
  let y = c / b;

  return `slope = ${slope} \nx-intercept = ${x} \ny-intercept = ${y}`;
}
console.log(solveLinEquation(7, 5, 7));

function solveQuadEquation(a, b, c) {
  let x, y;
  x = ((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
  y = ((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;

  return `Positive value = ${x} \nNegative value = ${y}`;
}
console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}

const printArray = (arr) => {
  let items = "";
  for (const item of arr) {
    items += `${item}\n`;
  }
  return items;
};
const arrItems = ["Merit", "PraiseGod", "Faith", "Joyce"];
console.log(printArray(arrItems));

const showDateTime = () => {
  let today = new Date();
  let date, month, year, hours, minutes;

  date = today.getDate().toString().padStart(2, "0");
  month = (today.getMonth() + 1).toString().padStart(2, "0");
  year = today.getFullYear();
  hours = today.getHours().toString().padStart(2, "0");
  minutes = today.getMinutes().toString().padStart(2, "0");
  return `${date}/${month}/${year} ${hours}:${minutes}`;
};
console.log(showDateTime());

const showDateTime2 = () => {
  let today = new Date();
  let date = (x) => x.toString().padStart(2, "0");
  return `${date(today.getDate())}/${date(today.getMonth() + 1)}/${date(
    today.getFullYear()
  )} ${today.getHours()}:${today.getMinutes()}`;
};
console.log(showDateTime2());

const swapValues = (x, y) => `x => ${y}, y => ${x}`;
console.log(swapValues(3, 4)); // x => 4, y=>3
console.log(swapValues(4, 5)); // x = 5, y = 4

const reverseArray = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

const capitalizeArray = (arr) => {
  let newArr = [];
  for (const item of arr) {
    newArr.push(item.toUpperCase());
  }
  return newArr;
};
console.log(capitalizeArray(["Merit", "PraiseGod", "Faith", "Joyce"]));

let items = ["anatomy", "physiology", "pharmacology", "pathology"];
const addItem = (item) => {
  items.push(item);
  return items;
};
console.log(addItem("Obs and Gynea"));
console.log(addItem("pediatries"));
console.log(addItem("Medicine"));

const removeItem = (index) => {
  items.splice(index, 1);
  return items;
};
console.log(removeItem(0));
console.log(removeItem(1));
console.log(removeItem(2));

const sumOfNumbers = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNumbers(4));

const sumOfOdds = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) continue;
    sum += i;
  }
  return sum;
};
console.log(sumOfOdds(5));

const sumOfEven = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 1) continue;
    sum += i;
  }
  return sum;
};
console.log(sumOfEven(6));

const evensAndOdds = (num) => {
  let countOdd = 0;
  let countEven = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  return `The number of odds are ${countOdd}.\nThe number of evens are ${countEven}.`;
};
console.log(evensAndOdds(100));

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4));

const sumAllNums2 = (...num) => {
  let sum = 0;
  for (const eachNum of num) {
    sum += eachNum;
  }
  return sum;
};
console.log(sumAllNums2(1, 2, 3));

const randomUserIp = () => {
  let w = Math.floor(Math.random() * 256);
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `${w}.${x}.${y}.${z}`;
};
console.log(randomUserIp());

function randomMacAddress() {
  let eachAdd = [];
  for (let i = 0; i <= 5; i++) {
    eachAdd.push(
      Math.floor(Math.random() * 100)
        .toString(16)
        .toUpperCase()
        .padStart(2, "0")
    );
  }
  return `${eachAdd.join(":")}`;
}
console.log(randomMacAddress());

const hexa = () => {
  let colourValue = "0123456789abcdef";
  let hexaColor = "";
  for (let i = 0; i < 6; i++) {
    hexaColor += colourValue[Math.floor(Math.random() * colourValue.length)];
  }
  return `#${hexaColor}`;
};
console.log(hexa());

function hexa2() {
  let hexaColor = "";
  for (let i = 0; i < 6; i++) {
    hexaColor += Math.floor(Math.random() * 100)
      .toString(16)
      .slice(-1);
  }
  return `#${hexaColor}`;
}
console.log(hexa2());

function hexa3() {
  return `#${Math.floor(Math.random() * 10000000)
    .toString(16)
    .slice(-6)
    .padStart(6, "0")}`;
}
console.log(hexa3());

const userIdGenerator = () => {
  let idValue =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHITJKLMNOPQUSTUVWXYZ";
  let userId = "";
  for (let i = 0; i < 6; i++) {
    userId += idValue[Math.floor(Math.random() * idValue.length)];
  }
  return `${userId}`;
};
console.log(userIdGenerator());

//LEVEL 3
// function userIdGeneratedByUser() {
//   let charNum = prompt("How many characters should your user id contain?");
//   let idNum = prompt("How many ids do you want to generate?");
//   let idChar =
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHITJKLMNOPQUSTUVWXYZ";
//   let userId = "";
//   for (let i = 0; i < idNum; i++) {
//     for (let i = 0; i < charNum; i++) {
//       userId += idChar[Math.floor(Math.random() * idChar.length)];
//     }
//     userId += "\n";
//   }
//   return `${userId}`;
// }
// console.log(userIdGeneratedByUser());

function rgbColorGenerator() {
  let rgbColor = [];
  for (let i = 0; i < 3; i++) {
    rgbColor.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${rgbColor})`;
}
console.log(rgbColorGenerator());

function arrayOfHexaColor(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let hexaColor = "#";
    for (let i = 0; i < 6; i++) {
      hexaColor += Math.floor(Math.random() * 100)
        .toString(16)
        .slice(-1);
    }
    arr.push(hexaColor);
  }
  return arr;
}
console.log(arrayOfHexaColor(Math.floor(Math.random() * 10)));

function arrayOfRgbColor(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let rgbColor = [];
    for (let i = 0; i < 3; i++) {
      rgbColor.push(Math.floor(Math.random() * 256));
    }
    arr.push(`rgb(${rgbColor})`);
  }
  return arr;
}
console.log(arrayOfRgbColor(Math.floor(Math.random() * 10)));
