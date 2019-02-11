var toDoList = [];
var count = 1;

function clearScreen() {
  document.body.innerHTML = ``;
}

function askNextCommandWithDelay() {
  setTimeout(chooseCommand, 200);
}

function addNewTask() {
  var title = prompt("Введите название задачи");

  toDoList.push({ title: title, id: count++ });

  askNextCommandWithDelay();
}

function printTodo() {
  askNextCommandWithDelay();

  var html = "<ul>";

  for (var i = 0; i < toDoList.length; i++) {
    html += "<li>" + toDoList[i].id + ": " + toDoList[i].title + "</li>";
  }

  html += "</ul>";

  document.body.innerHTML = html;
}

function showCommands() {
  var welcomeText = `
         <div class= “container”>
             <h1> Привет! Добро пожаловать в мое приложение </h1>
            <p> Список команд: </p>
            <ul>
                <li> Добавить новое задание (1) </li>
                <li> Показать задания (код 2) </li>
                <li> Сортировать по названию (3) </li>
                <li> Показать команды (4) </li>
                <li> Завершить работу с приложением (0) </li>
            </ul>
         </div>
   `;

  document.body.innerHTML = welcomeText;

  askNextCommandWithDelay();
}

function sortByTitleTasks() {
  toDoList.sort(function(a, b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  printTodo();
}

function finishWork() {
  document.body.innerHTML =
    "<div>Спасибо, что использовали мою программу! Пока-пока.</div>";
}

function chooseCommand() {
  var command = prompt("Введи комманду (4 - чтобы увидеть список команд)");
  switch (command) {
    case `1`:
      addNewTask();
      break;
    case `2`:
      printTodo();
      break;
    case `3`:
      sortByTitleTasks();
      break;
    case `4`:
      showCommands();
      break;
    case `0`:
      finishWork();
      break;
    default:
      chooseCommand();
  }
}

setTimeout(showCommands, 500);
