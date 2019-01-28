while (true) {
    var userNum = parseInt(prompt("Введите число и нажмите 'Ok'! (для выхода введите '0')"));
    if (!userNum) {
        break;
    }
    if (userNum % 2) {
        document.write("Число " + userNum + " является нечетным" + "<br>");
        console.log("Число " + userNum + " является нечетным");
    } else {
        document.write("Число " + userNum + " является четным" + "<br>");
        console.log("Число " + userNum + " является четным");
    }
} 