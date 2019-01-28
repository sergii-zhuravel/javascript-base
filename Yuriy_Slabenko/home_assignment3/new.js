var num = prompt("Введите пожалуйста число!");
 document.write("<pre>");
  document.writeln("<strong>Введённое число: </strong>" + num);

    num ++;
    num = num +1;
    num = ++num;
    ++num;
    num += 1;

document.writeln("Результат: " + num);