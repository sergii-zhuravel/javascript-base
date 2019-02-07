function toDoList() {
  var generalMass = [];

  function commandSelection() {
    var number = +prompt(
      "1. Добавить новую задач.\n" +
        "2. Вывести задачи на экран.\n" +
        "3. Удалить задачи.\n" +
        "4. Сортировать задачи по 'Title'.\n" +
        "5. Завершить работу с приложением."
    );

    switch (number) {
      case 1:
        enterTask();
        break;
      case 2:
        show();
        break;
      case 3:
        deleteTask(generalMass);
        break;
      case 4:
        sortTasks(generalMass);
        break;
      case 5:
        endWork();
        break;
      default:
        commandSelection();
    }
  }
  commandSelection();

  function randomId() {
    var rand = 1 + Math.random() * (100 + 1 - 1);
    rand = Math.floor(rand);
    return rand;
  }

  function deleteTask(mas) {
    var num = prompt(
      "Введите 'Id' для удаления задачи.Если хотите несколько удалить, то вводить через запятую(',')."
    );
    var delMass = num.split(",");
    for (var i = 0; i < mas.length; i++) {
      for (var j = 0; j < delMass.length; j++)
        if (mas[i].id == delMass[j]) {
          mas.splice(i, 1);
        }
    }
    show();
  }

  function nextCommandDelay(func) {
    setTimeout(func, 200);
  }

  function enterTask() {
    var data = new Object();
    data.id = randomId();
    data.title = prompt("Введите описание задачи!");
    generealData(data);
    commandSelection();
  }

  function generealData(argm) {
    generalMass.push(argm);
  }

  function show() {
    clearData();
    showTasks(generalMass);
  }

  function showTasks(mass) {
    for (var i = 0; i < mass.length; i++) {
      var storage = mass[i].title;
      var indet = mass[i].id;
      var mode = `
            <div class="modification">
              <p><b>Title: </b>${storage}</p>
              <span class="mod">ID:${indet}</span>
            </div>
          `;
      getShow(getStyles() + mode);
    }
    nextCommandDelay(commandSelection);
  }

  function getShow(text) {
    document.writeln(text + "</br>");
  }

  function sortTasks(sortMass) {
    sortMass.sort(function(a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
    clearData();
    showTasks(sortMass);
  }

  function clearData() {
    document.body.innerHTML = "";
  }

  function endWork() {
    clearData();
    return alert("Good bye!");
  }

  function getStyles() {
    var STYLE = `
        <style>
        .modification{
          position: relative;
          width: 200px;
          margin: 3px;
          display:inline-block;
          padding: 4px;
          background: #CD5C5C;
          border: 1px solid black;
          border-radius: 2px;
          font-size: 15px;
          overflow: hidden;
        }
        .mod{
          position: absolute;
          top: 0;
          right: 0;
          background: #F08080;
          border: 1px solid black;
          border-radius: 1px;
          font-weight: bold;
        }
        </style>
        `;
    return STYLE;
  }
}
toDoList();
