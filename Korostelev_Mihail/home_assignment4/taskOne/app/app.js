var userValue = Number(prompt("Enter your value"));
var numberValue = 1;
do {
   numberValue++;
  if (numberValue % 2 == 1) continue;
  document.write(numberValue + '<br />');
} while (numberValue < userValue);
