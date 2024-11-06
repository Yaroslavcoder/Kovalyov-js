function Person(name){
    this.name = name
}
Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name}`);
}
function Student(name, subject) {
this.name = name;
  this.subject = subject;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student
Student.prototype.study = function() {
  console.log(`${this.name} is studing ${this.subject}`);
};
const student1 = new Student('Anna', 'Mathematics');
student1.greet();
student1.study();//task 2
const dictionary = Object.create(null);
dictionary["apple"] = "A sweet fruit";
dictionary["book"] = "A set of written or printed pages bound with a cover";
console.log(dictionary.toString); //undefined
