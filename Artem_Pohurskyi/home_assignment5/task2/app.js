var num = parseInt(prompt('Введите число. Для выхода введите "0"'));

function checkNum(num) {
  if (num % 2 == 1) {
    return "Вы ввели: " + num + ".Это не чётное число";
  } else {
    return "Вы ввели: " + num + ".Это чётное число";
  }
}
for (var i = 1; i > 0; i++) {
  if (num != 0) {
    console.log(checkNum(num));
    num = parseInt(prompt('Введите число. Для выхода введите "0"'));
  } else {
    break;
  }
}
