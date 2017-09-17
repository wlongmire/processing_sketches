var canvas
var context
var encoder = new GIFEncoder()
var length
var gifGenerating

encoder.setRepeat(0);

function preload() {
}

function setup(){
  canvas = createCanvas(500, 500)
  context = canvas.canvas.getContext('2d')
  encoder.setDelay(25)
  encoder.start();

  length = 10*30
}

var divisions = {
  hort: 25,
  vert: 25
}

var counter = 0
var halfway = false
var movieMade = false

function draw() {
  resetMatrix()
  translate(divisions.hort/2, divisions.vert/2)
  background(255)

  if (!halfway)
    counter ++
  else
    counter --
  
  console.log(`${counter}/${length/2}`, halfway)

  if (counter > length/2) {
    halfway = !halfway
  }

  if (counter < 0) {
    gifGenerating = false

    if (!movieMade) {
      encoder.finish()
      encoder.download("movie.gif")
      movieMade = true
    }
  }
  
  for (var x = 0; x<width; x+=width/divisions.hort) {
    for (var y = 0; y<height; y+=height/divisions.hort) {
      strokeWeight(map(sin(counter*(y/700))*(x/700), -1, 1, 1, 10))
      fill(map(cos(counter*(x/700))*(y/700), 1, -1, 200, 255), map(cos(counter*(x/700))*(y/700), 1, -1, 200, 255))
      ellipse(x, y, divisions.hort, divisions.vert)
    }
  }

  if (!movieMade) {
    encoder.addFrame(context)
  }
}