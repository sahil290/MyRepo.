/*
different ways of accessing objects in javascript
*/
const person = {
    fname : "Sahil",
    lname : "Katoch",
    age : 23,
  }
  //simple way of accessing objects//
  console.log(person);
// accessing object properties in one line//
  console.log(person["fname"], person["lname"], person["age"]);
// adding all properties of objects in one line called concatenation//
  console.log(person["fname"]+ " "+ person["lname"]+ " " +person["age"]);
//another way accessing property //
  console.log(person.fname);
// delete methods helps to remove any item from an object//
  delete person.fname;
  console.log(person);
// another way of removing item from an object//
  delete person["fname"];
  console.log(person);
// adding new item in an object by just simply assuming //
  person.nationality = "Indian";
  console.log(person);