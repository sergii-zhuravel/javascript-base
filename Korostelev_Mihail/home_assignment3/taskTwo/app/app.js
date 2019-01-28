var fractionResult = Number.parseFloat(
  prompt('Введите дробное число в формате "0.00": ')
);
document.writeln(
  "Результат (округление дробного числа до целого): " + ~~fractionResult
);
