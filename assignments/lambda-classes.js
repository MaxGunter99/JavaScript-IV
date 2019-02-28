// CODE here for your Lambda Classes

//PERSON
class Person {
    constructor(basicInfo) {
      this.name = basicInfo.name;
      this.age = basicInfo.age;
      this.location = basicInfo.location;
      this.gender = basicInfo.gender;
      this.catchPhrase = basicInfo.catchPhrase;
    }
    //METHOD
    speak() {
      return `Hello! my name is ${this.name}, I'm from ${this.location}. My favorite catchphrase is "${this.catchPhrase}".`;
    }
}//PARENT
  
//INSTRUCTOR
class Instructor extends Person{
    constructor(instructorStuff) {
      super(instructorStuff)
      this.specialty = instructorStuff.specialty;
      this.faveLanguage = instructorStuff.faveLanguage;
      this.subject = instructorStuff.subject;
    }
    //METHODS
    demo() {
      return `Today we are learning about ${this.subject}.`;
    }
    grade () {
      return `${beepulon.name} recieved a perfect score on ${this.subject}!`;
    }
}//CHILD

//STUDENT  
class Student extends Person{
    constructor(extra) {
      super(extra)
      this.name = extra.name;
      this.previousBackground = extra.previousBackground;
      this.className = extra.className;
      this.faveSubjects = extra.faveSubjects;
      this.subject = extra.subject;
    }
    //METHODS
    listSubjects () {
      return `Before lambda, I studdied ${this.faveSubjects}.`;
    }
    prAssignments() {
      return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge() {
      return `${this.name} has begun the Spring Challenge on ${this.subject}`;
    }
}//GRANDCHILD
  
//PROJECT MANAGER
class PM extends Instructor{
    constructor(pm) {
      super(pm)
      this.gradClassName = pm.gradClassName;
      this.faveInstructor = pm.faveInstructor;
    }
    //METHODS
    standup() {
      return `${this.name} announces to Web18: @channel standy times!​​​​​`;
    }
    debugsCode() {
      return `${this.name} debugs ${beepulon.name}'s code on ${this.subject}`;
    }
}//GREAT GRANDCHILD
  
  
//PERSON
const max = new Person ({
    name: 'Max',
    location: 'Texas',
    age: 19,
    gender:'male',
    faveLanguage: 'HTML & CSS',
    specialty: 'Asthetics Dept.',
    catchPhrase: 'Aint no thing like me, except me! - Rocket the Raccoon'
});
  
  
//INSTRUCTOR
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'Pseudo Classical prototypal Inheritance'
});
  
  
//STUDENT
const beepulon = new Student ({
    name: 'Beepulon',
    location: 'Mars',
    age: 330,
    previousBackground: 'Space Invader',
    className: 'CS132',
    catchPhrase: `Take me to your leader`,
    faveSubjects: [
      'Engineering',
      ' Astronomy',
      ' Quantum Science'
    ],
    subject: 'Pseudo Classical prototypal Inheritance'
});
  
  
//PROJECT MANAGER
const projectManager = new PM ({
    name: 'Craig',
    location: 'Bristol',
    age: 30,
    previousBackground: 'Barista',
    catchPhrase: `Its raining cats and dogs!`,
    subject: 'Pseudo Classical prototypal Inheritance',
    gradClassName: 'CS1',
    faveInstructor: 'Sean'
});
  
  
//CONSOLE LOGS
console.log("PERSON");
console.log(max.speak());
console.log("--------------------");
  
console.log("INSTRUCTOR");
console.log(fred.speak());
console.log(fred.demo());
console.log(fred.grade());
console.log("--------------------");
  
console.log("STUDENT");
console.log(beepulon.speak());
console.log(beepulon.listSubjects());
console.log(beepulon.prAssignments());
console.log(beepulon.sprintChallenge());
console.log("--------------------");
  
console.log("PROJECT MANAGER");
console.log(projectManager.speak());
console.log(projectManager.standup());
console.log(projectManager.debugsCode());