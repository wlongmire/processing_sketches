function setup(){
  createCanvas(500, 500)
  background(20)

  stroke(25)
  strokeWeight(150)
  line(0,0, 500, 500)
  line(0,500, 500, 0)

  stroke(10)
  strokeWeight(140)
  line(0,0, 500, 500)
  line(0,500, 500, 0)

  stroke(5)
  strokeWeight(30)
  line(0,0, 500, 500)
  line(0,500, 500, 0)

  noStroke()
  fill(255, 255, 255, 100)
  rect(150, 150, 200, 200)

  textAlign(CENTER)
  text("Worst case,\nit'll muffle the screams...", 250, 250)
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