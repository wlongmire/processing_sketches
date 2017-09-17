function setup(){
  createCanvas(500, 500)
}

function draw() {
  for (x=0; x<width; x++) {
    stroke((x/width)*255)
    line(0,0, x,height)
  }

  for (x=width; x>0; x--) {
    var c = (x/width)*255
    stroke(c, c, c, 50)
    line(width, 0, x, height)
  }

  for (y=0; y<height; y++) {
    var c = (y/height)*255
    stroke(c, 0, 0, 50)
    line(0, 0, width, y)
  }
  
  for (y=height; y>0; y--) {
    var c = (y/height)*255
    stroke(0, 0, c, 50)
    line(0, height, width, y)
  }

  textAlign(LEFT)
  textStyle(BOLD)
  textSize(30)
  fill(0)
  text("Penises don't have arms,\nhow are they supposed to row?", width/2 - 220, height/2 - 10)
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
