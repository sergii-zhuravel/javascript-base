while (true) {
  var num = prompt("Для проверки введите число.Для выхода из программы введите '0'.");
  if (num == "") {
    continue;
  } else if (num == null) {
    continue;
  } else if (num == 0) {
    break;
  } else if (num % 2 == 0) {
    alert("Число " + num + " четное!");
  } else if (num % 2 == 1) {
    alert("Число " + num + " нечетное!");
  } else {
    alert("Эта программа работает только з числами.Попробуйте еще раз.");
  }
}
