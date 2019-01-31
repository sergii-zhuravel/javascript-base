var Num = prompt('Введите десятичную дробь');
if(parseInt(Num) != Num){ 
    Res = ~~ Num;
    document.writeln('Результат: ' + Res);
}
else{
    for(i = 0;i < 1000000;i ++){
        var Num = prompt('Вы ввели целое число. Повторите ввод');
        if(parseInt(Num) != Num){
            break;
        }
    }
    Res = ~~ Num;
    document.writeln('Результат: ' +Res);   
}