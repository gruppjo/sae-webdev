
# 2D & 3D GameDevelopment
### in the Browser

---

## Agenda

1. [Hello!](#hello)
2. [Expectations & Agreements](#expectations)
3. [Why web?](#why-web)
4. [In this course](#in-this-course)
4. [Lesson 1](#lesson-1) - Git, HTML, CSS, Generators

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
	- terminal?
- English?
- your motivation/expectation?
- web dev terms? => mindmap

---

## Me

2. be your guide, in this ever-changing tutorial-flooded world
2. teach you how to teach yourself
3. hands-on: play & experiment
1. fun :)

---

## Agreements

- lecture material online
- high tempo
- small lectures, a lot of hands-on
- interrupt at any time: questions & ideas welcome
- complain, don't waste
- breaks?


---

## Why Web?

#### HTML, CSS, JavaScript:

- run on every device with a browser, and many more...
- backend & flexible UIs
- from small hack to large scale applications
- the whole ecosystem is JavaScript (this presentation, editors, CLI tools, ...)
- [GitHub](https://github.com/): almost everything's open source

---

## Why Web?

#### Dev platform of the future:
- websites
- web & multimedia applications (3D, games, video, audio, realtime, ...)
- backends/middleware
- mobile apps via cordova, react native, ...
- desktop apps via electron
- command line tools (via node and npm)
- ...
- article: [best programming languages](http://www.sitepoint.com/whats-best-programming-language-learn-2015/)
- [tiobe index](http://www.tiobe.com/tiobe-index/)

---

## For gaming?

- easy distribution, cross platform, one language
- APIs
	- [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) HW-accelarated 3D (based on OpenGL)
	- [Canvas2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) HW-accelerated 2D
	- no Flash! (plugin, proprietary, closed-source, vulnerable, mobile)
- Demos: [rainforest](http://rainforest.arkivert.no/), [bananabread](https://github.com/kripken/BananaBread/), [phaser.io](http://phaser.io/examples/v2/category/games)
- Unity [WebGL export](https://docs.unity3d.com/Manual/webgl-gettingstarted.html)
- Unreal 4 [WebGL demo](https://blog.mozilla.org/blog/2014/03/12/mozilla-and-epic-preview-unreal-engine-4-running-in-firefox/)


---

## More demos:
- rainforest - http://rainforest.arkivert.no/#kart
- collections
	- mozilla - https://developer.mozilla.org/en-US/docs/Web/Demos_of_open_web_technologies
	- css design awards - http://www.cssdesignawards.com/articles/30-best-webgl-sites-for-2015/263/
	- hongkiat - http://www.hongkiat.com/blog/webgl-chrome-experiments/
	- css nectar - http://cssnectar.com/css-gallery/nominees/site-features/webgl/
- phaser examples: http://phaser.io/examples
- webgl examples
	- bananabread https://developer.mozilla.org/de/demos/detail/bananabread
	- rome http://www.ro.me/
	- piano http://touchpianist.com/
	- globe https://www.chromeexperiments.com/globe
	- stars http://stars.chromeexperiments.com/
	- jellyfish http://akirodic.com/p/jellyfish/
	- fluid https://developer.mozilla.org/de/demos/detail/fluid
	- world flights http://www.senchalabs.org/philogl/PhiloGL/examples/worldFlights/
	- image filter http://evanw.github.io/webgl-filter/
	- paper shader https://developer.mozilla.org/de/demos/detail/cross-hatching-glsl-shader
	- orbits visualizer http://iacopoapps.appspot.com/hopalongwebgl/
	- particles http://oos.moxiecode.com/js_webgl/particles_morph/
	- particles (firefox) http://empaempa.github.io/GLOW/examples/complicated/
	- more particles - http://iacopoapps.appspot.com/hopalongwebgl/
	- surface http://lab.aerotwist.com/webgl/surface/
	- cars http://alteredqualia.com/three/examples/materials_cars.html
	- ecosphere http://www.stinkdigital.com/work/ecosphere/
	- more resources
		- chrome experiments - https://www.chromeexperiments.com/webgl
		- mozilla demos - https://developer.mozilla.org/de/demos/
		- 1stwebdesigner - http://www.1stwebdesigner.com/webgl-examples-and-demos/
		- hongkiat list - http://www.hongkiat.com/blog/webgl-chrome-experiments/
- canvas examples
	- cross code - http://www.cross-code.com/en/start
	- curious expedition - http://www.curious-expedition.com/

---

## Why not?
- [performance](https://attractivechaos.github.io/plb/), (pretty fast but still not compiled)
	- However near native performance with: [Web Assembly](https://medium.com/javascript-scene/what-is-webassembly-the-dawn-of-a-new-era-61256ec5a8f6#.z57bpvpvz), [Emscripten](https://github.com/kripken/emscripten), [asm.js](http://asmjs.org/)
- security/reliability (business applications)
	- a lot you can do wrong, no compiler, ...
- ecosystem not as established as C/C++/C# in gaming

---

## Why not?

Compilation vs. Interpretation

<img src="https://cloud.githubusercontent.com/assets/1370779/9197708/f1ab2e9a-4036-11e5-9ea4-c4049a38984a.jpg" height="400px"><img src="https://cloud.githubusercontent.com/assets/1370779/17553939/c00d5fce-5f08-11e6-9579-62c06cd58c80.jpg" height="400px">
Begriffe: Interpreter, Compiler, Just in Time Compilation, Assembler, Instruction Set

---

## In this course

#### You will learn about
- [Git](https://git-scm.com/) = distributed version control system
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (Hypertext Markup Language) = structure and content
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Cascading Style Sheet) = style and appearance
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) = behavior
- [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API),  [Canvas2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) = 3D & 2D APIs
- [Phaser.io](http://phaser.io/), [Three.js](http://threejs.org/) and others = libraries and engines

---

## Roadmap
- **lesson 1 through 3**: Foundations - HTML, CSS, JavaScript
- **lesson 4, 5**: WebGL, Three.js, Phaser.io, ...

---

## Slides & Sources
```
https://github.com/gruppjo/sae-webdev
```
![QR Code](https://cloud.githubusercontent.com/assets/1370779/17484680/56889c4a-5d8b-11e6-81ab-351c07b52edd.jpeg)


---

# Lesson 1
#### Git, HTML, CSS, Generators

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
	- [node](https://nodejs.org/en/)

---


## Task 1 - Git & Terminal (30 Minutes)
1. Do 15 Minute Git Tutorial - [https://try.github.io](https://try.github.io)
2. In command line create new **folder**, a new **file**
2. Initialize git repo, add file, commit
2. Create [GitHub account](https://github.com/join) and [create new repository](https://github.com/new) called **lesson1**
4. push the project you just created to that repository
```sh
# in project folder
git init # initialize git
git add . # add all files
git commit -m "project setup" # create commit
git remote add origin <path to your git repo> # add origin
git push -u origin master # push master branch to origin
```
6. Help: Git [Cheat Sheet](https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf)

---

## Task 2 - HTML & CSS (75 Minutes)

- The free parts of Codeacademy - [make a website](https://www.codecademy.com/skills/make-a-website)
	- Lesson: Site Structure
	- Lesson: A closer look at CSS
	- Lesson: Boundaries and Space
	- Lesson: Building with Bootstrap

Alternative: http://campus.codeschool.com/courses/front-end-foundations/contents

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

## Task 3 - generator-webapp (pt. 1)
1. Setup a new project in your git repository in: **lesson1/**
	- you don't need Sass or Modernizr; select TDD for DSL
```sh
yo webapp
```
2. Then run:
```sh
gulp serve
```

---

## Task 3 - (pt. 2)
2. You're done when you see this in your browser:
<img width="300" alt="screen shot 2016-08-08 at 18 34 29" src="https://cloud.githubusercontent.com/assets/1370779/17488373/694a3f7e-5d99-11e6-993e-97c37787fea7.png">
3. Change the **'Allo, 'Allo!** text to your name. e.g. **Jonathan**
	- hint: **app/index.html**

---

## Ecosystem:
- [node.js](https://nodejs.org/en/) = JavaScript runtime environment outside the browser
- [npm](https://www.npmjs.com/) = node package manager (install/distribute awesome stuff)
- [bower](http://bower.io/) = browser package manager (jQuery, ...)
- [gulp](http://gulpjs.com/) = task runner
- [yo/yeoman](http://yeoman.io/) = run generators in command line
- [generator-webapp](https://github.com/yeoman/generator-webapp) = boilerplate for web application

---

## How does it work
- node.js installs together with npm
- with npm you install globally on your machine
	- bower, gulp, yo, generator-webapp, or other generators
- set up a new project in a folder of your choice with yo
	- yo creates all necessary files
		- index.html, main.css, main.js
		- package.json = which npm packages to install
		- bower.json = which bower packages to install
		- gulpfiles = how to start livereload, etc...
	- yo runs **npm install** **bower install** locally (in your directory)
- running gulp, performs the desired tasks **gulp serve**
	- sets up livereload server in your directory
	- watches all files in the directory
	- upon changes, tells website running in your browser, to refresh itself

---

## What does it do?
- wires together HTML, CSS ([SASS](http://sass-lang.com/)), JavaScript
- additionally: [Bootstrap](http://getbootstrap.com/), [Babel](https://babeljs.io/), ...
- awesome tools: livereload, ...
- important files
	- **app/index.html**
	- **app/scripts/main.js**
	- **app/styles/main.css**
- important commands
	- **gulp serve**

---

## Task 4 - your own webpage (30 Minutes)
<img width="200" alt="screen shot 2016-08-08 at 18 34 29" src="http://officialhuskylovers.com/wp-content/uploads/2016/01/fights.jpg">

- Create your own page in your project in the **index.html**
- About a topic you like e.g. **cute puppies**
	- Add a couple of **HTML elements**, **CSS** and **Bootstrap components**
- Create about 3 to 10 logical, useful commits and push these to your repository on GitHub
```sh
git add .
git commit -m "useful message"
git push origin master
```

---

## Frameworks/Tools
- [Bootstrap](http://getbootstrap.com/) (CSS only)
- [Angular.js](https://angularjs.org/) (HTML/JS)
- [Angular2](https://angular.io/) (HTML/JS)
- [React.js](https://facebook.github.io/react/) (HTML/JS)
- [Sass](http://sass-lang.com/), [Less](http://lesscss.org/), ...
	- extend and compile to css
- ...

---

## Resources
[SSH Access for GitHub](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)  
[Git @ Codeacademy](https://www.codecademy.com/learn/learn-git)
#### Websites
Git Documentation - https://git-scm.com/doc  
Stackoverflow - http://stackoverflow.com/  
Mozilla Developer Network - https://developer.mozilla.org/  
Google Developers - https://developers.google.com
#### Courses/Guides
[GitHub Guides](https://guides.github.com/)  
7hrs [HTML/CSS](https://www.codecademy.com/en/tracks/web) on code academy  
[Gitreal](http://gitreal.codeschool.com/) course on CodeSchool
