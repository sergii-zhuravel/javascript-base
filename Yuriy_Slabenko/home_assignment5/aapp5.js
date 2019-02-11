while (true) {
    var userNum = Number(prompt("Введите число! Для выхода введите 0"));
    if (userNum) {
        checkParity(userNum);
    } else {
        break;
    }
}

function checkParity (num) {
    if (num % 2) {
        console.log("Число " + num + " нечетное");
        document.write("Число " + num + " нечетное");
    } else {
        console.log("Число " + num + " четное");
        document.write("Число " + num + " четное");
    }
}