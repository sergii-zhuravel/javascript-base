var Person = {
    name: "Nick",
    age: 20
};

var sAge = Number(prompt("Введите возраст"));
console.log(changePersonAge(Person, sAge));

function changePersonAge (obj, sAge) {
    if("age" in obj) {
        obj.age = sAge;
        return obj;
    } else {
        return false;
    }
}