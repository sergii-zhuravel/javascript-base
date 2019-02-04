var a = promt("Введите число а");
var b = promt("Введите число b");

var myFunction = new Function('a,b' , 'return' + promt("Введите выражение"));

console.log(myFunction(a,b));


