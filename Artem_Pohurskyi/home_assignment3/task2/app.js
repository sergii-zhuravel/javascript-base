var Num = prompt('Введите десятичную дробь');
if(parseInt(Num) != Num)
{ 
    Res = ~~ Num;
    document.writeln('Результат: ' + Res);
}
else
{
    var Num = prompt('Вы ввели целое число. Повторите ввод');
    Res = ~~ Num;
    document.writeln('Результат: ' +Res);   
}