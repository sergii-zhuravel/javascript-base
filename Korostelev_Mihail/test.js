var a = 5;
var b = 6;
var c = a + b;
c;
var d = 2;
var g = d / 0;
g;
var a = 4 > 2 ? "True" : "False";
a;
var n = 5;
if (n % 2 === 0) {
  console.log("True");
} else {
  console.log("false");
}

//WHILE
var a = 5;
// while ( a > 5){
// console.log ("Hello World") Бесконечный цикл
//}
while (a > 2) {
  console.log("Hello");
  a--;
}
while (a > 2) {
  console.log("Itea") + a;
  a--;
}
while (a >= 2) {
  console.log("World") + a;
  a--;
}

//DO
do {
  console.log("Hello world");
} while (false);

var b = 5;
do {
  console.log(b--);
} while (b >= 0);

//FOR
for (var i = 0; i <= 10; i++) {
  console.log("Hello ITea" + i);
} //step 1
for (var i = 0; i <= 10; i += 2) {
  console.log("Hello ITea" + i);
} //step 2
for (var i = 0; i <= 10; i += 3) {
  console.log("Hello ITea" + i);
} //step 3
for (var i = 0; i <= 100; i += 10) {
  var intStr = i.toString().length;
  document.write(intStr + "<br /");
} //step 10 .length (1=0 2 = 10 2 = 20 ... 3 = 100)
for (var i = 1; i <= 6; i++) {
  document.write("<h" + i + ">" + " Hello ITea" + "</h" + i + ">");
}

//BREAKE
while (true) {
  break;
  console.log("Test 1");
} // no appear

while (true) {
  console.log("Test 2");
  break;
  console.log("Test 1");
} // only test 2

var q = 5;
while (true) {
  console.log(q--);
  if (q < 0) break;
}

for (var j = 10; j > 0; j--) {
  console.log(j);
  if (j == 5) break;
}

//continue

for (var w = 10; w > 0; w--) {
  console.log(w);
  if (w == 5) continue;
} // continue ne srabotaet

for (var jw = 10; jw > 0; jw--) {
  if (jw == 5) continue;
  console.log(jw);
}// miss 5
for (var jq = 10; jq > 0; jq--) {
    if (jq % 2 == 1) continue;
    console.log(jq);
  } //четные
  for (var wq = 10; wq > 0; wq--) {
    if (wq % 2 == 0) continue;
    console.log(jq);
  } //нечетные
var sum = 0 //sum = аккумулятор // i = переменная
  for ( var i = 0; i < 10; i++) {
      sum += i; // для умножения i = 1 formula sum *=1
  }

  //Цикл в цикле
  for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= 10; j++){
          debugger;//debugger точка остановки в коде
          document.write(i * j + " ");
      }
    document.write ("<BR />")
  }