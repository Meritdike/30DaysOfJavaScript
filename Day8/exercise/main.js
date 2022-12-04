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