function findByAge (Obj, num) {
    for(var i = 0; i < Obj.length; i++) {
    if(Obj[i].age === num) {
        return Obj[i];
        }
    }
}

var Obj1 = [
    {name: "John", age: 10 },
    {name: "Georg", age: 24 },
    {name: "Jason", age: 5 },
    {name: "Judi", age: 13},
    {name: "Edward", age: 54 }
];

var Obj2 = [
    {name: "John", age: 34 },
    {name: "Georg", age: 12 },
    {name: "Jason", age: 51 },
    {name: "Judi", age: 88},
    {name: "Edward", age: 14 }
];

var Obj3 = [
    {name: "John", age: 42 },
    {name: "Georg", age: 56 },
    {name: "Jason", age: 11 },
    {name: "Judi", age: 18},
    {name: "Edward", age: 3 }
];

console.log(findByAge(Obj1, 5));
console.log(findByAge(Obj2, 12));
console.log(findByAge(Obj3, 18));
