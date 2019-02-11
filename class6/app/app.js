var STATE = {
  student: { name: "Nik", age: "25" },
  prepod: {}
};
//`` multiline string
//var string1 = 'test';
//var string2 = "test";
//console.log(string1 == string2);

//start my app
runClassWork6();

function runClassWork6() {
  showWelcomMessage();
  askNextCommandWithDelay();
}
function showWelcomMessage() {
  //document.write('Hello. Welcome to my app');
  var welcomeText = `
        <div class="container">
            <p> Hello. Welcome to my app! </p>
        </div>
    `;
  showMessage(getStyles() + welcomeText);
}

function askNextCommandWithDelay() {
    setTimeout(askNextCommand, 1500);
  }

function askNextCommand() {
  var ask = prompt('Enter command, to finish press "0"');
  switch (ask) {
    case "1":
      showStudentData();
      askNextCommandWithDelay();
      break;
    case "0":
      showByeMessage();
      break;
    default:
      askNextCommand();
  }
  // if (ask == "0") { showByeMessage();} else if (ask == 1){showStudentData()}else{askNextCommand();}
}

function showStudentData() {
  var studentDataText = "";
  studentDataText += "<p> Student Name is: " + STATE.student.name + "</p>";
  showMessage(getStyles() + studentDataText);
}

function showByeMessage() {
  var byeText = `
        <div class="container">
            <p> Good Bye! Come back soon! </p>
        </div>
    `;
  clearScreen();
  showMessage(getStyles() + byeText);
}
function showMessage(text) {
  document.writeln(text);
}

function clearScreen() {
  document.body.innerHTML = "";
}
//функция для стилей
function getStyles() {
  var STYLE = `
 <style>
 .container {
    padding: 10px;
    border: 1px solid navy;
}
 </style>
`;
  return STYLE;
}
