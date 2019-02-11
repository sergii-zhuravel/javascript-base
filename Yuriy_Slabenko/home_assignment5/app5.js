var a = Number(prompt("Введите первое число а"));
var b = Number(prompt("Введите второе число b"));
var numberOfOperation  = prompt("Введите номер операции! (1 - сумма, 2 - разница, 3 - умножение, 4 - деление)");

switch (numberOfOperation) {
    case "1":
        console.log("Результат операции сложения = " + sum(a, b));
        document.write("Результат операции сложения = " + sum(a, b));
        break;
    case "2":
        console.log("Результат операции вычетания = " + sub(a, b));
        document.write("Результат операции вычетания = " + sub(a, b));
        break;
    case "3":
        console.log("Результат операции умножения = " + mult(a, b));
        document.write("Результат операции умножения = " + mult(a, b));
        break;
    case "4":
        console.log("Результат операции деления = " + div(a, b));
        document.write("Результат операции деления = " + div(a, b));
        break;
    default:
        alert("Вы ввели неверный номер операции! Обновите страницу и повторите попытку");


}
function sum (a, b) {
    return a + b;
}
function sub (a, b) {
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b;
} 