# Lesson 2 & 3
### JavaScript

---

## What is JavaScript

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (implementation)
- [ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) (standard, currently ES5/6/7)
- JavaScript (JS) completely unrelated to Java
- developed in 1995 by [Brendan Eich](https://de.wikipedia.org/wiki/JavaScript) in [10 days](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript)

---

## Including scripts in HTML

Examples in:
```
lesson2JS/app/index.html (starting line 92)
```

internal script:

```js
  <script>
  // code here
  </scrip>
```

external script:

```
<script src="path/to/file"></scrip>
```

---

## Execution

- at parse time (see `lesson2JS/app/index.html line 93`), e.g. **main()**
- at event (see `lesson2JS/app/index.html line 94`)

---

## Running scripts outside the browser
- in the node console. Type: **node**
- as node script. Type **node myscript.js**

---

## Live coding session

1. watch and learn
2. try yourself

---

## Versatile scripting language

- memory managed
- interpreted (just in time compilation)
- dynamically typed (variables, objects, globals)
- Syntax similar to C and Java
- first class functions
  - lambda functions (as variables, parameters), callbacks
  - function scoped, closures
- quirks
  - three equals

---

## More features
- object oriented (prototypes instead of classes)
  - object literal
  - functional: creator function (inheritance via other creator function)
  - prototypal: Object.create (inheritance via parameter)
  - pseudoclassical: constructor function (inheritance via .prototype)
- event-driven/asynchronous (user, backend, callbacks!)

---

## Why so successful?
- many reasons to hate JavaScript
- => awesomeness
  - implement privacy (creator function)
  - implement ducktyping (fireize)
- => much more sophisticated than other languages
- build your own new language concepts (promises, ...)
  - community driven rather than standard driven

---

## Rapidly changing
- ES6 (ECMAScript 6) brings a ton of [new features](https://github.com/lukehoban/es6features)
  - arrow functions, classes, let & const, iterators, modules, promises, ...
- [Typescript](https://www.typescriptlang.org/) brings types to JavaScript
- => JS!=JS - learn a strong basis, know what you're doing!

---

## Task 1 (30 Minutes)
- **main.js** write a function that, given a string as argument
  - splits all the words (delimited by space)
  - counts all the words
  - counts all the characters in a total sum
  - prints each word to the console
  - prints the whole sentence reversed
  - executes when everything's done loading (window.load event)
- trusted sources:
  - Mozilla Developer Network - https://developer.mozilla.org/
  - Stackoverflow - http://stackoverflow.com/

---

## Task 2 (30 Minutes)
- create an object that has this function as a property
- implement this functionality:
  - acquire a sentence by the user
  - analyze it on a button press
  - show the results on the page

---

## Hands-on

```
https://www.codecademy.com/en/tracks/javascript-combined
```
- Functions - Introduction to Functions
- For Loops - Introduction to For Loops
- Data Structures - Arrays and Objects
- Objects I - Introduction to Objects I
- Objects II - Introduction to Objects II

Alternative: http://javascript-roadtrip.codeschool.com/levels/1/challenges/3

---

## Resources
- Book: Douglas Crockford, [JavaScript the Good Parts](http://www.amazon.de/JavaScript-Parts-Working-Shallow-Grain/dp/0596517742)  
- Mozilla Developer Network (mdn)
  - [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for JavaScript, CSS, HTML
  - [js intro](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript), [object oriented js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript), [inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- other important sites
  - caniuse - http://caniuse.com/
  - stackoverflow - http://stackoverflow.com/
- videos
  - best [introduction to JS](https://www.youtube.com/watch?v=v2ifWcnQs6M) by Douglas Crockford (inventor of [JSON](https://en.wikipedia.org/wiki/JSON))
  - [part 2](https://www.youtube.com/watch?v=Y2Y0U-2qJMs)
  - [part 3](https://www.youtube.com/watch?v=DwYPG6vreJg)
  - [code as craft video](http://original.livestream.com/etsy/video?clipId=pla_1463e546-47ed-4a93-b59a-bd52b236e8b8) by Douglas Crockford
  - brief [history](https://brendaneich.com/2010/07/a-brief-history-of-javascript/) by Brendan Eich (creator of JS)
