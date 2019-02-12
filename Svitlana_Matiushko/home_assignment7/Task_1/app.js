function findByAge(array, num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].age === num) {
      return array[i];
    }
  }
}
var array1 = [{ name: `Svitlana` }, { pet: `Ajax`, age: 7 }];

var array2 = [{ name: `Natasha` }, { pet: `Lyusya`, age: 10 }];

var array3 = [{ name: `Marina` }, { pet: `Rybka`, age: 2 }];

var array4 = [{ name: `Larisa` }, { pet: `Kesha`, age: 1 }];

console.log(findByAge(array1, 7));
console.log(findByAge(array2, 10));
console.log(findByAge(array3, 2));
console.log(findByAge(array4, 1));
