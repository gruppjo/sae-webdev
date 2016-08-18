
var gl;

var setupWebGL = function () {
  console.log('----setupWebGL----');

  // get canvas element from DOM (DOCUMENT OBJECT MODEL)
  var canvas = document.getElementById('glCanvas');
  console.log(canvas);

  // initialize webgl context
  gl = canvas.getContext('webgl') || canvas.getContext('webgl-experimental');
  console.log(gl);

  // Only continue if WebGL is available and working
  if (!gl) {
    console.error('webgl not initalized');
    return;
  }

  // set background color to black, fully opaque
  gl.clearColor(0, 0, 0, 1);
  // Enable depth testing
  gl.enable(gl.DEPTH_TEST);
  // Near things obscure far things
  gl.depthFunc(gl.LEQUAL);
  // Clear the color as well as the depth buffer.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

window.addEventListener('load', setupWebGL, false);
