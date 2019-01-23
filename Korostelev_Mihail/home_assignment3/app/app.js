var startNumber = aNumber = Number(prompt('Enter the value'));
aNumber= aNumber + 1
aNumber += 1
aNumber++
++aNumber
aNumber = aNumber + true;
document.writeln('Ввод: ' + startNumber + ' Результат: ' + aNumber);
document.writeln('<br>')
var firstPartOfFraction = Number (prompt("Enter first part of fraction: "));
var secondPartOfFraction = Number (prompt("Enter second part of fraction: "));
var fractionResult = firstPartOfFraction / secondPartOfFraction;
document.writeln ('Результат деления дроби (округленный до целого числа): ' + ~~fractionResult);