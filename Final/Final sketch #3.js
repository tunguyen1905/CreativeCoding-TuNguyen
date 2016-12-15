//Tu Nguyen
//Final Sketch #3

var dots = [];
var osc;
var playing = false;

function setup(){
  createCanvas(800, 600);
  osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.freq(440);
  osc.amp(0);
  osc.start();
}
function draw(){
  background(0);
  
  for(var i =0; i < dots.length; i++){
    dots[i].move();
    dots[i].display();
  }
  
  if (dots.length > 50){
    dots.splice(0, 1);
  }
}
function mouseDragged () {
  dots.push(new dot(mouseX, mouseY));
   if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      osc.amp(0.5, 0.05);
      playing = true;
    }
     else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
     
    }
   }
}
function keyPressed(){
  dots.splice(0, 1);
}
function dot (x, y){
  this.x = x;
  this.y = y;
  this.move = function(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  this.display = function(){
    stroke(10);
    fill(random(255),150, random(255));
    ellipse(this.x, this.y, 10, 10);
  }
}  
