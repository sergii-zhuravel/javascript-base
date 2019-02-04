function parityCheck(number) {
  if (number % 2 == 0) {
    if (number == 0) {
     break;
    }
     return "Четное число: " + number + "</br>";
  }
   else {
    return "Нечетное число: " + number + "</br>";
  }
}
do {
  var number = +prompt("Enter the number :");
  document.write(parityCheck(number));
} while (number != 0);
{
  document.write(" Вы ввели  '0' ");
}
