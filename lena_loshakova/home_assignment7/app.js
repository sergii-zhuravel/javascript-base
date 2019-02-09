var arr1 = [
  { name: "Olena", age: 19 },
  { surname: "Loshakova", country: "Ukraine" },
  { city: "Kyiv" }
];
var arr2 = [
  { name: "Oleg", age: 25 },
  { surname: "Smirnov", country: "Ukraine" },
  { city: "Lviv" }
];
var arr3 = [
  { name: "Katya", age: 34 },
  { surname: "Martynenko", country: "Ukraine" },
  { city: "Chernigiv" }
];
function findByAge(arr1, age) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].age == age) {
      return arr1[i];
    }
  }
}
console.log(findByAge(arr1, 19));
console.log(findByAge(arr2, 25));
console.log(findByAge(arr3, 34));
