//LEVEL 1
const dog = {};
console.log(dog);

dog.name = "Sadam";
dog.legs = 4;
dog.color = "Ash and Black";
dog.age = 8 + " years";
dog.bark = function () {
  return `woof woof`;
};
console.log(dog);

console.log(Object.values(dog));

dog.breed = "German Shepherd";
dog.getDogInfo = function () {
    let dogInfo = `This dog is ${this.name} and it belongs to Mr Dike. ${this.name} is ${this.age} old, has ${this.legs} and is ${this.color} in color. It of ${this.breed} breed and barks like ${this.bark()}. It has been an amazing dog to its owner!`

    return dogInfo
}
console.log(dog.getDogInfo());

//LEVEL 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


let skillCounArr = []
for (const key in users) {
    let eachSkill = users[key].skills.length;
    skillCounArr.push([key, eachSkill])
}
console.log(skillCounArr);

let highest = '';
for (const skill of skillCounArr) {
    highest += skill[1]
}
let cpyNum = [...highest]
let maxSkill = Math.max(...cpyNum)
console.log(maxSkill);

for (const key in users) {
    let eachSkill = users[key].skills.length;
    if (eachSkill === maxSkill) {
        console.log(key);
    } else continue
}

//another method of getting person with highest skills
let userSkills = [], usersArr = Object.entries(users);
for (let user of usersArr) {
    userSkills.push([user[0], user[1].skills]);
}
console.log(userSkills);
let mostSkills = userSkills.reduce((a, b) => a[1].length > b[1].length ? a : b)[0];
console.log(mostSkills);


let loggedIn = 0, points = 0
for (const key in users) {
    if (users[key].isLoggedIn === true) loggedIn += 1
    if (users[key].points >= 50) points += 1
}
console.log(`Logged in users = ${loggedIn} Users having points greater than or equal to 50 = ${points}`);

for (const key in users) {
    let skills = users[key].skills
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node'))  console.log(key)
    else continue
}
//Set your name in the users object without modifying the original users object ie copy the original object and add new user
let newUser = Object.assign({}, users)
newUser['Merit'] = {email:'dike.merit@yahoo.com', skills: [ 'HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: true, points: 70}
console.log(newUser);
console.log(users);

console.log(Object.keys(users))
console.log(Object.values(users))

//LEVEL 3