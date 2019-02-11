/**
Написать приложение используя знания и навыки приобетенные на протяжении курса JavaScript Basic
(основные из них это - циклы, объекты, функции, массивы, основные операторы языка, типы данных)
Тема приложения: Система управления списком задач (ToDo List)
Ввод: Осуществляем через систему команд реализованную с помощью утилиты prompt. Полученные данные храним
в массиве обьектов.
Минимальный набор команд:
Добавить новую задачу (код 1)
Вывести задачи на экран (код 2)
Сортировать массив тудушек по тайтлу (код 3)
Закончить работу с приложением (код 0)
При начале работы приложения выводим запрос: "Введите номер команды:" и список команд с номерами.
При получении номера анализируем его, если число не верное, делаем запрос снова (анализ ошибочного ввода),
если число соотвествует одной из команд - вызываем соотвествующую функцию.
Функция добавления задачи - Делаем запрос на ввод описания задачи и добавляем эту задачу в массив.
Функция вывода задач на экран - выводим все задачи на экран (как вывести задачи на чистую страницу
рассматривается на занятиях - document.body.innerHTML = '')
Функция Конец программы - перестаем запрашивать команды и выводим прощальную фразу.
Пример массива todos - [{id: 1, title: "Todo1"}, {id: 2, title: "Read a book"}]
Обьект todo (пример) - {id: 1, title: "Todo1"}
Пример вьівода на єкран одной тудушки: ID: 1 - Title: Read a book
*/
var toDoList = [];
count = 0;
runMyApp();
function runMyApp() {
    showWelcomMessage();
    askNextCommandWithDelay();
}
function askNextCommandWithDelay() {
    setTimeout(askNextCommand, 30);
}
function askNextCommand() {
    var command = prompt(`
    Введите номер команды:
    Код 1 - добавить новую задачу;
    Код 2 - вывести задачи на экран;
    Код 3 - сортировать массив тудушек по тайтлу;
    Код 0 - закончить работу с приложением
    `);
    switch (command) {
        case "1":
            addNewCommand();
            break;
        case "2":
            showCommand();
            break;
        case "3":
            sortToDoList();
            break;
        case "0":
            finish();
            break;
        default:
            askNextCommand();
    }
}
function showWelcomMessage() {
    var welcomeText = `
        <div class = "container">
            <h1 style="color: green";>Система управления списком задач (ToDo List)</h1>
            <ul><h2>Команды:</h2>
                <li> Добавьте новую задачу <b style="color: red">(код 1)</b></li>
                <li> Вывести задачи на экран <b style="color: red">(код 2)</b></li>
                <li> Сортировать массив тудушек по тайтлу <b style="color: red">(код 3)</b> </li>
                <li> Закончить работу с приложением <b style="color: red">(код 0)</b></li>
            </ul>
        </div>
    `;
    ShowMessage(getStyle() + welcomeText);
}
function ShowMessage(text) {
    document.writeln(text);
}
function sortToDoList() {
    toDoList.sort(function (toDo1, toDo2) {
        if (toDo1.title > toDo2.title) return 1;
        if (toDo1.title < toDo2.title) return -1;
        return 0;
    });
    showCommand();
}
function addNewCommand() {
    var toDo = prompt("Введите новую команду!");
    toDoList.push({ title: toDo, id: count++ });
    askNextCommandWithDelay();
}
function showCommand() {
    clearScreen();
    for (var i = 0; i < toDoList.length; i++) {
        document.body.innerHTML +=
            "<div style='border: 2px solid green; background-color: deepskyblue; padding: 5px; width: 150px; font-size: 20px;'><div style='text-align: right; color: blue'>Id: " + toDoList[i].id + "</div>" + "<div style='text-align: left;'>" + toDoList[i].title + "</div></div>"
    }
    askNextCommandWithDelay();
}
function finish() {
    var finishText = "<div class='finish'>Good Bay!<div>";
    clearScreen();
    ShowMessage(getStyle() + finishText);
}

function clearScreen() {
    document.body.innerHTML = "";
}
function getStyle() {
    var STYLE = `
    <style>
        .container {
            width: 500px;
            height: 400px;
            padding: 10px;
            border: 2px solid green;
            font-family: "Goudy Old Style", cursive;
            font-size: 20px;
        }
        div{
            font-family: 'Harlow Solid Italic',;
            font-size: 20px;
            text-align: middle;
            font-size: 15px;
        }
        .finish{
            font-family: 'Lobster';
            font-size: 100px;
            text-align: middle;
            color: red;
        }
  </style>
  `;
    return STYLE;
};
