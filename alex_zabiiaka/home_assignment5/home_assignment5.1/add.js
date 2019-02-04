/**
 * Задача 1:
* В app.js нужно написать жс программу, которая запросит у пользователя 2 числа,
* сохранить эти числа в переменньіе a и b.
* Затем запросить номер математической операции:
* 1 - Сумма, 2 - Разница, 3 - Произведение, 4 - Частное
* Затем нужно вывести в консоль результатьі работьі функции соответствующей полученной команде
* и с переданньіми в функцию параметрами a и b.
* Для єтого нужно написать 4 функции для математических операций
* sum, sub, mult, div (сумма, разница, умножение и деление) и
* проверять с помощью if какую функцию нужно вьізвать.
* Вместо набора if в js можно использовать оператор switch (реализовать по желанию)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

var a = +prompt("Введите число a", "");
document.writeln("Введенное число " + a + "<br>");
console.log("Введенное число " + a);

var b = +prompt("Введите число b", "");
document.writeln("Введенное число " + b + "<br>");
console.log("Введенное число " + b);

function sum(a, b) {
    return (a + b);
}
function sub(a, b) {
    return (a - b);
}
function mult(a, b) {
    return (a * b);
}
function div(a, b) {
    return (a / b);
}
command = prompt(`Введите номер команды для переменных a и b:
1 - сумма;
2 - разница;
3 - умножение;
4 - деление.`);

switch (command) {
    case '1':
        document.writeln("Вы выбрали команду № " + command + "<br> Результат сложения: " + sum(a, b));
        console.log("Вы выбрали команду № " + command);
        console.log("Результат сложения: " + sum(a, b));
        break;
    case '2':
        document.writeln("Вы выбрали команду № " + command + "<br> Результат вычитания: " + sub(a, b));
        console.log("Вы выбрали команду № " + command);
        console.log("Результат вычитания: " + sub(a, b));
        break;
    case '3':
        document.writeln("Вы выбрали команду № " + command + "<br> Результат умножения: " + mult(a, b));
        console.log("Вы выбрали команду № " + command);
        console.log("Результат умножения: " + mult(a, b));
        break;
    case '4':
        document.writeln("Вы выбрали команду № " + command + "<br> Результат деления: " + div(a, b));
        console.log("Вы выбрали команду № " + command);
        console.log("Результат деления: " + div(a, b));
        break;
    default:
        prompt("Ошибка. Вы ввели не верный номер команды")
}

