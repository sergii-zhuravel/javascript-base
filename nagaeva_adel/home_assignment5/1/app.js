var a = prompt("Введите первое число:");
var b = prompt("Введите второе число:");
var komb = prompt("Выберите операцию: 1 - Сумма. 2 - Разница. 3 - Произведение. 4 - Частное.");

switch (komb) {
  case "1":
      console.log("Сумма = " + sum(a, b));
      break;
  case "2":
      console.log("Разница = " + sub(a, b));
      break;
  case "3":
      console.log("Умножение = " + mult(a, b));
      break;
  case "4":
      console.log("Деление = " + div(a, b));
}

function sum(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mult(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }
  
