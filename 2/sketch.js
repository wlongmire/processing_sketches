function setup(){
  createCanvas(500, 500)
  background(255)

  textAlign(CENTER)
  var growRate = 2.6
  var ySpace = 8
  var yStart = 20
  
  strokeWeight(3)
  line(0, yStart + 2, 500, yStart + 2)
  line(300, 0, 300, 500)

  for (var i = 0; i<100; i++) {
    textSize(11 + (i*growRate))
    if (i == 0)
      text("My", 30, yStart + ySpace*i)
    else
      text("My", 30, (yStart + 5) + ySpace*i)
  }

  for (var i = 0; i<100; i++) {
    textSize(11 + (i*growRate))
    
    if (i == 0)
      text("nose", 80, yStart + ySpace*i)
    else
      text("nose", 80, (yStart + 5) + ySpace*i)
    
  }

  for (var i = 0; i<100; i++) {
    textSize(11 + (i*growRate))
    
    if (i == 0)
      text("is", 150, yStart + ySpace*i)
    else
      text("is", 150, (yStart + 5) + ySpace*i)
  }

  for (var i = 0; i<100; i++) {
    textSize(11 + (i*growRate))
    
    if (i == 0)
      text("freaking", 250, yStart + ySpace*i)
    else
      text("freaking", 250, (yStart + 5) + ySpace*i)
  }

  for (var i = 0; i<100; i++) {
    textSize(11 + (i*growRate))
    
    if (i == 0)
      text("out", 360, yStart + ySpace*i)
    else
      text("out", 360, (yStart + 5) + ySpace*i)
  }
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