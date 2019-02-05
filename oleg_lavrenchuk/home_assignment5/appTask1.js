var a = parseInt(prompt("Введите первое число!"));
var b = parseInt(prompt("Введите второе число!"));
var x = prompt("Введите математическую операцию!");

switch (x) {
  case "+":
    sum(a, b);
    break;
  case "-":
    sub(a, b);
    break;
  case "*":
    mult(a, b);
    break;
  case "/":
    div(a, b);
    break;
  default:
    alert("Не правильная математическая операция.");
}

function sum(a, b) {
  return console.log(a + b);
}
function sub(a, b) {
  return console.log(a - b);
}
function mult(a, b) {
  return console.log(a * b);
}
function div(a, b) {
  return console.log(a / b);
}
