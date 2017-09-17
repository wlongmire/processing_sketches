var canvas

var cues = [
  new Cue({
    name:"cue1",
    time:5.8,
    render:function() {
      background(255,0,0)
    }
  }),
  
  new Cue({
    name:"cue2",
    time:8.9,
    render:function(context) {
      var fft = context.fft
      var g = map(fft.getEnergy("treble"), 0, 255, 0, 200)
      background(0,g,0)
    }
  })
]

var sequencer = new Sequencer(cues, "media/Logic-Gate.mp3")

function preload() {
  sequencer.preload()
}

function setup(){
  canvas = createCanvas(500, 500)
  frameRate(60)
  
  sequencer.play()
}

function draw() {
  sequencer.render()
}

function keyPressed() {
  switch(keyCode) {
   case(32) :
     if (sequencer.getState() === "paused") {
       sequencer.play()
     } else {
       sequencer.pause()
     }
  }
}