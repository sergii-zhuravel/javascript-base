/** 
 * Написать жс код, который запрашивает у пользователя число,
 * проверяет четное число или нет 
 * и выводит ответ в консоль или на страницу. 
 * 
 * После вывода результата программа должна опять запросить число,
 * повторять пока пользователь не введет 0.
*/
do{
    var a =parseInt(prompt("Введите число")) ;
    if (a % 2 == 0){        
        console.log("Вы ввели четное число " + a)
    } else {
        console.log("Вы ввели нечетное число " + a)
    }
} while (a != 0);