function changePersonAge(obj, num) {
    if(obj.hasOwnProperty('age')) {
        obj.age = num;
        return obj;
    } else {
        return false;
    }
}

console.log(changePersonAge({name: "Kim", age: 20}, 30));