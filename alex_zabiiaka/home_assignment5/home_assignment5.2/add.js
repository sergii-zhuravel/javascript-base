/**Задача 2:
 * Написать жс код, который запрашивает у пользователя число,
 * проверяет четное число или нет
 * и выводит ответ в консоль или на страницу.
 * После вывода результата программа должна опять запросить число,
 * повторять пока пользователь не введет 0.
 * При єтом проверка на четность должна бьіть реализована с помощью функции
 * (особое внимание уделите имени функции).
*/
function isEven(a) {
    return console.log((a % 2 == 0) ? ("Вы ввели число " + a + " и это четное число") : (("Вы ввели число " + a + " , а это нечетное число")))
}
do {
    var a = +prompt("Введите число");
    isEven(a)
} while (a != 0);
