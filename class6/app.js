var STATE = {
  student: {
    name: "Mikita",
    age: 30
  },
  prepod: {}
}

// start my app
runMyApp();


function runMyApp() {
  showWelcomeMessage();
  askNextCommandWithDelay();
}

function askNextCommandWithDelay() {
  setTimeout(askNextCommand, 30);
}

function askNextCommand() {
  var command = prompt("Enter command number:");
  switch(command) {
    case '1':
      showStudentData();
      askNextCommandWithDelay();
      break;
    case '0':
      showByeMessage();
      break;
    default:
      askNextCommand();
  }
  // if (command == 0) {
  //   showByeMessage();
  // } else if (command == 1) {
  //   showStudentData();
  // } else {
  //   askNextCommand();
  // }
}
function showStudentData() {
  var studentDataText = '<div class="container">';
  studentDataText += '<p> Student Name is: ' + STATE.student.name + '</p>';
  studentDataText += '</div>'
  clearScreen();
  showMessage(getStyles() + studentDataText);
}
function clearScreen() {
  document.body.innerHTML = '';
}

function showByeMessage() {
  var byeText = `
    <div class="container">
      <p>Bye! Come back soon!</p>
    </div>
  `
  clearScreen();
  showMessage(getStyles() + byeText);
}

function showWelcomeMessage() {
  var welcomeText = `
    <div class="container">
      <p>Hello. Welcome to my app!</p>
      <p>Commands:</p>
      <ul>
        <li>Show student data: 1 </li>
        <li>Exit programm: 0</li>
      </ul>
    </div>
  `
  showMessage(getStyles() + welcomeText);
}

function showMessage(text) {
  document.writeln(text);
}


function getStyles() {
  var STYLE = `
  <style>
    .container {
      padding: 10px;
      border: 1px solid #00ff00;
    }
  </style>
  `;

  return STYLE;
}