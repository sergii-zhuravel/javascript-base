var person = {
  name: `Svitlana`,
  age: `32`
};

var newAge = Number(prompt("Type new age"));

function changePersonAge(person, newAge) {
  if (`age` in person) {
    person.age = newAge;
  } else {
    return false;
  }
}
changePersonAge(person, newAge);
console.log(person);
