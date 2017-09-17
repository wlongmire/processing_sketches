
var canvas
var sound_all, sound_base, sound_back, sound_fuzz
var amplitude = new p5.Amplitude()
var fft = new p5.FFT();

function preload() {
  sound = loadSound('media/Logic-Gate.mp3')
}

function setup(){
  canvas = createCanvas(500, 500)
  amplitude.setInput(sound)
  fft.setInput(sound)

  sound.play()
}

function draw() {
  // var level = amplitude.getLevel()
  // var color = map(level, 0, 0.2, 0, 255)
  var spectrum = fft.analyze()

  noStroke()
  var color = 100
  background(color)

  noStroke()
  fill(255)
  var size1 = map(fft.getEnergy("mid"), 0, 255, 0, 200)
  ellipse(width/2 - 150, height/2, size1, size1)

  noStroke()
  fill(255)
  var size1 = map(fft.getEnergy("mid"), 0, 255, 0, 200)
  ellipse(width/2 + 150, height/2, size1, size1)

  strokeWeight(5)
  stroke(0, 0, 0, map(fft.getEnergy("mid", 0, 255, 0,1)))
  noFill()
  var size2 = map(fft.getEnergy("bass"), 0, 255, 0, 500)
  ellipse(width/2, height/2, size2, size2)

  noStroke()
  fill(255)
  var size3 = map(fft.getEnergy("treble"), 0, 255, 0, 200)
  ellipse(width/2, height/2 - 150, size3, size3)

  noStroke()
  fill(255)
  var size1 = map(fft.getEnergy("treble"), 0, 255, 0, 200)
  ellipse(width/2, height/2 + 150, size1, size1)
  
  textSize(200)
  var spacing = 170
  fill(255, 255, 255, fft.getEnergy("mid"))
  text(fft.getEnergy("mid"), 0, 140)
  fill(255, 255, 255, fft.getEnergy("mid"))
  text(fft.getEnergy("bass"), 0, 140 + spacing)
  fill(255, 255, 255, fft.getEnergy("mid"))
  text(fft.getEnergy("treble"), 0, 140 + spacing*2)
}