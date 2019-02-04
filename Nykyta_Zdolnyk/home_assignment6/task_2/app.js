var Person = {
    name: "Никитос",
    age: 20
};

var userAge = Number(prompt("Введите новое значение Age"));
console.log(changePersonAge(Person, userAge));

function changePersonAge (obj, newAge) {
    if("age" in obj) {
        obj.age = newAge; 
        return obj;
    } else {
        return false;
    }
}
