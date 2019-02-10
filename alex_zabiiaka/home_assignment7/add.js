/**
 * В app.js нужно написать функцию findByAge которая принимает два аргумента:
 * 1) массив обьектов
 * 2) значение возраста (числовое значение)
 * Функция должна найти в массиве обьектов необходимьій обьект
 * (в котором поле age равно второму параметру функции) и вернуть єтот обьект.
 * Обязательно:
 * Для тестировании функции - создать несколько массивов с обьектами и вьізвать функцию
 * с разньіми аргументами.
 */
var carAge = function (year) {
  return new Date().getFullYear() - year;
};
function findByAge(car, age) {
  for (var i = 0; i < car.length; i++) {
    if (car[i].age === age) {
      return car[i];
    }
  }
}
var cars1 = [
  { modelCar: "Lamborghini Aventador", price: "$350k", yearOfIssue: 2011, age: carAge(2011) },
  { modelCar: "Ferrari LaFerrari", price: "$350k", yearOfIssue: 2013, age: carAge(2013) },
  { modelCar: "Aston Martin One-77", price: "$355k", yearOfIssue: 2009, age: carAge(2009) },
  { modelCar: "Koenigsegg Agera R", price: "$477k", yearOfIssue: 2011, age: carAge(2011) },
  { modelCar: "Bugatti Veyron Super Sport", price: "$435k", yearOfIssue: 2005, age: carAge(2005) },
];
var cars2 = [
  { modelCar: "Noble M600", price: "$360k", yearOfIssue: 2010, age: carAge(2010) },
  { modelCar: "Pagani Huayra", price: "$365k", yearOfIssue: 2011, age: carAge(2011) },
  { modelCar: "Hennessey Venom GT", price: "$435k", yearOfIssue: 2010, age: carAge(2010) },
  { modelCar: "Ultima Maxximus G-Force", price: "$3M", yearOfIssue: 2009, age: carAge(2009) },
  { modelCar: "Pagani Huayra Roadster", price: "€228", yearOfIssue: 2018, age: carAge(2018) },
];
var cars3 = [
  { modelCar: "McLaren F1", price: "$390k", yearOfIssue: 1992, age: carAge(1992) },
  { modelCar: "SSC Ultimate Aero TT", price: "$415k", yearOfIssue: 2004, age: carAge(2004) },
  { modelCar: "PONTIAC Firebird Trans Am", price: "$50k", yearOfIssue: 1977, age: carAge(1977) },
  { modelCar: "Zenvo TS1 GT", price: "$1,5M", yearOfIssue: 2016, age: carAge(2016) },
  { modelCar: "Lykan Fenyr SuperSport", price: "$3,4M", yearOfIssue: 2017, age: carAge(2017) },
];
console.log(findByAge(cars1, 8));
console.log(findByAge(cars1, 10));
console.log(findByAge(cars1, 5));
console.log(findByAge(cars2, 8));
console.log(findByAge(cars2, 10));
console.log(findByAge(cars2, 6));
console.log(findByAge(cars3, 8));
console.log(findByAge(cars3, 10));
console.log(findByAge(cars3, 2));

