var canvas;
var amplitude = new p5.Amplitude()
var fft = new p5.FFT();
var x, y, r, g = 1, b, a, radius;
var g_standard = 1, b_standard;
var acc_color = true
var timer = 0;
var word = "we"
var wordInc = 0
var lastx = 0

function preload() {
}

function setup(){
  canvas = createCanvas(500, 500) 
  background(255)
  noStroke()
  y = height/2
  b = random(255)
  b_standard = b
  a = 100
  frameRate(100)

  cycleAmount = 20000

  for (var inc = 0; inc < cycleAmount; inc++) {
    generateCycle(inc)
  }
  
}

function generateCycle(inc) {
  // use frameCount and modulo to change the green color component
  if (acc_color) {
    g_standard += 1
    if (g_standard >= 255) acc_color = false
  } else {
    g_standard -= 1
    if (g_standard <= 1) acc_color = true
  }
  
  r = noise(inc * 0.01) * 255;
  g = g_standard;
  b = b_standard;

  // use frameCount and noise to change the radius
  radius = (noise(inc * 0.01) * 100)

  fill(r, g, b, a)
  ellipse(x, y, radius, radius)

  x = inc % width
  if (x === width-1) {
    y = random(height)
    x = -10
    b = random(255)
    a = random(30, 100)
  }
}

function draw() {
  generateCycle(frameCount)
}

function keyPressed() {
  console.log(keyCode)

  switch(keyCode) {
    case(83):
      //S for screenshot
      saveCanvas("image.png")
      break;
  }
}