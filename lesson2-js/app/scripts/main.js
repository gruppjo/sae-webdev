var printLessonExamples = function () {
  console.log('Lesson 2 - JavaScript');

  // DYNAMICALLY TYPED
  console.log('------- DYNAMIC -----');
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
  // Math.PI = 3;
  console.log(2*Math.PI);


  // SYNTAX
  if (number === 1) {
    console.log('yes, it\'s 1');
  }


  // FIRST CLASS FUNCTIONS
  // LAMBDA FUNCTIONS
  console.log('------- LAMBDA FUNCTIONS -----');
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
  console.log('------- CALLBACKS -----');
  var async = function (callback) {
    setTimeout(function () {
      callback();
    }, 500);
  };
  var processRequest = function () {
    // process request data
    console.log('request is ready');
  };
  async(function () {
    async(processRequest);
    console.log('first request is ready');
  });


  // FUNCTION SCOPE // BLOCK SCOPE
  console.log('------- FUNCTION SCOPE -----');
  (function () { // IEF - Immediately executing fuctions
    // to create a new scope
    if (true) {
      var a = '1';
    }
    console.log(a);
  })();

  // QUIRKS
  console.log('------- QUIRKS -----');
  var a = '1';
  if (a == '1') {
    console.log('a is 1');
  }
  if (a != '2') {
    console.log('a is not 2');
  }
  if (a == 1) {
    console.log('a is 1');
  }
  if (a != 2) {
    console.log('a is not 2');
  }
  if (a === 1) {
    console.log('a is 1');
  }
  if (a !== 2) {
    console.log('a is not 2');
  }
  if ('' == false) {
    console.log('true?');
  }
};

// EVENT DRIVEN
window.addEventListener('load', function () {
  printLessonExamples();
  setTimeout(function () {
    ooJS();
    awesomeness();
  }, 1100);
}, false);

var ooJS = function () {
  console.log('------- OOJS -----');
  console.log('------- OBJECT LITERAL -----');
  var obj = {}; // creates an OBJECT
  obj = new Object(); // also creates an object

  console.log('------- FUNCTIONAL -----');


  var createAnimal = function (name) {
    var animal = {
      name: name,
      sayName: function () {
        console.log('Hello I\'m ' + this.name);
      },
      eat: function () {
        console.log('nom');
      }
    };

    return animal;
  };

  var animal = createAnimal('bob');
  var animal2 = createAnimal('charles');
  animal.sayName();
  animal2.sayName();

  var createCat = function (name) {
    var cat = createAnimal(name);
    cat.sayName = function () {
      console.log('meow I am ' + this.name);
    };
    cat.meow = function () {
      console.log('meow, I am cat');
    }

    return cat;
  };

  var cat = createCat('cat');
  cat.sayName();
  cat.meow();
  cat.eat();
  console.log(cat);


  console.log('------- PROTOTYPAL -----');
  var cat2 = Object.create(cat);
  console.log(cat2);
  cat2.eat();
  cat2.meow();

  console.log('------- PSEUDOCLASSICAL -----');
  var Animal = function (name) {
    this.name = name;
    this.sayName = function () {
      console.log(this.name);
    };
  };

  var animal = new Animal('peter');
  animal.sayName();
  console.log(animal);

  var Cat = function () {
    this.meow = function () {
      console.log('meow');
    };
  };

  Cat.prototype = new Animal('cat');

  var cat = new Cat();
  cat.sayName();
  console.log(cat);
};

var awesomeness = function () {
  console.log('------- PRIVACY -----');
  var obj = {
    name: 'jon',
    sayName: function () {
      console.log(this.name);
    }
  };

  obj.sayName();
  obj.name = 'x';
  obj.sayName();

  // CLOSURE
  var createObjectWithPrivacy = function (name) {
    var name = name;

    var obj = {
      sayName: function () {
          console.log(name);
      },
      changeName: function (newName) {
        if (typeof newName === 'string') {
          name = newName;
        }
      }
    };

    return obj;
  };

  obj = createObjectWithPrivacy('jon');
  obj.sayName();
  obj.name = 'peter';
  obj.sayName();
  obj.changeName(1);
  obj.sayName();
  obj.changeName('bob');
  obj.sayName();


  console.log('------- PSEUDOCLASSICAL PRIVACY -----');
  var Person = function Person(first,last,age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500; // private

    this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
    };
  };
  var person = new Person('Jon', 'Doe', 25);
  console.log(person.bankBalance, person.getBalance());


  console.log('------- DUCKTYPING -----');
  var cat = {
    name: 'cat',
    meow: function () {
      console.log('meow I am ' + this.name);
    }
  };

  var dog = {
    name: 'dog',
    meow: function () {
      console.log('wuff I am ' + this.name);
    }
  };

  var fireize = function (obj) {
    obj.breatheFire = function () {
      console.log(this.name + ' breathes FIRE!');
    };
  };

  fireize(cat);
  fireize(dog);

  cat.breatheFire();
  dog.breatheFire();
};
