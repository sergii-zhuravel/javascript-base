var generalArr = [];
id = 0;
function commandCheck(num) {
  if (num == 1) {
    addNewTask();
  } else if (num == 2) {
    showTasks();
  } else if (num == 3) {
    sortTasks();
  } else if (num == 0) {
    end();
  } else {
    commandList();
  }
}

function commandList() {
  var num = +prompt(
    "Введите номер команды:\n" +
      "Добавить новую задачy(код 1).\n" +
      "Вывести задачи на экран(код 2).\n" +
      "Сортировать задачи по 'Title'(код 3).\n" +
      "Закончить работу с приложением(код 0)."
  );
  commandCheck(num);
}

function clearScreen() {
  document.body.innerHTML = "";
}
function start() {
  commandList();
} 
function output(arr) {
  var html = ``;
  for (var i = 0; i < arr.length; i++) {
    var task = `<div class = "task">`;
    task += "Id:" + arr[i].id + "</br>Title:" + arr[i].title;
    task += `</div>`;
    html += task;
  }
  document.write(html);
  showMessage(getStyle() + task);
}
function addNewTask() {
  var task = {};
  task.title = prompt("Введите описание задачи!");
  task.id = id;
  id++;
  generalArr.push(task);
  setTimeout(commandList, 20);
}
function showTasks() {
  clearScreen();
  output(generalArr);
  setTimeout(commandList, 1000);
}
function sortTasks() {
  clearScreen();
  sortArr = generalArr;
  sortArr = sortArr.sort(function(a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
  output(sortArr);
  setTimeout(commandList, 1000);
}
function end() {
  clearScreen();
  var byeText = `
    <div class="container">
      <p>Bye! Come back soon!</p>
    </div>
  `;
  showMessage(getStyle() + byeText);
}
function showMessage(text) {
  document.writeln(text);
}
function getStyle() {
  var STYLE = `
    <style>
      .container {
        padding: 10px;
        border: 1px solid #e8d7c5;
        text-align: center;
        font-family: Courier New, Courier, monospace;
        font-size: 17px;
      }
      .task {
      width: 200px;
      margin: 10px;
      padding: 15px;
      background: #e8d7c5;
      border: 1px solid #e8d7c5;
      border-radius: 3px;
      font-size: 17px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
      font-family: Courier New, Courier, monospace;
      }
    </style>
    `;
  return STYLE;
}
start();
