var newAge = 30;
function changePersonAge(person, newAge) {
  if ("age" in person) {
    person.age = newAge;
  } else {
    return false;
  }
}
var person = {
  name: "Nick",
  age: 20
};

