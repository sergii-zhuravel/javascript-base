/**
 * Задача 2:
 * Написать жс код, который запрашивает у пользователя дробное число,
 * округляет число с помощью побитового оператора и выводит результат.
*/
while(true){
    var a = prompt("Введите дробное число");
    a = a.replace(',', '.');
    a = a.replace('/', '');
    if(!a == "" && parseInt(a) != a) break;
}
document.writeln("Введенное число: " + a + "<br>") ;
document.writeln("Результат округления побитовым оператором '~~' = " + ~~a + "<br>") ;
document.writeln("Результат округления побитовым оператором '^' = " + ( a ^ 0 ) + "<br>") ;