let n = parseInt(prompt("Введи додатнє число"));

if (isNaN(n) || n <= 0) {
    alert("Будь ласка, введіть коректне додатнє число!");
} else {
    let sum = 0;
    let i = 0;

    while (i <= n) {
        sum += i;
        i++;
    }

    alert("Сума всіх чисел від 1 до числа " + n + " дорівнює " + sum);
}// task 1

let start = parseInt(prompt('початок діапозону'));
let end =  parseInt(prompt("кінець діапозону"));
if (isNaN(start) || isNaN(end)) {
    alert("Будь ласка, введіть коректні числа!");
} else {
    let result = ('Числа кратні 3 у діапозоні від ' + start + ' до ' + end + ":\n");
    for (let j = start; j <= end; j++) {
        if (j % 3 === 0) {
            result += j + " ";
        }
    }//task 2

    alert(result);
}// task 2

const correctPassword = '123456789'
let youroption = (prompt('Для входу введіть пароль'))
let attempts = 0;
let maxAttempts = 3;
while (attempts < maxAttempts) {
    if (youroption == correctPassword) {
        alert("Пароль введено правильно. Доступ надано.");
        break;
    } else {
        attempts++;
        alert('Неправильний пароль у вас залишилось ' + (maxAttempts - attempts) + ' спроб');
        youroption = prompt('Для входу введіть ще раз пароль');
    }
    if (attempts === maxAttempts) {
        alert("Ви вичерпали всі спроби. Доступ заборонено.");
    }
}//task 3