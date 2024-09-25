function greet (){
    let greet =prompt("What is your name?");
    alert('привіт  ' + greet);

        }
        greet ();//1 task
function isEven(a) {
    return a % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(3));//3 task

function power(a, b){
    return a ** b
}

console.log(power(3, 4));//4 task

function reverseString() {
    let str = prompt("Введіть рядок для реверсу:");

    let reversedStr = str.split('').reverse().join('');
    return reversedStr;
}
alert(reverseString());// 5 task

function sumArray(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}
let numbers1 = [1, 4, 6, 9, 10];
console.log(sumArray(numbers1))//6 task

function filterOddNumbers (numbers){
    return numbers.filter(number => number % 2 !== 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterOddNumbers(numbers));// 7 task






//Обчислення площі фігур
const width1 = 5;
const height1 = 10;
const area1 = width1 * height1;

const width2 = 7;
const height2 = 3;
const area2 = width2 * height2;

const width3 = 8;
const height3 = 8;
const area3 = width3 * height3;

console.log(`Площа першого прямокутника: ${area1}`);
console.log(`Площа другого прямокутника: ${area2}`);
console.log(`Площа третього прямокутника: ${area3}`);
function calculateRectangleArea(w, h){
return (w * h);
}
const rectangle1 = calculateRectangleArea(5, 10);
const rectangle2 = calculateRectangleArea(7, 3);
const rectangle3 = calculateRectangleArea(8, 8);

console.log(`Площа першого прямокутника: ${rectangle1}`);
console.log(`Площа другого прямокутника: ${rectangle2}`);
console.log(`Площа третього прямокутника: ${rectangle3}`);


//Форматування тексту
const message1 = "*Привіт*";
const message2 = "*Як справи?*";
const message3 = "*До зустрічі!*";

console.log(message1);
console.log(message2);
console.log(message3);// без фунцій



function formatMessage (m, s){
    return`${s}${m}${s}`;
}
const formtMessage1 = formatMessage("Привіт", "*");
const formtMessage2 = formatMessage("Як справи?", "*");
const formtMessage3 = formatMessage("До зустрічі!", "*");

console.log(formtMessage1);
console.log(formtMessage2);
console.log(formtMessage3);




//Перевірка віку
const age1 = 20;
const age2 = 17;
const age3 = 18;

if (age1 >= 18) {
    console.log("Користувач повнолітній");
} else {
    console.log("Користувач неповнолітній");
}

if (age2 >= 18) {
    console.log("Користувач повнолітній");
} else {
    console.log("Користувач неповнолітній");
}

if (age3 >= 18) {
    console.log("Користувач повнолітній");
} else {
    console.log("Користувач неповнолітній");
}
//перевірка віку без функцій

function checkAge(age) {
    if (age >= 18) {
        return "Користувач повнолітній";
    } else {
        return "Користувач неповнолітній";
    }
}

const age1 = 20;
const age2 = 17;
const age3 = 18;

console.log(checkAge(age1));
console.log(checkAge(age2));
console.log(checkAge(age3));

