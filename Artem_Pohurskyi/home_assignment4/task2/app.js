for(i = 0;i < 1000000; i++){
    var Num = parseInt(prompt('Введите число. Для выхода введите "0"'));

    if(Num == 0){
        console.log('Вы ввели "0"');
        break;
    }
    else{
        if(Num % 2 == 1){
            console.log('Вы ввели: ' + Num + '.Это не чётное число');
        }
        else{
            console.log('Вы ввели: ' + Num + '.Это чётное число');
        }
    }
}