var Num = prompt('Введите десятичную дробь');
if(parseInt(Num) != Num){ 
    Res = ~~ Num;
    document.writeln('Результат: ' + Res);
}
else{
    m1: var Num = prompt('Вы ввели целое число. Повторите ввод');
    if(parseInt(Num) == Num){
        label: m1;  
    }
    else{
        Res = ~~ Num;
        document.writeln('Результат: ' +Res);   
    }    
}