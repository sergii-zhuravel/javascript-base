for (i = 1; i < Infinity; i++) {
  var i = prompt("Type number");
  if (i == 0) {
    break;
  }
  if (i % 2 == 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}
