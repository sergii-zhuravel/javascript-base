var firstPartOfFraction = Number(prompt("Enter first part of fraction: "));
var secondPartOfFraction = Number(prompt("Enter second part of fraction: "));
var fractionResult = firstPartOfFraction / secondPartOfFraction;
document.writeln(
  "Результат деления дроби (округленный до целого числа): " + ~~fractionResult
);
