/**
 * Задача 2:
 * Написать жс функцию changePersonAge,
 * которая имеет два параметра: первьій параметр єто обьект в котором есть поле age,
 * а второй параметр - числовое значение
 * (пример вьізова функции - changePersonAge({ name: "Nick", age: 20}, 30)).
 * Функция должна проверить что в переданном обьекте есть поле age -
 * если его нет, то вернуть false (return false).
 * Если поле age есть в обьекте - установить его значение
 * равное переданному числову значению (второй параметр)
 */
person = {};
person.name = prompt("Как Вас зовут?");
person.age = +prompt("Укажите свой возраст");
var newAge = +prompt("Укажите верный возраст");
function changePersonAge(person, newAge) {
    if (!("age" in person)) {
        return false;
    }
    person.age = newAge;
    return person;
};
console.log(changePersonAge(person, newAge))