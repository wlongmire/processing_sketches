'use strict';

let paused = false
let rot = 0
let color = 255
let squareSize = {
  h:100,
  w:100
}

function setup() {
  createCanvas(500,500)
  angleMode(DEGREES)
  background(100, 0, 100)
}

function draw() {
  if (paused)
    return;

  noFill()
  
  stroke(color)
  translate(width/2, height/2)
  rotate(rot)
  rect(0, 0, squareSize.h, squareSize.w)
  
  rot += 1;
  
  if (rot > 360) {

    squareSize.h = random(10, 200)
    squareSize.w = random(10, 200)
    color = random(0, 255)
    rot = 0
  }
}

function keyPressed() {
  switch(keyCode) {
    case(83):
      //S for screenshot
      saveCanvas("image.png")
      break;
  }
}
