var userNum = parseInt(prompt("Введите число!"));

document.write("Ввод: " + userNum);

// userNum = userNum + 1;
userNum += 1;
userNum++;
++userNum;
userNum += +"1";
userNum += true;

document.write(" Результат: " + userNum);
