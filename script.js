// ! Task 1
//How to compare two JSON have the same properties without order ?
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

let isEqual = (a, b) => {
  let obj1keys = Object.keys(a);
  let obj2keys = Object.keys(b);

  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  for (let value of obj1keys) {
    if (a[value] !== b[value]) {
      return false;
    }
  }
  return true;
};

console.log(isEqual(obj1, obj2));

// ! Task 2
//use the rest countries API URL and display all the country flags in console
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();

request1.onload = function () {
  var data = request1.response;

  var result = JSON.parse(data);

  for (var i = 0; i < result.length; i++) {
    console.log("Flag:", result[i].flags.svg);
  }
};

// ! Task 3
//use the same rest countries and print all countries names, regions,sub-region and populations
var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data = request2.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(
      "Country Name:" + " " + result[i].name.common,
      "Region:" + " " + result[i].region,
      "Sub-Region:" + " " + result[i].subregion,
      "Population:" + " " + result[i].population
    );
  }
};
