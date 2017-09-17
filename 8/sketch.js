var canvas = undefined
var background
var pg1, pg2
let size = 100

function preload() {
  background = loadImage('./media/IMG_0597.png')
}

function setup(){
  canvas = createCanvas(500, 600)
  pixelDensity(1); // Set 1 because it's too slow on firefox
  colorMode(HSB, 360, 100, 100, 100);

  pg1 = createGraphics(width, height);
  pg1.background('#FFFFFF')
  pg2 = createGraphics(width, height);
  
}


function draw() {
  const words = "I mean a spell as in spelling it out / not shouting not rough shod wiggling in your hand / not quite even completely the shape of her. / I’m talking a spell / for a spell / like a week / or a year / or a lifetime / There is not a metaphor / anywhere / inside these words. No. / This is real. / This is a spell / of a word / that so old and worn and cliched / it might have been the first thought / of the first bird / that decided that colors and feathers and flight weren’t enough. / no I better sing / to the sun / in the morning as clean as I can / like your face / on your hips / and my breast / still as stone. Not a fear in my head. / That was a simile. / That was a bridge / between you / and my planet’s star / greeting for the first time at dawn."

  
  pg1.clear()
  pg1.background(255)

  pg2.clear()
  pg2.background(255)
  fill(255)

  if (size > 4)
    size -= 1

  let x = size/2, y = size/2

  textAlign(CENTER, CENTER)
  textSize(size)
  pg1.fill(0)

  const finalWords = words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words + words;
  (finalWords).split('').map((chr)=>{  
    pg1.text(chr, x, y)

    x+=size/2;

    if (x + size/2 > width) {
      y += size;
      x = size/2;
    }
  })
  
  pg2.clear();
  pg2.blendMode(SCREEN);
  pg2.image(background, 0, 0, width, height);
  pg2.image(pg1, 0, 0, width, height);

  image(pg2, 0, 0, width, height);  
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