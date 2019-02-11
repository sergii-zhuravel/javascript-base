var a = +prompt("Enter the first number :");
var b = +prompt("Enter the second number :");
var c = +prompt(
  "Enter the number of operation: (1 - sum; 2 - subtraction; 3 - multiplication; 4 - division)."
);

document.write("The first number: " + a + "</br>");
document.write("The second number: " + b + "</br>");

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

if (c == 1) {
  document.write("Result of sum: " + sum(a, b) + "</br>");
} else if (c == 2) {
  document.write("Result of subtraction: " + sub(a, b) + "</br>");
} else if (c == 3) {
  document.write("Result of multiplication: " + mult(a, b) + "</br>");
} else if (c == 4) {
  document.write("Result of division: " + div(a, b) + "</br>");
} else {
  document.write("You entered the wrong number!");
}
