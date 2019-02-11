var toDoList = [];
count = 0;
runMyApp();
function runMyApp() {
  showWelcomMessage();
  askNextCommandWithDelay();
}
function askNextCommandWithDelay() {
  setTimeout(enterCom, 30);
}
function enterCom() {
  var command = prompt(`
    Введите команду:
    Добавить новую задачу - 1;
    Вывести задачи на экран - 2;
    Сортировать массив toDo по Title - 3;
    Закончить работу - 0.
    `);
  switch (command) {
    case "1":
      enterTask();
      break;
    case "2":
      showTask();
      break;
    case "3":
      sortList();
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
        <div>
            <h1>ToDo List</h1>
            <h3>Добро пожаловать в программу!</h3>
            <h4>Выберите команду в списке</h4>
        </div>
    `;
  ShowMessage(welcomeText);
}
function ShowMessage(text) {
  document.writeln(text);
}
function sortList() {
  toDoList.sort(function(toDo1, toDo2) {
    if (toDo1.title > toDo2.title) return 1;
    if (toDo1.title < toDo2.title) return -1;
    return 0;
  });
  showTask();
}
function enterTask() {
  var toDo = prompt("Введите новую задачу:");
  toDoList.push({ title: toDo, id: count++ });
  askNextCommandWithDelay();
}
function showTask() {
  clearScreen();
  for (var i = 0; i < toDoList.length; i++) {
    document.body.innerHTML +=
      "<div style='font-size: 33px'>Id:" +
      toDoList[i].id +
      "</div>" +
      "<div style='font-size: 66px'>" +
      toDoList[i].title +
      "</div>";
  }
  askNextCommandWithDelay();
}
function finish() {
  var finishText = "<div style='font-size: 25px'>До Свидания!<div>";
  clearScreen();
  ShowMessage(finishText);
}

function clearScreen() {
  document.body.innerHTML = "";
}
