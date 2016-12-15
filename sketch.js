//Tu Nguyen
//Final Sketch #1

var on = false;
var circle = {x:300,y:200,diameter:50};
var sourceText = "CLICK THE BUTTON!";
var curIndex = 10;

function setup() {
  createCanvas(600, 400);
  frameRate(5)
}

function draw() {
  // change background color if mouse is pressed inside the circle, otherwise background is black
  if (on) {
    background(random(255),random(204),255);
  } else {
    background(0);
  }
 
  stroke(255);
  strokeWeight(1);
  noFill();

  //ellipse
    fill(250, 200, 200);
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  
  
   //Text
  fill(128 + sin(frameCount*0.1) * 128);
  textSize(20);
  textAlign(250,150);
  text(sourceText.substring(curIndex, curIndex+7),250, 150);
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }
}
 
// when mouse is pressed inside the moving circle, background color changes
function mousePressed() {
  if(mouseX >250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on;
  }
}