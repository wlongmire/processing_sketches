
window.mgr = undefined
window.canvas = undefined
window.images = []

var scenes = [
  Scene1,
  Scene2,
  Scene3
]

function preload() {
  images = [
    loadImage('media/Harri_Palviranta_cho_02.jpg'),
    loadImage('media/Harri_Palviranta_kazmierczak_05.jpg'),
    loadImage('media/Harri_Palviranta_lanza_07.jpg')
  ]
}

function setup() {
  canvas = createCanvas(500, 500)
  mgr = new SceneManager()

  scenes.map((scene)=>{
    mgr.addScene ( scene )
  })

  mgr.showNextScene();
}

function draw() {
  mgr.draw()
}

function keyPressed() {
  switch(key)
  {
    case '1':
      mgr.showScene( Scene1 )
      break;
    case '2':
      mgr.showScene( Scene2 )
      break
    case '3':
      mgr.showScene( Scene3 )
      break
  }

  mgr.keyPressed()
}

function Scene1() {
  var line = "The school bell rings."
  var charPos
  var timer
  var y, ydir

  this.setup = function() {
    charPos = 0
    timer = 0
    y = height/2
    ydir = 5
  }

  this.enter = function() {
    tint(0, 153, 204)
    image(images[0], 0, 0)
    
  }

  this.draw = function() {
    fill(255)
    noStroke()
    
    var x = map(cos(timer), -1, 1, 50, width - 50)
    y += ydir
    if (y > height - 50 || y < 50) {
      ydir = -ydir
    }
    
    textSize(10)
    text(line.charAt(charPos), x, y)
      
    if (charPos === line.length - 1) {
      charPos = 0
    } else {
      charPos +=1
    }
    
    timer += 0.15
  }
}

function Scene2() {
  var line = "I grab my things, head to class"
  var charPos
  var timer
  var y, ydir

  this.setup = function() {
    charPos = 0
    timer = 0
    y = height/2
    ydir = 5
  }

  this.enter = function() {
    image(images[1], 0, 0)
    background(0, 0, 0, 0.8)
  }

  this.draw = function() {
    fill(255)
    
    var x = map(cos(timer), -1, 1, 50, width - 50)
    y += ydir
    if (y > height - 50 || y < 50) {
      ydir = -ydir
    }
    
    text(line.charAt(charPos), x, y)
      
    if (charPos === line.length - 1) {
      charPos = 0
    } else {
      charPos +=1
    }
    
    timer += 0.15
  }
}

function Scene3() {
  var line = "and start shooting."
  var charPos
  var timer
  var y, ydir

  this.setup = function() {
    charPos = 0
    timer = 0
    y = height/2
    ydir = 5
  }

  this.enter = function() {
    image(images[2], 0, 0)
  }

  this.draw = function() {
    
    fill(0, 255, 0)
    
    var x = map(cos(timer), -1, 1, 50, width - 50)
    y += ydir
    if (y > height - 50 || y < 50) {
      ydir = -ydir
    }
    
    text(line.charAt(charPos), x, y)
      
    if (charPos === line.length - 1) {
      charPos = 0
    } else {
      charPos +=1
    }
    
    timer += 0.15
  }
}