var a = parseInt(prompt('Введите число "a":'));
var b = parseInt(prompt('Введите число "b":'));
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
var num = parseInt(
  prompt(
    "Введите номер математической операции (1 - Сумма; 2 - Разница; 3 - Произведение; 4 - Частное):"
  )
);
for (var i = 1; i > 0; i++) {
  if ((num > 0) & (num < 5)) {
    switch (num) {
      case 1:
        console.log("Результат операции (сумма):" + sum(a, b));
        break;
      case 2:
        console.log("Результат операции (разница):" + sub(a, b));
        break;
      case 3:
        console.log("Результат операции (умножение):" + mult(a, b));
        break;
      case 4:
        console.log("Результат операции (частное):" + div(a, b));
        break;
    }
    break;
  } else {
    num = parseInt(
      prompt(
        "Вы ввели не правильный номер! Введите номер математической операции (1 - Сумма; 2 - Разница; 3 - Произведение; 4 - Частное):"
      )
    );
  }
}
