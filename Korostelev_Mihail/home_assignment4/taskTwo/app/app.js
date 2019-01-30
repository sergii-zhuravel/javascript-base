for (var userNumber = Number.parseInt(prompt("Enter your value (to close enter 0)"));
  userNumber > 0;
  userNumber = parseInt(prompt("Enter your value (to close enter 0)"))
) {
  if (userNumber == 0) {
    break;
  } else {
    if (userNumber % 2 == 0) {
      console.log(" Четное число " + "<br />");
    } else {
      console.log(" Не четное число " + "<br />");
    }
  }
}
