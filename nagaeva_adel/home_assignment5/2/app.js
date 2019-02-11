
function even(a) {
    return console.log((a % 2 == 0) ? (a + " - четное число") : (a + " - нечетное число"))
}

do {
    var a = prompt("Введите число пожалуйста");
    even(a)
} while (a != 0);



