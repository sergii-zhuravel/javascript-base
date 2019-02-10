var toDoList = [];
count = 0;

runMyApp();

function runMyApp() {
  showWelcomMessage();
  askNextCommandWithDelay();
}

function showWelcomMessage() {
  var welcomeText = `
        <div class = "container">
            <p><b>Привет! Добро пожаловать в My App)</b></p>
            <p>Список команд:</p>
            <ul>
                <li> Добавить новую задачу (код 1)</li>
                <li> Вывести задачи на экран (код 2)</li>
                <li> Сортировать задачи по тайтлу (код 3)</li>
                <li> Закончить работу с приложением (код 4)</li>
            </ul>
        </div>
    `;
  ShowMessage(getStyle() + welcomeText);
}

function ShowMessage(text) {
  document.writeln(text);
}

function askNextCommand() {
  var answerCommand = prompt("Введите команду");
  switch (answerCommand) {
    case "1":
      addTitleInToDoList();
      break;
    case "2":
      showToDoList();
      break;
    case "3":
      sortToDoList();
      break;
    case "4":
      showGoodByeMessage();
      break;
    default:
      askNextCommandWithDelay();
      break;
  }
}
function sortToDoList() {
  toDoList.sort(function(task1, task2) {
    if (task1.title > task2.title) return 1;
    if (task1.title < task2.title) return -1;
    return 0;
  });
  showToDoList();
}
function addTitleInToDoList() {
  var task = prompt("Введите текст задачи!");
  // toDoList[toDoList.length] = { title: task };
  toDoList.push({ title: task, id: count++ });
  askNextCommandWithDelay();
}

function showToDoList() {
  clearScreen();
  for (var i = 0; i < toDoList.length; i++) {
    document.body.innerHTML +=
      "<div class = 'listItem'>" +
      toDoList[i].title +
      "<div class = 'listItemId'> id: " +
      toDoList[i].id +
      "</div></div>";
  }
  askNextCommandWithDelay();
}
function showGoodByeMessage() {
  var goodByeText = `
        <div class = "container">
            <p>Спасибо,всего доброго!<p>
        </div>
    `;
  clearScreen();
  ShowMessage(getStyle() + goodByeText);
}

function clearScreen() {
  document.body.innerHTML = "";
}
function askNextCommandWithDelay() {
  setTimeout(askNextCommand, 20);
}

function getStyle() {
  var STYLE = `
        <style>
            .container {
                padding: 10px;
            }
            body {
                font-family: 'Times New Roman', cursive;
                font-size: 20px;
            }
            .listItem {
                padding: 10px;
                border: 2px solid black;
                border-radius: 80px;
                width: 25%;
                background-color: #0cd0f7;
                margin: 10px;
                position: relative;
                font-size: 20px;
                text-align: 100%;
            }
            .listItemId {
                position: absolute;
                right: 0px;
                top: 0px;
                font-size: 25px;
                margin: 2px;
                margin-right: 10px;
            }
        </style>
`;
  return STYLE;
}