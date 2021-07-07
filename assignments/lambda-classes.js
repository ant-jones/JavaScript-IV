// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(attr){
         super(attr);
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhras;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Instructor{
    constructor(attr){
            super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        }
    listsSubjects(){
        return diamond.favSubjects;                   
        }
        
    PRAssignment(subject){
        return `${Student.name} has submitted a PR for ${subject}` ;
        }
    sprintChallenge(subject){
        return `${Student.name} has begun sprint challenge on ${subject}`;
        }
}

class Project_Manager extends Student{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const sheri = new Instructor({
    name: 'Sheri',
    location: 'NYC',
    age: 32,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `How you doing?`
  });

  const paul = new Student({
    name: 'Paul',
    location: 'Jamaica',
    age: 22,
    previousBackground: "student",
    className: "Webb23",
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const diamond = new Student({
    name: 'Diamond',
    location: 'New Jersey',
    age: 25,
    previousBackground: "waitress",
    className: "DS123",
    favSubjects: ["Linear_Models", "Tree_Ensembles", "Applied_Modeling"]
  });

  const roger = new Student({
    name: 'Roger',
    location: 'Cali',
    age: 21,
    previousBackground: "play video games",
    className: "IOS",
    favSubjects: ["‍Images", "Audio", "Video", "Objective_C"]
  });

  const sam = new Project_Manager({
      name: "Sam",
      location: "Texas",
      age: 42,
      gradClassName: "Web20",
      favInstructor: "Sheri"
  })

  
  console.log(fred.speak());
  console.log(fred.demo("Java."));
  console.log(paul.grade(paul, "Css."));
  console.log(diamond.listsSubjects());
  console.log(roger.PRAssignment(roger.name, "Video."));
  console.log(paul.sprintChallenge(paul.name, "JavaScript"));
  console.log(sam.standUp("#to_all"));
  console.log(diamond.debugsCode("Appiled_Modeling"));
  