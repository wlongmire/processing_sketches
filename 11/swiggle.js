var words = [
  "yes",
  "um",
  "hm",
  "uch",
  "uch",
  "ok",
  "yes",
  "yah",
  "yah",
  "um",
  "hot",
  "um",
  "hot",
  "hot",
  "yes",
  "yes",
  "ohh",
  "uh",
  "I",
  "oh",
  "oh",
  "I",
  "nuh",
  "ya",
  "yah",
  "yes",
  "oh",
  "now",
  "yes",
  "nuh",
  "now",
  "oh",
  "uh",
  "go",
  "god",
  "god",
]

class Swiggle {
  constructor(startx, starty, resetCallback, color = 100, sizeFreq = 50, amp = 10, freq = 10) {
    this.speedy = 2
    this.triggered = false
    this.wordInx = 0
    this.color = color
    this.position = { x:startx, y:starty }
    this.startx = startx
    this.starty = starty
    this.inc = starty
    this.amp = amp
    this.freq = freq
    this.sizeFreq = sizeFreq
    this.resetCallback = resetCallback
    this.size = {
      min:10,
      max:30
    }
    this.variation = 0
  }

  render() {
    this.inc = this.position.y + this.variation

    if (this.position.y >= height + 20) {
      this.color = (this.color > 255)?100:(this.color+30);

      if (!this.triggered) {
        this.resetCallback(this)
        this.triggered = true
      }

      this.position.y = this.starty;
      this.wordInx = (this.wordInx > words.length-1)?0:this.wordInx + 1;
      this.variation = random(-1, 1)
      this.freq = (this.freq < 5)?15:this.freq + random(-3, 1)
      this.amp = this.amp - random(-1, 1)
    } else {
      this.position.x = (this.startx) + this.amp*sin(this.inc/this.freq)
      this.position.y = this.position.y + this.speedy
      var size = map(sin(this.inc/this.sizeFreq), -1, 1, this.size.min, this.size.max)

      stroke(0)
      fill(this.color)
      ellipse(
        this.position.x,
        this.position.y,
        size,
        size
      )
      
      fill(
        (this.color + 150 > 255)?255 - (this.color + 150):this.color + 150
      )

      stroke(0)
      textAlign(CENTER, CENTER)
      textSize(map(sin(this.inc/this.sizeFreq), -1, 1, 3, 15))
      text(
        words[this.wordInx],
        this.position.x,
        this.position.y
      )
    }
  }
}