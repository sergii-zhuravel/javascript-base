var person = {};
person["name"] = prompt("Enter the Name of the Person");
person["age"] = +prompt("Enter the Age of the Person (only years)");
var variable = +prompt('Enter new Age');
console.log(changePersonAge(person, variable));

function changePersonAge(person, variable) {
  if (person["age"]) {
    person["age"] = variable;
    return person;
  } else {
    return console.log('False');
  }
}
