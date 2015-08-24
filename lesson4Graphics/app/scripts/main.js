console.log('\'Allo \'Allo!');

var gl;

function start () {
  var canvas = document.getElementById('glcanvas');

  gl = initWebGL(canvas); // Initialize the GL context

  if (gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // set clear color to black, fully opaque
    gl.enable(gl.DEPTH_TEST); // enable depth testing
    gl.depthFunc(gl.LEQUAL);  // near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // clear the color as well as the depth buffer
  }
};

function initWebGL (canvas) {
  gl = null;
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  }
  catch (e) {
    // If we don't have a GL context, give up now
    if (!gl) {
      window.alert('Unable to initialze WebGL. Your browser may not support it');
      gl = null;
    }
  }

  return gl;
};
