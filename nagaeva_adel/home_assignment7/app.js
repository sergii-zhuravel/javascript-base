function findByAge (massObj, num) {
    for(var i = 0; i < massObj.length; i++) {
    if(massObj[i].age === num) {
        return massObj[i];
        }
    }   
}

var massObj1 = [
    {name: 'name1', age: 10},
    {name: 'name2', age: 11},
    {name: 'name3', age: 12},
    {name: 'name4', age: 13},
    {name: 'name5', age: 14}
];

var massObj2 = [
    {name: 'name6', age: 15},
    {name: 'name7', age: 16},
    {name: 'name8', age: 17},
    {name: 'name9', age: 18},
    {name: 'name10', age: 19}
];

var massObj3 = [
    {name: 'name11', age: 20},
    {name: 'name12', age: 21},
    {name: 'name13', age: 22},
    {name: 'name14', age: 23},
    {name: 'name15', age: 24}
];

console.log(findByAge(massObj1, 10));
console.log(findByAge(massObj2, 15));
console.log(findByAge(massObj3, 20));