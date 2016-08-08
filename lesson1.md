
# Lesson 1
#### Hello, HTML, CSS

---

## Agenda

1. [Hello!](#hello)
2. [Expectations](#expectations)
3. [Roadmap](#roadmap)
4. [Agreements](#agreements)
4. [Lesson 1](#lesson-1)

---

## Hello

- Jonathan Grupp / 26yrs
	- [github.com/gruppjo](http://github.com/gruppjo)
	- [twitter.com/jonathangrupp](https://twitter.com/JonathanGrupp)
- Bachelor of Science (Applied Computer Science) IBM/DHBW Stuttgart 2012
- mainly web/mobile development
	- [generator-m-ionic](https://github.com/mwaylabs/generator-m-ionic)
- about me

---

## Who are you?

- name & age
- education & background
- personal & professional goals
- tell us about yourself

---

## Expectations

---

## You

- your development experience?
	- web? Git/GitHub? Testing?
	- other: c++/c/c#/java, OO, unity, maths&physics, opengl/directx, shaders, ...
- English?
- your expectations
- web dev terms? => mindmap

---

## Me

1. fun :)
2. teach you how to teach yourself
3. hands-on: play & experiment

---

## Roadmap
- lesson 1 through 3: HTML, CSS, JavaScript
- lesson 4, 5: WebGL, Three.js, Phaser.io

---

## Agreements

- small lectures, a lot of hands-on
- breaks?
- interrupt at any time: questions & ideas welcome
- complain, don't waste

---

# Lesson 1 - HTML, CSS

```
https://github.com/gruppjo/sae-webdev
```
![QR Code](https://cloud.githubusercontent.com/assets/1370779/17484680/56889c4a-5d8b-11e6-81ab-351c07b52edd.jpeg)

---

## Why Web?

#### HTML, CSS, JavaScript:

- run on every device with a browser, and many more...
- backend & flexible UIs
- from small hack to large scale applications
- the whole ecosystem is JavaScript (this presentation, editors, CLI tools, ...)
- [Github](https://github.com/): almost everything's open source

---

## Why Web?

#### Dev platform of the future:
- websites
- web & multimedia applications (3D, games, video, audio, realtime, ...)
- backends/middleware
- mobile apps
- desktop apps
- command line tools (via node and npm)
- ...
- article: [best programming languages](http://www.sitepoint.com/whats-best-programming-language-learn-2015/)
- [tiobe index](http://www.tiobe.com/tiobe-index/)


---

## Why not?
- [performance!](https://attractivechaos.github.io/plb/) (pretty fast but still not compiled)
- security/reliability (business applications)
	- a lot you can do wrong, no compiler, ...

---

## Why not?

Compilation vs. Interpretation

<img src="https://cloud.githubusercontent.com/assets/1370779/9197708/f1ab2e9a-4036-11e5-9ea4-c4049a38984a.jpg" height="400px"><br>
Begriffe: Interpreter, Compiler, Just in Time Compilation, Assembler, Instruction Set

---

## Setup

- Tools:
	- [git](https://git-scm.com/downloads)
- Editors (choose one):
	- [atom](https://atom.io/) (by Github: free, open source, web technologies)
	- [visual studio code](https://code.visualstudio.com/) (by Windows)
	- [sublime text](http://www.sublimetext.com/3) (free, closed, c)

---

## Setup

- Browsers (choose one):
	- [chrome](https://www.google.com/chrome/browser/desktop/index.html)
	- [canary](https://www.google.de/chrome/browser/canary.html)
	- [firefox](https://www.mozilla.org/en-US/firefox/new/)
- Ecosystem:
	- [node](https://nodejs.org/download/)

---

## Basics

#### Technologies:
- [Git](https://git-scm.com/) = distributed version control system
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (Hypertext Markup Language) = structure and content
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Cascading Style Sheet) = style and appearance
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) = behavior

---

## Basics
#### Ecosystem:
- [node.js](https://nodejs.org/en/) = JavaScript runtime environment outside the browser
- [npm](https://www.npmjs.com/) = node package manager (install/distribute awesome stuff)
- [bower](http://bower.io/) = browser package manager (jQuery, ...)
- [gulp](http://gulpjs.com/) = task runner
- [yo/yeoman](http://yeoman.io/) = run generators in command line
- [generator-webapp](https://github.com/yeoman/generator-webapp) = boilerplate for web application

---

## Setup Generator-Webapp
#### Run in terminal
```sh
npm install --global yo gulp-cli bower
```
```sh
npm install --global generator-webapp
```

---

## Troubleshooting
- errors (ECMDERR) when running bower install [here](http://stackoverflow.com/questions/21789683/howto-fix-bower-ecmderr)
- node-gyp Python error [here](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm)
- cannot delete files on windows (too long). [here](https://github.com/npm/npm/issues/3697#issuecomment-34394290)
- errors when running npm install
	- delete `node_modules` folder
	- run npm install
- error with msbuild [here](https://github.com/TooTallNate/node-gyp/issues/168)

---

## Tasks 1
1. Setup a new project in a new folder: **lesson1/**
	- use [generator-webapp](https://github.com/yeoman/generator-webapp)
	- you don't need Modernizr, select Test Driven Development (TDD)
2. You're done when you see this in your browser:
<img width="400" alt="screen shot 2016-08-08 at 18 34 29" src="https://cloud.githubusercontent.com/assets/1370779/17488373/694a3f7e-5d99-11e6-993e-97c37787fea7.png">
3. Change the **'Allo, 'Allo!** text to your name. e.g. **Jonathan**

---

## Tasks 2
1. Do 15 Minute Git Tutorial - [https://try.github.io](https://try.github.io)
2. Create Github account
3. [Create new repository](https://github.com/new) called **lesson1**
4. push the project you just created to this repository

---

## Task 3

- codeacademy - [make a website](https://www.codecademy.com/skills/make-a-website)

---

## Resources
#### Websites
Mozilla Developer Network - https://developer.mozilla.org/
Google Developers - https://developers.google.com
#### Courses
7hrs [HTML/CSS](https://www.codecademy.com/en/tracks/web) on code academy
[Gitreal](http://gitreal.codeschool.com/) course on CodeSchool
