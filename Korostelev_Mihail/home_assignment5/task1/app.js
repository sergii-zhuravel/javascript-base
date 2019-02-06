var valueNumberOne = +prompt("enter the first value (ONLY NUMBERS)!");
var valueNumberTwo = +prompt("enter the second value (ONLY NUMBERS)!");
var valueSymbol = prompt(
  "enter numbers 1 = SUM operation; 2 = SUB operation; 3 = MULT operationor; 4 = DIV operation)!"
);
switch (valueSymbol) {
  case "1": //суммирование
    console.log(
      "The result of SUM operation = " +
        sumFunction(valueNumberOne, valueNumberTwo)
    );
    break;
  case "2": //отнимание
    console.log(
      "The result of SUB operation = " +
        subFunction(valueNumberOne, valueNumberTwo)
    );
    break;
  case "3": //умножение
    console.log(
      "The result of MULT operation = " +
        mulFunction(valueNumberOne, valueNumberTwo)
    );
    break;
  case "4": //деление
    console.log(
      "The result of DIV operation = " +
        divFunction(valueNumberOne, valueNumberTwo)
    );
    break;
  default:
    //не верное значение
    console.log("Wrong value, press F5 and try again!");
}
//операция сумирования
function sumFunction(valueNumberOne, valueNumberTwo) {
  return valueNumberOne + valueNumberTwo;
}
//операция отнимания
function subFunction(valueNumberOne, valueNumberTwo) {
  return valueNumberOne - valueNumberTwo;
}
//операция умножения
function mulFunction(valueNumberOne, valueNumberTwo) {
  return valueNumberOne * valueNumberTwo;
}
//операция деления
function divFunction(valueNumberOne, valueNumberTwo) {
  return valueNumberOne / valueNumberTwo;
}
