function changePersonAge(person, age) {
    if (!("age" in person)) {
        return false;
    }
    person.age = age;
    return person;
};
console.log(changePersonAge({ name: "Nick", age: 20}, 30))