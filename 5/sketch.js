var canvas, poem_element
var count = 0
var poem = []

var words = [
    ["order",   "",     "",        "In",        "",       "death"],
    ["",        "",     "",       "good",       "",       "",],
    ["Do",      "you",  "have",   "time",       "for",    "this?", ],
    ["",        "",     "",       "yes",        "",       ""],
    ["",        "",     "",       "is",         "",       ""],
    ["",        "",     "",       "the",        "",       ""],
    ["life",    "",     "",       "answer.",    "",       "chaos"]
]

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices()
msg.voice = voices[4]
msg.rate = 0.8;
msg.pitch = 1.2

msg.onend = function(e) {
  console.log('Finished in ' + event.elapsedTime + ' seconds.');
};

speechSynthesis.speak(msg);

function setup(){
  canvas = createCanvas(500, 500)
  poem_element = createDiv('', '')
  poem_element.addClass('poem')

}

function draw() {
  var y = sin(count)
  var x = cos(count)

  count += map(mouseX + mouseY, 0, width + height, 0.01, 0.2)
  
  var xCount = map(x, -1, 1, 5, 20)
  var yCount = map(y, -1, 1, 15, 20)
  var radius = map(x + y, -2, 2, 10, 500)
  var xborder = 50
  var yborder = 50

  background(
    map(mouseY, 0, height, 0, 255)
  )

  strokeWeight(1)
  noFill()

  for( var x=xborder; x<(width-xborder)+1; x+=((width-xborder*2)/xCount) ) {
    for( var y=yborder; y<(height-yborder)+1; y+=((height-yborder*2)/yCount) ) {
      stroke(
        map(mouseX, 0, width, 255, 0)
      )
      ellipse(x, y, radius, radius);
    }
  }
  
  const wordy = Math.min( 
    Math.max( parseInt(map(mouseX, 0, width, 0, words.length-1), 10), 0), words.length-1)

  const wordx = Math.min(
    Math.max( parseInt(map(mouseY, 0, height, 0, words[wordy].length-1), 10), 0), words[wordy].length-1)
  
  fill(map(wordy, 0, words.length-1, 0, 255), 0, 0)
  textAlign(CENTER)
  textSize(80)
  text(
    words[wordy][wordx],
    width/2,
    height/2
  )

  var newWord = words[wordy][wordx]

  if (poem.length === 0 || ((poem[poem.length-1] !== newWord) && poem[poem.length-2] !== newWord)) {
    
    var lastChr = newWord.substr(newWord.length-1)
    poem.push(newWord)

    var lastChr
    
    if (lastChr === "." || lastChr === "?") {
      poem.push("<br/>")
    }
  }

  var elem = document.getElementsByClassName('poem')[0];
  elem.scrollTop = elem.scrollHeight;

  poem_element.elt.innerHTML = poem.join(" ")
  poem_element.scrollTop = poem_element.scrollHeight
}

function mousePressed() {
  msg.text = poem.filter((item)=>item !== "<br/>").join(" ")
  speechSynthesis.speak(msg)
}