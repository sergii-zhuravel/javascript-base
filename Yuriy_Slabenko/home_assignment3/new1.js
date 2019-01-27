var Num = prompt('Введите дробное число!');
if(parseInt(Num) != Num){ 
 Res = ~~ Num;
  document.writeln('Результат: ' + Res);
}
else{
 var Num = prompt('Вы ввели неправильно. Повторите пожалуйста еще раз');
  Res = ~~ Num;
   document.writeln('Результат: ' + Res);
}