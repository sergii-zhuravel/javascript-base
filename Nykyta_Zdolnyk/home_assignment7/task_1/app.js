obj1  = { name: "name1",  age: 10  };
obj2  = { name: "name2",  age: 30  };
obj3  = { name: "name3",  age: 30  };
obj4  = { name: "name4",  age: 40  };
obj5  = { name: "name5",  age: 50  };
obj6  = { name: "name6",  age: 60  };
obj7  = { name: "name7",  age: 70  };
obj8  = { name: "name8",  age: 80  };
obj9  = { name: "name9",  age: 90  };
obj10 = { name: "name10", age: 100 };

var collectionObjects1 = [obj1, obj2, obj3];
var collectionObjects2 = [obj4, obj5, obj6];
var collectionObjects3 = [obj7, obj8, obj9, obj10];

console.log(fyndByAge(collectionObjects1, 20));
console.log(fyndByAge(collectionObjects2, 60));
console.log(fyndByAge(collectionObjects3, 100));

function fyndByAge (arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age === num) {
            return arr[i];
        }
    }
    return false; 
}
  
