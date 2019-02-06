
while (true){
    var userNumber = +prompt("Enter your value (to close enter 0)");
  if (userNumber) {
    checkCountable(userNumber);
  } else {
    console.log("Вы ввели '0'. До свиданья! Повторить - нажмите 'F5'");
    break;
  }
}

function checkCountable(userNumber) {
  if (userNumber % 2 == 0) {
    console.log("Вы ввели " + userNumber + " это - Четное число ");
  } else {
    console.log("Вы ввели " + userNumber + " это - Не четное число ");
  }
}
