do {
  var number = prompt("Enter the number :");

  if (number % 2 == 0) {
    if (number == 0) {
      break;
    }
    document.write("Четное число: " + number + "</br>");
  } else {
    document.write("Нечетное число: " + number + "</br>");
  }
} while (number != 0);
{
  document.write(" Вы ввели  '0' ");
}

/*Написать жс код, который запрашивает у пользователя число, 
проверяет четное число или нет и выводит ответ в консоль или на страницу.
После вывода результата программа должна опять запросить число, 
повторять пока пользователь не введет 0. */