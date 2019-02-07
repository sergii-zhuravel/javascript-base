var arr = [
  { firstName: "Artem", lastName: "Pohurskyi" },
  { age: 19, dateOfBirth: 3, monthOfBirth: "January" },
  { country: "Ukraine", city: "Boryspil" }
];
// var arr1 = [
//     {test: 1, test2: 'string'},
//     {test3: 3.4, test4: [1, 2, 3]}
// ];
// var arr2 = [
//     {test5: 2, test6: 22},
//     {test7: 222, test8:2222}
// ]
var Age = 19;
function findByAge(arr, Age) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (age in Object == Age) {
        break;
      }
    }
  }
  return arr[1];
}
