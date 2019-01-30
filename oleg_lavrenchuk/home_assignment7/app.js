function findByAge (massObj, num) {
    for(var i = 0; i < massObj.length; i++) {
    if(massObj[i].age === num) {
        return massObj[i];
        }
    }   
}

var massObj1 = [
    {name: "Tiger", age: 10 },
    {name: "Viper", age: 24 },
    {name: "Kim", age: 5 },
    {name: "Kendal", age: 13},
    {name: "Shark", age: 54 }
];

var massObj2 = [
    {name: "Tiger", age: 34 },
    {name: "Viper", age: 12 },
    {name: "Kim", age: 51 },
    {name: "Kendal", age: 88},
    {name: "Shark", age: 14 }
];

var massObj3 = [
    {name: "Tiger", age: 42 },
    {name: "Viper", age: 56 },
    {name: "Kim", age: 11 },
    {name: "Kendal", age: 18},
    {name: "Shark", age: 3 }
];

console.log(findByAge(massObj1, 5));
console.log(findByAge(massObj2, 12));
console.log(findByAge(massObj3, 18));