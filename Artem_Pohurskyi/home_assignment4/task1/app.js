var Num = prompt('Введите число');
for(var i = 1;i <= Num;i++){
    if(i%2 == 1) {
        continue;
    }    
    console.log(i);
}