var STATE = {
  student: {},
  prepod: {}
}

// start my app
runMyApp();


function runMyApp() {
  showWelcomeMessage();
  askNextCommandWithDelay();
}

function askNextCommandWithDelay() {
  setTimeout(askNextCommand, 20);
}

function askNextCommand() {
  var command = prompt("Enter command number:");
  if (command == 0) {
    showByeMessage();
  } else {
    askNextCommand();
  }
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