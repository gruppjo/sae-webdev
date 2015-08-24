console.log('\'Allo \'Allo!');

var gl;
var horizAspect = 480.0 / 640.0;

var perspectiveMatrix;
var vertexColorAttribute;
var vertexPositionAttribute;
var squareRotation = 0;
var lastSquareUpdateTime;

var mvMatrixStack = [];

var squareXOffset = 0.0;
var squareYOffset = 0.0;
var squareZOffset = 0.0;

var xIncValue = 0.2;
var yIncValue = -0.4;
var zIncValue = 0.3;

function start () {

  // get the canvas element via JS
  var canvas = document.getElementById('glcanvas');

  gl = initWebGL(canvas); // Initialize the GL context

  if (gl) {
    initShaders();
    initBuffers();

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // set clear color to black, fully opaque
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST); // enable depth testing
    gl.depthFunc(gl.LEQUAL);

    setInterval(drawScene, 15);
  }
}

function initWebGL(canvas) {
  gl = null;

  try {
    // Try to grab the standard context. If it fails, fallback to experimental.
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  }
  catch (e) {}

  // If we don't have a GL context, give up now
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
    gl = null;
  }

  return gl;
}

var initShaders = function () {
  var fragmentShader = getShader(gl, 'shader-fs');
  var vertexShader = getShader(gl, 'shader-vs');

  // Create & link the shader program
  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program');
  }

  // tell WebGL to use the program we just created
  gl.useProgram(shaderProgram);

  // tell WebGL to expect shader attributes aVertexPosition and aVertexColor
  vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
  gl.enableVertexAttribArray(vertexPositionAttribute);
  vertexColorAttribute = gl.getAttribLocation(shaderProgram, 'aVertexColor');
  gl.enableVertexAttribArray(vertexColorAttribute);
};

var getShader = function (gl, id) {
  var shaderScript, theSource, currentChild, shader;

  // retrieve the script element via ID
  shaderScript = document.getElementById(id);

  if (!shaderScript) {
    console.warn('shader script not found');
    return null;
  }


  // iterate over text nodes to retrieve shader code
  theSource = '';
  currentChild = shaderScript.firstChild;

  while (currentChild) {
    if (currentChild.nodeType === currentChild.TEXT_NODE) {
      theSource += currentChild.textContent;
    }

    currentChild = currentChild.nextSibling;
  }

  // decide which type of shader we are creating
  if (shaderScript.type == "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    console.warn('unknown shader type');
    return null;
  }

  gl.shaderSource(shader, theSource);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
    return null;
  }

  return shader;
};

function initBuffers() {
  // create vertices buffer to fill with data
  squareVerticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  var vertices = [
    1.0,  1.0,  0.0,
    -1.0, 1.0,  0.0,
    1.0,  -1.0, 0.0,
    -1.0, -1.0, 0.0
  ];

  // fill buffer with data
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var colors = [
    1.0,  1.0,  1.0,  1.0,    // white
    1.0,  0.0,  0.0,  1.0,    // red
    0.0,  1.0,  0.0,  1.0,    // green
    0.0,  0.0,  1.0,  1.0     // blue
  ];

  // create & fill color buffer with data
  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}

function drawScene() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // define field of view, aspect ratio (as in canvas element)
  // distance from camera (min, max)
  perspectiveMatrix = makePerspective(45, 640.0 / 480.0, 0.1, 100.0);

  // apply matrix transformations for 'camera', and object transformations
  loadIdentity(); // load identity matrix
  mvTranslate([0.0, 0.0, -6.0]); // translate z axis for camera
  mvPushMatrix();
  mvRotate(squareRotation, [1, 0, 1]);
  mvTranslate([squareXOffset, squareYOffset, squareZOffset]);

  // bind buffers which are now filled and tell WebGL to use them as input
  // to the shaders
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
  // supply shaders with matrices
  setMatrixUniforms();

  // draw the arrays
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  mvPopMatrix();

  var currentTime = Date.now();
  if (lastSquareUpdateTime) {
    var delta = currentTime - lastSquareUpdateTime;

    squareRotation += (30 * delta) / 1000.0;

    squareXOffset += xIncValue * ((30 * delta) / 1000.0);
    squareYOffset += yIncValue * ((30 * delta) / 1000.0);
    squareZOffset += zIncValue * ((30 * delta) / 1000.0);

    if (Math.abs(squareYOffset) > 2.5) {
      xIncValue = -xIncValue;
      yIncValue = -yIncValue;
      zIncValue = -zIncValue;
    }
  }

  lastSquareUpdateTime = currentTime;
}

function loadIdentity() {
  mvMatrix = Matrix.I(4);
}

function multMatrix(m) {
  mvMatrix = mvMatrix.x(m);
}

function mvTranslate(v) {
  multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4());
}

function setMatrixUniforms() {
  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix.flatten()));

  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));
}

function mvPushMatrix(m) {
  if (m) {
    mvMatrixStack.push(m.dup());
    mvMatrix = m.dup();
  } else {
    mvMatrixStack.push(mvMatrix.dup());
  }
}

function mvPopMatrix() {
  if (!mvMatrixStack.length) {
    throw("Can't pop from an empty matrix stack.");
  }

  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, v) {
  var inRadians = angle * Math.PI / 180.0;

  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
  multMatrix(m);
}
