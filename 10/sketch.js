var canvas

var radius = 80
var inc = 0
var speed = 0.02
var sinVal
var rot = 1
var rotTarget = 1
var pointRange = {
  min:20,
  max:3
}

var points = []
var numpoints = 3

var circle
var locationData

function preload() {
}

function setup() {
  canvas = createCanvas(500, 600)

  circle = [
    new Circle(
      width/2, height/2, { min:30, max:200 }, { min:20, max:4 }
    ),

    new Circle(
      width/2, height/2, { min:200, max:30 }, { min:20, max:4 }
    ),

    new Circle(
      width/4, height/4, { min:10, max:100 }, { min:20, max:4 }
    ),
    new Circle(
      width/4, height/4, { min:100, max:10 }, { min:20, max:4 }
    ),

    new Circle(
      width/4, height*0.74, { min:10, max:100 }, { min:20, max:4 }
    ),
    new Circle(
      width/4, height*0.74, { min:100, max:10 }, { min:20, max:4 }
    ),

    new Circle(
      width*0.75, height*0.75, { min:10, max:100 }, { min:20, max:4 }
    ),
    new Circle(
      width*0.75, height*0.75, { min:100, max:10 }, { min:20, max:4 }
    ),
    
    new Circle(
      width*0.75, height/4, { min:10, max:100 }, { min:20, max:4 }
    ),
    new Circle(
      width*0.75, height/4, { min:100, max:10 }, { min:20, max:4 }
    )

  ]
  
}


function draw() {
  
  background(0)

  circle.map((c)=>{
    c.render()
  })
}

class Circle {
  constructor(
    x, 
    y, 
    radiusRange = {
      min:10,
      max:100
    },
    pointRange = {
      min:4,
      max:10
    }
  ) {
    this.x = x
    this.y = y 
    this.words = ["now", "later"]
    this.currentWord = 0

    this.inc = 0
    this.speed = 0.02

    this.radiusRange = radiusRange
    this.pointRange = pointRange

    this.color = {
      r:random(0,255),
      g:random(0,255),
      b:random(0,255)
    }
  }

  render() {
    this.inc += 0.1

    var sinVal = sin(this.inc),
        numpoints = map(sinVal, -1, 1, this.pointRange.min, this.pointRange.max),
        radius = map(sinVal, -1, 1, this.radiusRange.min, this.radiusRange.max),
        points = []

    if (sinVal < -0.999) {
      while(sin(this.inc) < -0.999)
        this.inc += 0.01

      this.color.r = (this.color.r > 255)?0: (this.color.r + random(0,50))
      this.color.b = (this.color.b > 255)?0: (this.color.b + random(0,50))
      this.color.g = (this.color.g > 255)?0: (this.color.g + random(0,50))
      
      this.currentWord = (this.currentWord === 0)?1:0
    }

    resetMatrix()
    translate(this.x, this.y)

    fill(
      this.color.r,
      this.color.b,
      this.color.g
    )
    
    noStroke()
    text(this.words[this.currentWord], 0, 0)

    rotate(this.inc*10)

    for(var i=0; i<numpoints; i++) {
      points.push({
        x: radius*sin( map(i, 0, numpoints, 0, 6.3) ),
        y: radius*cos( map(i, 0, numpoints, 0, 6.3) )
      })
    }

    stroke(
      this.color.r,
      this.color.b,
      this.color.g
    )
    strokeWeight(3)
    fill( 0, 0, 0)

    points.map((p, idx) => {
      ellipse(p.x, p.y, 5, 5)
      if (idx < points.length-1) {
        line(p.x, p.y, points[idx+1].x, points[idx+1].y)
      } else {
        line(p.x, p.y, points[0].x, points[0].y)
      }
    });

  }
}