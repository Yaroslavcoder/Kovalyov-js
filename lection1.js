let reduce = Number(prompt('Введи зменшуване'));
let subtractor = Number(prompt ('Введи від`ємник'));
alert(`різницею є: ${reduce - subtractor}`);// 1 task


let first = prompt('Введіть перше число');
let second = prompt('Введіть друге число');
alert(Math.max(first, second))
//2 task


let firststring = prompt("Введіть перший рядок");
let secondstring2 = prompt("Введіть другий рядок");
alert(firststring.concat(" ", secondstring2));
//3 task

let input = prompt("Введіть рядок:");

alert("Довжина рядка:" + input.length);
// tusk 4
let lowerCaseString = prompt("Введи рядок з нижнього регістру");
alert (lowerCaseString.toUpperCase())
// tusk 5

function reverseString() {
    let str = prompt("Введіть рядок для реверсу:");

    let reversedStr = str.split('').reverse().join('');

    return reversedStr;
}

alert(reverseString());
