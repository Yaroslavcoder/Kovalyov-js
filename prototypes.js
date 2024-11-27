//1 завдання виконав у класі


//Завдання 2:
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
student1.study();




// Створення об'єктів без прототипів
const dictionary = Object.create(null);
dictionary["apple"] = "A sweet fruit";
dictionary["book"] = "A set of written or printed pages bound with a cover";
console.log(dictionary.toString); //undefined



//Переписати класи на функції-конструктори та прототипи
function Animal(name) {
  this.name = name;
}

// Додаємо метод speak до прототипу Animal
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

// Конструктор-функція для Dog
function Dog(name) {
  this.name = name; // Встановлюємо name без виклику Animal
}

// Наслідуємо прототип Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Перевизначаємо метод speak у прототипі Dog
Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

// Створюємо екземпляр Dog і викликаємо метод speak
const dog = new Dog('Rex');
dog.speak(); // Rex barks
