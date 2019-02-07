var a = parseInt(prompt("Type first number"));
var b = parseInt(prompt("Type second number"));
var c = prompt("Type the number of the mathematical operation where 1 - Sum, 2 - Difference, 3 - Multiplication, 4 - Division");

switch (c) {
  case "1":
    console.log(sum(a, b));
    break;
  case "2":
    console.log(sub(a, b));
    break;
  case "3":
    console.log(mult(a, b));
    break;
  case "4":
    console.log(div(a, b));
    break;
}

function sum(a, b) {
  return (a + b);
}

function sub(a, b) {
  return (a - b);
}

function mult(a, b) {
  return (a * b);
}

function div(a, b) {
  return (a / b);
}
