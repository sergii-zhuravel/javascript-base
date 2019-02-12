var team1 = [];
var team2 = [];
var team3 = [];

function user(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

var user1 = new user(1, "Nik", 12);
var user2 = new user(12, "Sam", 17);
var user3 = new user(3, "Jessie", 10);
var user4 = new user(4, "Tom", 12);
var user5 = new user(6, "Kim", 11);
var user13 = new user(5, "Jim", 16);
var user10 = new user(2, "Jessie", 17);
var user6 = new user(7, "Joy", 19);
var user7 = new user(8, "Jack", 12);

team1[0] = user1;
team2[0] = user4;
team3[0] = user5;

team1[1] = user2;
team2[1] = user3;
team3[1] = user6;

team1[2] = user13;
team3[2] = user10;

team1[3] = user7;

var askedAge = +prompt("Enter age of user");

console.log("В первой команде с возрастом " + askedAge + ":");
console.log(findByAge(team1, [askedAge]));
console.log("Во второй команде с возрастом " + askedAge + ":");
console.log(findByAge(team2, [askedAge]));
console.log("В третей команде с возрастом " + askedAge + ":");
console.log(findByAge(team3, [askedAge]));

/*function findByAge(arr, askedAge) {
  for (var a = 0; a < arr.length; a++) {
    if (askedAge == arr[a].age) {
      return arr[a];
    } else {
      return "Не обнаружено";
    }
  }
}*/

function findByAge(arr, askedAge) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === askedAge) return [i, j];
      }
    }
  }
