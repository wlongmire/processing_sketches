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

  fill(200)
  textAlign(CENTER, CENTER)
  text("every whatever", width/2, y)

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}
 
function draw() {
  var spectrum = fft.analyze();
  var topSpectrum = 
    spectrum.reduce((top, s)=>((top > s)?top:s), 0);
  
  // // use frameCount and modulo to change the green color component
  if (acc_color) {
    g_standard += 1
    if (g_standard >= 255) acc_color = false
  } else {
    g_standard -= 1
    if (g_standard <= 1) acc_color = true
  }
  
  r = noise(frameCount * 0.01) * 255; //b_standardmap(topSpectrum, 0, 255, noise(frameCount * 0.01) * 255, 255) 
  g = g_standard; //map(topSpectrum, 0, 255, g_standard, 0)
  b = b_standard; //map(topSpectrum, 0, 255, b_standard, 0)

  // use frameCount and noise to change the radius
  radius = (noise(frameCount * 0.01) * 100) + map(topSpectrum, 0, 255, 0, 15)
  

  fill(r, g, b, a)
  ellipse(x, y, radius, radius)

  x = frameCount % width
  if (x === width-1) {
    y = random(height)
    x = -10
    b = random(255)
    a = random(30, 100)

    fill(200)
    textAlign(CENTER, CENTER)
    text("every whatever", width/2, y)
  }
}