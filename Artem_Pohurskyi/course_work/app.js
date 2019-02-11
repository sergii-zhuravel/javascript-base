var STATE = [];
var id = 0;

//start my app

runMyApp();

function runMyApp() {
  showWelcomeMessage();
  askNextCommandWithDelay();
}

function showWelcomeMessage() {
  var welcomeText = `
    <div class = "welcomeText">
        <p> Welcome to "ToDo" app! </p>
        <p> Command list: </p>
        <ul class = "commList">
            <li> Add new ToDo: command "1"</li>
            <li> Show all ToDos: command "2"</li>
            <li> Sort array by title: command "3"</li>
            <li> Delete ToDo: command "4"</li>
            <li> Exit from the app: command "0"</li>
        </ul>
    </div>
    `;
  showMessage(getStylesWelcometext() + welcomeText);
}

function showMessage(text) {
  document.writeln(text);
}

function askNextCommandWithDelay() {
  setTimeout(askNextCommand, 50);
}

function askNextCommand() {
  var command = parseInt(prompt("Enter command:",1));
  for (var i = 1; i > 0; i++) {
    if (command >= 0 && command <= 4) {
      break;
    } else {
      command = parseInt(
        prompt("You entered the wrong command. Reenter command:")
      );
    }
  }
  switch (command) {
    case 1:
      addNewToDo();
      askNextCommand();
      break;
    case 2:
      showAllToDo();
      askNextCommandWithDelay();
      break;
    case 3:
      sortArray();
      showAllToDo();
      askNextCommandWithDelay();
      break;
    case 4:
      deleteToDo();
      showAllToDo();
      askNextCommandWithDelay();
      break;
    default:
      showByeMessage();
  }
}

function addNewToDo() {
  var title = prompt("Enter new ToDo:");
  id++;
  STATE.push({ title: title, id: id });
}

function showAllToDo() {
  clearScreen();
  showToDo();
}

function showToDo() {
  for (var i = 0; i < STATE.length; i++) {
    var toDo =
      '<div class = "toDo">' +
        '<div class = "title">' +
            '<span>title: ' +
            STATE[i].title +
            '</span>' +
        '</div>' +
        '<div class = "id">' +
            '<span>' +
            "id: " +
            STATE[i].id +
            "</span>" +
        "</div>" +
      "</div>";
    showMessage(getStylesToDo() + toDo);
  }
}

function clearScreen() {
  document.body.innerHTML = "";
}

function sortArray(){
    STATE.sort(function(a, b){
        var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
        if (titleA < titleB)
          return -1
        if (titleA > titleB)
          return 1
        return 0;
        })
}

function deleteToDo(){
    var del = parseInt(prompt('Enter the id of the ToDo to be deleted'))
    for(var i = 0; i < STATE.length; i++){
        if(del == STATE[i].id){
            STATE.splice(i,1);
            break;
        }
    }
}

function showByeMessage() {
  var byeMessage = `
    <div class = "byMessage">
    <p>Bye! Thanks for using the app!</p>
    </div>
    `;
  clearScreen();
  showMessage(getStylesByeMessage() + byeMessage);
}

// Styles

function getStylesWelcometext() {
  var styleWelcomeText = `
    <style>
    .welcomeText{
        font-size: 30px;
        font-family: gabriola;
    }
    </style>
    <style>
    .commList{
        list-style-type: none;
    }
    </style>
    `;

  return styleWelcomeText;
}

function getStylesByeMessage() {
  var styleByeMessage = `
        <style>
        .byMessage{
        font-size: 45px;
        font-family: gabriola;
        }
        </style>
    `;

  return styleByeMessage;
}

function getStylesToDo() {
  var styleToDo = `
    <style>
    body{
        width: 100%;
        height: 100%;
    }
    </style>
    <style>
    .toDo{
        height: 60px;
        width: 380px;
        margin-top: 11px;
        font-family: gabriola;
        display: flex;
        font-size: 25px;
        background: linear-gradient(45deg, #45484d 0%,#000000 81%,#000000 100%);
        color: #f7f4f4;
    }
    </style>
    <style>
    .title{
        text-align: left;
        font-family: gabriola;
        width: 80%;
        heigth: 100%;
        padding-top: 11px;
        padding-left: 30px;
    }
    </style>
    <style>
    .id{
        font-family: gabriola;
        text-align: right;
        width: 20%;
        padding-top: 11px;
        padding-right: 30px;
    }
    </style>
    <style>
    span{
        margin-top:10px;
    }
    </style>
    `;

  return styleToDo;
}
