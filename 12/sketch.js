
var canvas
var amplitude = new p5.Amplitude()
var fft = new p5.FFT();
var currentSize = 1;
var shrinkSpeed= 0, shrickAcc = -2;
var wordInc;
var c = 0;
var words = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "!",
  "J",
  "K",
  "L"
]

function preload() {
}

function setup(){
  canvas = createCanvas(500, 500)
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  wordInc = 0
}

function draw() {
  var spectrum = fft.analyze();
  var topSpectrum = spectrum.reduce((top, s)=>(
    (top > s)?top:s
  ), 0);
  
  var newSize = map(topSpectrum, 50, 255, 0, width*2)

  if (newSize >= 600) {
    wordInc = (wordInc === words.length-1)?0:wordInc+1
  }

  if (newSize > currentSize) {
    currentSize = newSize
    shrinkSpeed = 0
    c = 0
  } else {
    if (currentSize > 0) {
      background(200);

      if (c < 200){
        c += shrinkSpeed/8
      }
      
      currentSize -= shrinkSpeed
      shrinkSpeed -= shrickAcc
    }
  }

  textSize(currentSize)
  textAlign(CENTER, CENTER)

  fill(c)
  text(words[wordInc], width/2, height/2)
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