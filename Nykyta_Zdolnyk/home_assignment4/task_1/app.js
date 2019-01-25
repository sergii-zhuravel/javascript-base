var userNum = parseInt(prompt("Введите число!"));

for (var i = 1; i <= userNum; i++) {
  if (i % 2) {
    continue;
  }
  document.write(i + "<br>");
  console.log(i);
}
