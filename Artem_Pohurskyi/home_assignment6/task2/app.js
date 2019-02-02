var person = {
    name: 'Artem',
    age: 19
}
var newAge = 20;
function changePersonAge(person, newAge){
if("age" in person){
    person.age = newAge;
} else{
    return false;
}
}
changePersonAge(person, newAge);