function setup(){
  createCanvas(500, 500)
}

function draw() {
  background(30)
  var xCount = 10
  var yCount = 10
  var radius = 500
  var border = 50

  noStroke()
  fill(255)
  textSize(35)
  text("Seeking sassy bottom", 42, 240)

  strokeWeight(1)
  noFill()
  
  var count = 1
  for( var x=border; x<(width-border)+1; x+=((width-border*2)/xCount) ) {
    for( var y=border; y<(height-border)+1; y+=((height-border*2)/yCount) ) {
      stroke(180 - count)
      ellipse(x, y, radius, radius);
    }
  }
  
  fill(255)
  textSize(60)
  text("Cute top", 42, 200)
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
