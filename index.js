
let age = prompt('Сколько тебе лет?', 100)

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

let name = prompt("Ваше имя?", "");
alert (`Приятно познакомиться ${name}!`)

let isBoss = confirm("Ты здесь главный?")

alert( isBoss ); // true, если нажата OK

var firstNumber = parseInt(prompt("Введите первое число:"));

var secondNumber = parseInt(prompt("Введите второе число:"));

var sum = firstNumber + secondNumber;

document.write("Сумма чисел: " + sum);
