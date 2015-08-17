console.log('Lesson 2 - JavaScript');

// DYNAMICALLY TYPED
var number = 'hallo';
console.log(number, typeof number);
number = 1;
console.log(number, typeof number);

var car = {};
console.log(car, typeof car);
car.doors = 4;
console.log(car, car.doors);

console.log(Math.PI);
var JonsNumber = 123874.123;
Math.JonsNumber = JonsNumber;
console.log(Math.JonsNumber);
Math.PI = 3;
console.log(2*Math.PI);


// SYNTAX
if (number === 1) {
  console.log('yes, it\'s 1');
}


// FIRST CLASS FUNCTIONS
// LAMBDA FUNCTIONS
var add1 = function (x) {
  return x + 1;
};
console.log(add1(number));

var sayHello = function () {
  console.log('hello');
};
var doStuff = function (func) {
  return func();
};
doStuff(sayHello);
doStuff(function () {
  console.log('bye');
});

(function () {
  console.log('hello!');
})();

// CALLBACK
