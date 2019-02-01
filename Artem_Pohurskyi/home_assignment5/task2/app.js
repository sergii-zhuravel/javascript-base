var Num = parseInt(prompt('Введите число. Для выхода введите "0"'));

function checkNum(Num){
    if(Num % 2 == 1){
        return 'Вы ввели: ' + Num + '.Это не чётное число';
    }
    else{
        return 'Вы ввели: ' + Num + '.Это чётное число';
    } 
}
while(Num != 0){
        console.log(checkNum(Num));
}