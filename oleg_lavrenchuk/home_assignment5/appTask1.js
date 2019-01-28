

var a = parseInt(prompt("Введите первое число!"));
var b = parseInt(prompt("Введите второе число!"));

var x = prompt("Введите математическую операцию!");

switch(x){
    case '+':
            sum();
            break;
    case '-':
            sub();
            break;
    case '*':
            mult();
            break;
    case '/':
            div();
            break;
    default:
            alert("Не правильная математическая операция.");
    }




function sum(a,b){
    return alert(a + b);
}
function sub(a,b){
    return alert(a - b);
}
function mult(a,b){
    return alert(a * b);
}
function div(a,b){
    return alert(a / b);
}