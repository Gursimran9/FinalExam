// JavaScript Document

class Person {//Created a class named person
  constructor(name, age, gender, interests) { //Created constructor with 4 Parameters i.e. name,age,gender,interests
    this.name=name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {       //Created a greeting function

    //output the statement in console
    console.log(`Hi! I'm ${this.name}`);  //statement display will be 'Hi! I'm and the name initiated'
  };

  bye() {       //Created a bye function

    //Output the statement in console
    console.log(`${this.name} has left the building. Bye for now!`);//statement display will be 'Initiated name has left the building. Bye for now!`
  };
}


let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);//Created an object instance of Person and passing name,age,gender,interests
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);
//Created second object instance of Person and passing name,age,gender,interests

class Teacher extends Person {//Created class teacher that inherits class person
  constructor(name, age, gender, interests, subject, grade) { //Initialised constructor with 6 Parameters i.e. name,age,gender,interests,subject,Grade
    super(name, age, gender, interests);//Using super keyword inheriting the parameters of class Person
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

let Jessica=new Teacher('Jessica',25,'Female',['JavaScript', 'Java', 'PHP'],JavaScript,95);
//instantiate a new teacher instance