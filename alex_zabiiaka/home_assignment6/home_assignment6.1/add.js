/**Задача 1:
 * В app.js нужно написать жс программу,
 * которая запросит у пользователя имя и сохранит его в обьект Person в поле name.
 * Затем запросить возраст и сохранить его в поле age обьекта Person.
 * После єтого вьівести обьект Person в консоль.
 */

// Person = new Object ();
Person = {};
Person.name = prompt("Как Вас зовут?");
Person.age = +prompt("Укажите свой возраст");
document.writeln("Имя пользователя " + Person.name + " , возраст " + Person.age + ".");
console.log(Person);