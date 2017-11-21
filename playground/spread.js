// function add (a, b) {
//   return a+b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

person = ['Neriad', 43];
personTwo = ['Liat', 34];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age + '.');
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Neriad', ...names];

final.forEach(function (name) {
    console.log('hi ' + name);
});
