
var num = prompt("Введите число");
document.write("<pre>");
document.writeln("Введенное число: " + num);

    num ++;
    num = num+1;
    num = ++num;
    ++num;
    num += 1;

document.writeln("Полученное число: " + num);


var numDrobnoe = prompt("Введите число для округления!");
document.writeln("<br>" + "Число до округления: " + numDrobnoe);

    res = ~~numDrobnoe;

document.writeln("Округленное число: " + res);