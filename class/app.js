var a = parseInt(prompt('Введите число "a":'));
var b = parseInt(prompt('Введите число "b":'));
var Num = parseInt(
  prompt(
    "Введите номер математической операции (1 - Сумма; 2 - Разница; 3 - Произведение; 4 - Частное):"
  )
);
function sum(a,b) {
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
while (Num <= 4 & Num > 0){
    switch (Num) {
      case 1:
        console.log("Результат операции (сумма):" + sum(a, b));
        break;
      case 2:
        console.log("Результат операции (разница):" + sub(a,b));
        break;
      case 3:
        console.log("Результат операции (умножение):" + mult(a,b));
        break;
      case 4:
        console.log("Результат операции (частное):" + div(a,b));
        break;
      default:
        break;
    }
}
//   } else {
//     var Num = parseInt(
//       prompt(
//         "Вы ввели не правильный номер! Введите номер математической операции (1 - Сумма; 2 - Разница; 3 - Произведение; 4 - Частное):"
//       )
//     );
//   } 
// }
