/*Задача 1:
В app.js нужно написать жс программу, которая 
запросит у пользователя имя 
и 
сохранит его в обьект Person name. 
Затем запросить возраст 
и 
сохранить его в обьекта Person  age . 
После єтого вьівести обьект Person в консоль.
*/
var person = {};
person["name"] = prompt("Enter the Name of the Person");
person["age"] = +prompt("Enter the Age of the Person (only years)");
console.log("The information about object Person :");
console.log('       name - "' + person["name"] + '";');
console.log('       age - "' + person["age"] + '" years.');
console.log(person);
