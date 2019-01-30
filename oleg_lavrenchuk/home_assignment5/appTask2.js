while (true) {
    var num = prompt("Для проверки введите число.Для выхода из программы введите '0'.");
    if (num == "") {
      continue;
    } else if (num == null) {
      continue;
    } else if (num == 0) {
      break;
    } else if (!isNaN(num)) {
      parityCheck(num);
    } else {
      alert("Эта программа работает только з числами.Попробуйте еще раз.");
    } 
  }

  function parityCheck(num){
    return alert((num % 2 == 0) ? 'Четное!' : 'Нечетное!');
  }