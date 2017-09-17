var sound
var fft = new p5.FFT()

function Sequencer(cues, soundFile) {
  var states = {
    playing:"playing",
    paused: "paused",
    stopped: "stopped"
  }
  
  this.precision = 0.1
  this.cues = cues
  this.state = states.stopped
  this.soundFile = soundFile
  
  this.getState = function() {
    return (this.state)
  }
  
  this.setPercission = function(val) {
    this.precision = val
  }
    
  this.play = function() {
    if (this.state === states.stopped) {
      this.startTime = millis()
      this.state = states.playing
      this.cueIdx = 0  
      
      const initCue = this.getCue(0)
      if (initCue.setup) {
        initCue.setup()
      }
      
      sound.play()
    } else if (this.state === states.paused) {
      this.state = states.playing
      sound.play()
    }
    
  }
  
  this.restart = function() {
    this.state = states.stopped
    this.cueIdx = 0
  }
    
  this.pause = function() {
    this.state = states.paused
    sound.pause()
  }
  
  this.getCue = function(idx) {
    return(this.cues[idx])  
  }
  
  this.incrementCue = function() {
    this.cueIdx ++
      
    if (this.getCue(this.cueIdx).setup)
      this.getCue(this.cueIdx).setup()
  }
  
  this.preload = function() {
    if (this.soundFile) {
      sound = loadSound('media/Logic-Gate.mp3')
    }
    
    cues.map(function(c) {
      if (c.preload) {
        c.preload()
      }
    })
  },
  
  this.setup = function() {
    fft.setInput(sound)  
  },
  
  this.render = function(context) {
    context = context || {}
    
    if (this.state !== states.playing)
      return
    
    var time = round(millis() - this.startTime)/1000;
    
    var curCue = this.getCue(this.cueIdx)
    var cueTimeDiff = curCue.time - time
    
    if (this.cueIdx < this.cues.length - 1 && cueTimeDiff < this.precision) {
      this.incrementCue()
    }
    
    fft.analyze()
    context.fft = fft
    curCue.render(context)
  }
}