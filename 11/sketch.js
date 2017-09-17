var canvas
var swiggles = []
var running = true
var pg1, pg2
// var encoder = new GIFEncoder()
// encoder.setRepeat(0);

var length = 5
var inc = 0

function preload() {
}

function resetCallback(swiggle) {

  if (swiggles.length > 20)
    return;

  const sizeFreq = random(1, 1000)
  const spacing = random(30, 45)

  if (swiggle.startx >= width/2) {
    swiggles.push(
      new Swiggle(
        swiggle.startx + spacing,
        swiggle.starty,
        resetCallback,
        100,
        sizeFreq
      )
    )
  }
  
  if (swiggle.startx <= width/2) {
    swiggles.push(
      new Swiggle(
        swiggle.startx - spacing,
        swiggle.starty - 30,
        resetCallback,
        100,
        sizeFreq
      )
    )
  }
  
}

function setup() {
  canvas = createCanvas(500, 600)
  context = canvas.canvas.getContext('2d')

  pixelDensity(1); // Set 1 because it's too slow on firefo
  pg1 = createGraphics(width, height);
  pg1.textSize(25)
  pg1.textAlign(LEFT)
  pg1.stroke(0)
  pg1.fill(255)
  pg1.text("guttural\n\nby Longmire", width - 150, height - 50)
  background(255)
  
  swiggles = [
    new Swiggle(width/2, -50, resetCallback)
  ]
}


function draw() {
  if (running) {
    swiggles.map((s)=>{
      s.render()
    })
  }

  // encoder.addFrame(context)
  inc ++

  // if (inc/30 >= length*30) {
    // encoder.finish()
    // encoder.download("movie.gif")
    // alert("complete")
  // }
}

function mouseClicked() {
  running = !running
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