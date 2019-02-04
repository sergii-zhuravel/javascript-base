var STATE = {
    student: {},
    prepod: {} 
};


runMyApp();

function runMyApp () {

    showWelcomMessage();
    askNextCommandWithDelay();
}

function showWelcomMessage() {
    // document.writeln("Hello. Welcome to my app!");
    var welcomeText = `
        <div class = "container">
            <p>Hello. Welcome to my app!<p>
        </div>
    `;
    ShowMessage(getStyle() + welcomeText);
}

function ShowMessage(text) {
    document.writeln(text);
}

function askNextCommand () {
    var answerCommand = prompt("Введите команду, для выхода введите 0");
    if (answerCommand == 0) {
        showGoodByeMessage();
    } else {
        askNextCommand();
    }
}

function showGoodByeMessage() {
    // document.writeln("Hello. Welcome to my app!");
    var goodByeText = `
        <div class = "container">
            <p>Bye!<p>
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
                border: 1px solid #00ff00;
            }

        </style>
`;
return STYLE;
}
