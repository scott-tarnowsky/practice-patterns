/*

What is a class? ==>> Blueprint for creating objects with
predefined properties and methods.



*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    console.log(`Your full name is ${this.firstName} ${this.lastName}`);
  }
  markLate() {
    this.tardies += 1;
    console.log(
      `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    );
  }
  addScore(score) {
    this.scores.push(score);
    console.log(this.scores);
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    console.log(sum / this.scores.length);
  }
  static EnrollStudents(){
    return
  }
}

let firstStudent = new Student("Colt", "Steele", 5);
let secondStudent = new Student("Blue", "Steele", 3);

// console.log(firstStudent, secondStudent);
// firstStudent.fullName();
// firstStudent.markLate();
firstStudent.addScore(92);
