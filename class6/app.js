var STATE = {
  student: {},
  prepod: {}
}

// start my app
runMyApp();


function runMyApp() {

  showWelcomeMessage();
  // askNextCommand();
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