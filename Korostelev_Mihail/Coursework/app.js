/*
Сортировать массив тудушек по тайтлу (код 3)

Закончить работу с приложением (код 0)
Функция Конец программы
- перестаем запрашивать команды и выводим прощальную фразу.

При начале работы приложения
выводим запрос: "Введите номер команды:" и список команд с номерами.
При получении номера анализируем его,
если число не верное, делаем запрос снова (анализ ошибочного ввода),
если число соотвествует одной из команд - вызываем соотвествующую функцию.

Пример массива todos - [{id: 1, title: "Todo1"}, {id: 2, title: "Read a book"}]

Обьект todo (пример) - {id: 1, title: "Todo1"}

Пример вьівода на єкран одной тудушки: ID: 1 - Title: Read a book*/

runCourseWork(); //start

var toDoList = []; //Array with tasks

function runCourseWork() {
  welcomMessage();
  askNextCommandWithDelay();
}
function welcomMessage() {
  var welcomeText = `
        <div class="container">
            <h1>Hello. Welcome to your toDo list! </h1>
            Choose what do you want to do:
            <ul>
                <li>1. Create new task (press 1)</li>
                <li>2. Display tasks  (press 2)</li>
                <li>3. Sort tasks by title (press 3)</li>
                <li>0. Close toDo list (press 0)</li>
            </ul>
        </div>
    `;
  showMessage(welcomeTextStyles() + welcomeText);
}

function askNextCommandWithDelay() {
  setTimeout(askNextCommand, 1500);
}
//Menu toDo List
function askNextCommand() {
  var ask = prompt(`Enter the number of task: 
  Create new task (press 1)
  Display tasks  (press 2)
  Sort tasks by title (press 3)
  Close toDo list (press 0)`);
  switch (ask) {
    case "1": //Create new Task
      createNewTask();
      askNextCommand();
      break;
    case "2": // Display tasks
      showToDoListTasks();
      askNextCommandWithDelay();
      break;
    case "3": //Sort tasks by title
      sortByTaskToDoList();
      askNextCommandWithDelay();
      break;
    case "0": // Close app
      byeMessage();
      break;
    default:
      //users mistake
      askNextCommand();
  }
}
function createNewTask() {
  var task = prompt("Enter new task");
  toDoList[toDoList.length] = new newTask(++toDoList.length, task);
}

function newTask(id, task) {
  this.id = id;
  this.task = task;
}

function showToDoListTasks() {
  clearScreen();
  document.body.innerHTML += `<div style = "height: 45px;
      width: 480px;
      font: 16pt solid black;
      margin-left: 20px;
      padding: 10px;
      border: 2px solid black;">
      <h3 style = "margin-block-start: 10px;
      margin-block-end: 10px;">Your task(s) is (are):</h3><br></div>`;
  for (var a = 0; a < toDoList.length; a++) {
    document.body.innerHTML +=
      `<div style = "height: 50px;
      width: 490px;
      line-height: 20pt;
      background-color: #a9f2ae;
      font-size: 16pt;
      margin-left: 20px;
      padding: 5px;
      border: 2px solid black;">ToDo ID:` + toDoList[a].id +` - Title: ` + toDoList[a].task;`</div>`
  }
  document.body.innerHTML += `<div style = "height: 45px;
  width: 480px;
  font: 16pt solid black;
  background-color: #d1caca;
  margin-left: 20px;
  padding: 10px;
  border: 2px solid black;">
  <h3 style = "margin-block-start: 10px;
  margin-block-end: 10px;">
  Lets do it!!</h3></div>`;
}

function sortByTaskToDoList() {
  clearScreen();
  toDoList.sort(function(title1, title2) {
    if (title1.task > title2.task) return 1;
    if (title1.task < title2.task) return -1;
    return 0;
  });
  showToDoListTasks();
}
function byeMessage() {
  clearScreen();
  document.body.innerHTML += `
          <div style = "background-image: url(depositphotos_67297861-stock-photo-time-to-say-goodbye-message.jpg);
          background-repeat: no-repeat;
          background-size: contain;
          height: 325px;">
          </div>
      `;

  showMessage(getStyles() + byeText);
}
function showMessage(text) {
  document.writeln(text);
}

function clearScreen() {
  document.body.innerHTML = "";
}
//функция для стилей
function welcomeTextStyles() {
  var STYLEWELCOMETEXT = `
   <style>
   .container {
    width: 50%;
    height: 341px;
    font: 16pt solid black;
    background-color: #d1caca;
    margin: 200px 350px;
    padding: 20px;
    border: 1px solid navy;
  }
  h1 {
    text-align: center;
  }
  ul {
    margin-block-start: 0, 5em;
    padding-inline-start: 5px;
  }
  li {
    padding: 10px;
    font-size: 16pt;
    background-color: #a9f2ae;
    height: 25px;
    list-style-type: none;
    border-bottom: 2px solid black;
  }
  ul :last-child {
    padding-top: 15px;
    font-size: 20pt;
  }
   </style>
  `;
  return STYLEWELCOMETEXT;
}
function stylesToShow() {
  var STYLESTOSHOW = `
      <style>
      .list {
        font: 16pt solid black;
        background-color: #d1caca;
        margin: 50px;
        padding: 20px;
      }
      </style>
      `;
  return STYLESTOSHOW;
}
