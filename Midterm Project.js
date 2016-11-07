/**
* Kevin's comments:  Nice!  See code-related comments inline...
**/
function setup() {
  createCanvas(400, 400);
 colorMode(HSB);
//this drawing code gets wiped out in your draw loop because you're calling background in the first line of your draw loop
for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    stroke(i, j, 100);
    point(i, j);
  }
}
}

function draw() {
  background(150, 204, 100);
  //you don't need to call frameRate on each draw Loop, just throw this line in your setup and you're good to go.
  frameRate(1);
  
//stationary star
 push();
  translate(width*0.5, height*0.5);
  star(0, 0, 40, 100, 5); 
  pop();
  
//rotating star
  push();
  translate(width*0.5, height*0.5);
  //don't forget that semi-colon!
  fill(200, 102, 100)
  //why not just rotate by frameCount instead of dividing by 1?  Also, by default, rotate is measured in
  //radians, so you might want to call rotate( radians(frameCount) ) for a smoother rotation.
  rotate(frameCount / 1);
  star(0, 0, 40, 100, 5); 
  pop();
}
//nice use of this parameterized function!
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
