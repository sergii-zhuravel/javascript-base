var num = prompt("Введите число");
document.write("<PRE>");
document.writeln("Ввод: " + num);

num++;
num = num + 1;
num = ++num;
++num;
num += 1;

document.writeln("Результат: " + num);
