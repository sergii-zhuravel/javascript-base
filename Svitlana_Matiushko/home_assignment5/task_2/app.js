do {
  var i = prompt("Type number");
  evenOrOdd(i);
} while (i != 0);

  function evenOrOdd(i) {
    console.log((i % 2 == 0) ? `Even number` : `Odd number`);
  }