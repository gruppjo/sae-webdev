# Lesson 2 & 3
### JavaScript

---

## What is JavaScript

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (implementation)
- [ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) (standard, currently ES5/6)

---

## Features

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

- event-driven
- object oriented (prototypes instead of classes)
  - object literal
  - functional: creator function (inheritance via other creator function)
  - prototypal: Object.create (inheritance via parameter)
  - pseudoclassical: constructor function (inheritance via .prototype)
- => awesomeness
  - implement privacy (creator function)
  - implement ducktyping (fireize)
- => much more sophisticated than other languages

---

## Execution

- in the node console. Type: `node`
- as node script. Type `node myscript.js`
- in the browser
  - in the console (open developer tools)
  - at parse time (see `lesson2JS/app/index.html line 55`)
  - at event (see `lesson2JS/app/index.html line 56`)

---

## Including scripts in HTML

Examples in:
```
lesson2JS/app/index.html (starting line 54)
```

internal script:

```
  <script>
  // code here
  </scrip>
```

external script:

```
<script src="path/to/file"></scrip>
```

---

## Hands-on

```
https://www.codecademy.com/en/tracks/javascript-combined
```

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
