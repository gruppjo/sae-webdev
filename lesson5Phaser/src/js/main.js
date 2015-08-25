window.addEventListener('load', function () {
  'use strict';

  // BOILERPLATE
  // window.lesson5phaser.boilerPlateGame();

  // ARACADE GAME
  // window.lesson5phaser.firstGameTutorial();

  // SNAKE GAME
  window.lesson5phaser.snakeGameTutorial();

}, false);

window.lesson5phaser.snakeGameTutorial = function () {
  var game;

  game = new Phaser.Game(600, 450, Phaser.AUTO, '');
  game.state.add('Menu', new window.lesson5phaser.snakeMenu());
  game.state.add('Game', new window.lesson5phaser.snakeGame());
  game.state.add('Game_Over', new window.lesson5phaser.snakeGameOver());
  game.state.start('Menu');
};
window.lesson5phaser.snakeMenu = function () {
  this.preload = function () {
    this.load.image('menu', 'assets/menu.png');
  };

  this.create = function () {
    this.add.button(0, 0, 'menu', this.startGame, this);
  };

  this.startGame = function () {
      this.state.start('Game');
  };
};
window.lesson5phaser.snakeGame = function () {
  this.preload = function () {
    this.load.image('snake', 'assets/snake.png');
    this.load.image('apple', 'assets/apple.png');
  };

  var snakeData = window.lesson5phaser.snakeData = {score : 0};
  var snake = [];
  var apple = {};
  var squareSize = 15;
  var textStyleKey, textStyleValue;
  var scoreTextValue, speedTextValue;
  var speed = 0;
  var updateDelay = 0;
  var direction = 'right';
  var newDirection = null;
  var addNew = false;

  var cursors;

  this.create = function () {
    cursors = this.input.keyboard.createCursorKeys();

    this.stage.backgroundColor = '#061f26';

    for (var i = 0; i < 10; i++) {
      snake[i] = this.add.sprite(150 + i * squareSize, 150, 'snake');
    }

    this.generateApple();

    textStyleKey = { font: 'bold 14px sans-serif', fill: '#46c0f9', align: 'center'};
    textStyleValue = { font: 'bold 18px sans-serif', fill: '#fff', align: 'center'};

    this.add.text(30, 20, 'SCORE', textStyleKey);
    scoreTextValue = this.add.text(90, 18, snakeData.score.toString(), textStyleValue);
    this.add.text(500, 20, 'SPEED', textStyleKey);
    speedTextValue = this.add.text(558, 18, speed.toString(), textStyleValue);

  };

  this.update = function () {

    // MOVEMENT
    if (cursors.right.isDown && direction !== 'left') {
      newDirection = 'right';
    }
    else if (cursors.left.isDown && direction !== 'right') {
      newDirection = 'left';
    }
    else if (cursors.up.isDown && direction !== 'down') {
      newDirection = 'up';
    }
    else if (cursors.down.isDown && direction !== 'up') {
      newDirection = 'down';
    }

    speed = Math.min(10, Math.floor(snakeData.score / 5));

    speedTextValue.text = speed.toString();

    updateDelay++;

    if (updateDelay === 10) {
      updateDelay = 0;

      var firstCell = snake[snake.length - 1],
          lastCell = snake.shift(),
          oldLastCellx = lastCell.x,
          oldLastCelly = lastCell.y;

      if (newDirection) {
        direction = newDirection;
        newDirection = null;
      }

      if (direction === 'right') {
        lastCell.x = firstCell.x + 15;
        lastCell.y = firstCell.y;
      }
      else if (direction === 'left') {
        lastCell.x = firstCell.x - 15;
        lastCell.y = firstCell.y;
      }
      else if (direction === 'up') {
        lastCell.x = firstCell.x;
        lastCell.y = firstCell.y - 15;
      }
      else if (direction === 'down') {
        lastCell.x = firstCell.x;
        lastCell.y = firstCell.y + 15;
      }

      snake.push(lastCell);
      firstCell = lastCell;

      // COLLISION
      if (addNew) {
        snake.unshift(this.add.sprite(oldLastCellx, oldLastCelly, 'snake'));
        addNew = false;
      }

      this.appleCollision();
      this.selfCollision(firstCell);
      this.wallCollision(firstCell);
    }
  };

  this.generateApple = function () {
    var randomX = Math.floor(Math.random() * 40) * squareSize;
    var randomY = Math.floor(Math.random() * 30) * squareSize;
    apple = this.add.sprite(randomX, randomY, 'apple');
  };

  this.appleCollision = function () {
    for(var i = 0; i < snake.length; i++){
       if(snake[i].x === apple.x && snake[i].y === apple.y){
         // Next time the snake moves, a new block will be added to its length.
         addNew = true;
         // Destroy the old apple.
         apple.destroy();
         // Make a new one.
         this.generateApple();
         // Increase score.
         snakeData.score++;
         // Refresh scoreboard.
         scoreTextValue.text = snakeData.score.toString();
       }
     }
  };

  this.selfCollision = function (head) {
    // Check if the head of the snake overlaps with any part of the snake.
    for(var i = 0; i < snake.length - 1; i++) {
      // console.log(head, snake[i]);
      // console.log(head.x, head.y, snake[i].x, snake[i].y);
      if(head.x === snake[i].x && head.y === snake[i].y){
        // If so, go to game over screen.
        this.state.start('Game_Over');
      }
    }
  };

  this.wallCollision = function (head) {
    if(head.x >= 600 || head.x < 0 || head.y >= 450 || head.y < 0){
      // If it's not in, we've hit a wall. Go to game over screen.
      this.state.start('Game_Over');
    }
  };
};
window.lesson5phaser.snakeGameOver = function () {
  this.preload = function () {
    this.load.image('gameover', 'assets/gameover.png');
  };

  this.create = function () {
    var snakeData = window.lesson5phaser.snakeData;
    this.add.button(0,0, 'gameover', this.startGame, this);
    this.add.text(235, 350, 'LAST SCORE', { font: 'bold 16px sans-serif', fill: '#46c0f9', align: 'center'});
    this.add.text(350, 348, snakeData.score.toString(), { font: 'bold 20px sans-serif', fill: '#fff', align: 'center' });
  };

  this.startGame = function () {
    this.state.start('Game');
  };
};

window.lesson5phaser.firstGameTutorial = function () {

    function preload () {
      game.load.image('sky', 'assets/sky.png');
      game.load.image('ground', 'assets/platform.png');
      game.load.image('star', 'assets/star.png');
      game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    }

    var platforms;
    var player;
    var cursors;
    var stars;
    var score = 0;
    var scoreText;
    function create () {
      //  We're going to be using physics, so enable the Arcade Physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);

      //  A simple background for our game
      game.add.sprite(0, 0, 'sky');
      //  The platforms group contains the ground and the 2 ledges we can jump on
      platforms = game.add.group();
      //  We will enable physics for any object that is created in this group
      platforms.enableBody = true;
      // Here we create the ground.
      var ground = platforms.create(0, game.world.height - 64, 'ground');
      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      ground.scale.setTo(2, 2);
      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;
      //  Now let's create two ledges
      var ledge = platforms.create(400, 400, 'ground');
      ledge.body.immovable = true;
      ledge = platforms.create(-150, 250, 'ground');
      ledge.body.immovable = true;

      // The player and its settings
      player = game.add.sprite(32, game.world.height - 150, 'dude');
      //  We need to enable physics on the player
      game.physics.arcade.enable(player);
      //  Player physics properties. Give the little guy a slight bounce.
      player.body.bounce.y = 0.2;
      player.body.gravity.y = 300;
      player.body.collideWorldBounds = true;
      //  Our two animations, walking left and right.
      player.animations.add('left', [0, 1, 2, 3], 10, true);
      player.animations.add('right', [5, 6, 7, 8], 10, true);

      // cursors
      cursors = game.input.keyboard.createCursorKeys();

      // stars
      stars = game.add.group();
      stars.enableBody = true;
      //  Here we'll create 12 of them evenly spaced apart
      for (var i = 0; i < 12; i++) {
          //  Create a star inside of the 'stars' group
          var star = stars.create(i * 70, 0, 'star');

          //  Let gravity do its thing
          star.body.gravity.y = 400 + Math.random() * 400;
          star.body.collideWorldBounds = true;

          //  This just gives each star a slightly random bounce value
          star.body.bounce.y = 1;
      }

      // score
      scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});

    }

    function update () {

      //  Collide the player and the stars with the platforms
      game.physics.arcade.collide(player, platforms);
      game.physics.arcade.collide(stars, platforms);
      // game.physics.arcade.collide(stars, player);


      //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
      game.physics.arcade.overlap(player, stars, function (player, star) {
        star.kill();
        //  Add and update the score
        score += 10;
        scoreText.text = 'Score: ' + score;
      }, null, this);

      //  Reset the players velocity (movement)
      player.body.velocity.x = 0;
      if (cursors.left.isDown) {
          //  Move to the left
          player.body.velocity.x = -150;

          player.animations.play('left');
      }
      else if (cursors.right.isDown) {
          //  Move to the right
          player.body.velocity.x = 150;

          player.animations.play('right');
      }
      else if (cursors.down.isDown) {
        player.body.velocity.y += 50;
      }
      else {
          //  Stand still
          player.animations.stop();
          // frame 4 => dude looking at you
          player.frame = 4;
      }
      //  Allow the player to jump if they are touching the ground.
      if (cursors.up.isDown && player.body.touching.down) {
          player.body.velocity.y = -350;
      }
      else if (cursors.up.isDown) {
        player.body.velocity.y -= 20;
      }

    }

    var game = new Phaser.Game(640, 480, Phaser.AUTO, 'lesson5phaser-game', {
      preload: preload,
      create: create,
      update: update
    });
};

window.lesson5phaser.boilerPlateGame = function () {
  var ns = window['lesson5phaser'];
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'lesson5phaser-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  /* yo phaser:state new-state-files-put-here */
  game.state.start('boot');
};
