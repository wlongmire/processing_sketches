var canvas
var context

var encoder = new GIFEncoder()
encoder.setRepeat(0);

var radius = 80
var inc = 0
var speed = 0.02
var words
var sinVal

var bkgInc = {
  r:{min:0, max:255},
  g:{min:0, max:255},
  b:{min:0, max:255}
}

var points = []
var numpoints = 3

var cycles = 0
var targetCycles = 5

function preload() {
  words = loadJSON('./media/words2.json')
}

function setup(){
  canvas = createCanvas(500, 600)
  context = canvas.canvas.getContext('2d')
  encoder.setDelay(23)
  encoder.start();

  let word;
  do {
    word = parseInt(map(sin(inc), -1, 1, 0, words.length));
    inc -= 0.1
  } while(word !== 0)
  
  console.log(inc, word)
  
}


function draw() {
  sinVal = sin(inc)

  background(
    map(sinVal, -1, 1, bkgInc.r.min, bkgInc.r.max),
    map(sinVal, -1, 1, bkgInc.g.min, bkgInc.g.max), 
    map(sinVal, -1, 1, bkgInc.b.min, bkgInc.b.max)
  )

  if (sinVal < -0.999) {
    while(sin(inc) < -0.999)
      inc += 0.01
    speed = random(0.02, 0.15)

    cycles++
    if (cycles === targetCycles) {
      encoder.finish()
      encoder.download("movie.gif")
      alert("complete")
    }
  }

  numpoints = map(sinVal, -1, 1, 3, 20)
  radius = map(sinVal, -1, 1, 80, 120)

  points = []
  for(var i=0; i<numpoints; i++) {
    points.push({
      x: radius*sin( map(i, 0, numpoints, 0, 6.3) ) + width/2,
      y: radius*cos( map(i, 0, numpoints, 0, 6.3) ) + height/2
    })
  }

  stroke(0)
  fill(0)
  points.map((p, idx) => {
    ellipse(p.x, p.y, 10, 10)
    if (idx < points.length-1) {
      line(p.x, p.y, points[idx+1].x, points[idx+1].y)
    } else {
      line(p.x, p.y, points[0].x, points[0].y)
    }
  })

  textSize(30)
  textAlign(CENTER, CENTER)
  fill(
    255 - map(sinVal, -1, 1, bkgInc.r.min, bkgInc.r.max),
    255 - map(sinVal, -1, 1, bkgInc.g.min, bkgInc.g.max), 
    255 - map(sinVal, -1, 1, bkgInc.b.min, bkgInc.b.max)
  )

  var word
  text(words[
    parseInt(map(sinVal, -1, 1, 0, words.length))
  ], width/2, height/2)

  encoder.addFrame(context)
  inc += speed
}