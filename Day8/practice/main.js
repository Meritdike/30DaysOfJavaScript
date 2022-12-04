//OBJECTS
const person = {};
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person2 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person2);

const person3 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

// accessing values using .
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.age);
console.log(person3.getFullName()); //function does not work for bracket notation
console.log(person3.location); // undefined

// value can be accessed using square bracket and key name
console.log(person3["firstName"]);
console.log(person3["lastName"]);
console.log(person3["age"]);
console.log(person3["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person3["phone number"]);

//OBJECT METHODS - a function inside an object
//We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself.
const person4 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person4.getFullName());
// Asabeneh Yetayeh

const person5 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person5.nationality = "Ethiopian";
person5.country = "Finland";
person5.title = "teacher";
person5.skills.push("Meteor");
person5.skills.push("SasS");
person5.isMarried = true;

person5.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1);

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person5);
console.log(person5.getPersonInfo());

//Object methods: Object.assign, Object.keys, Object.values, Object.entries, hasOwnProperty
//Object.assign: To copy an object without modifying the original object
const person6 = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

const copyPerson = Object.assign({ ...person5 }, person6); //same named key over-rides its he value in the former and replaces with the new value in the copied object
console.log(copyPerson);
console.log(copyPerson.getPersonInfo());

//Object.keys: To get the keys or properties of an object and puts it in an array!
const keys = Object.keys(copyPerson);
console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);

//Object.value: To get the values of an object and puts it in an array!
const values = Object.values(copyPerson);
console.log(values);

//Object.entries: To get the keys and values of an object and puts each pair in an array of array(array of the whole object)!
const entries = Object.entries(copyPerson);
console.log(entries);

//hasOwnProperty: To check if a specific key or property exist in an object and returns a boolean
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("title"));
