//Tu Nguyen
//Final Sketch #2 


function setup() {
  createCanvas(800,800);
  noFill();
  stroke(0.5);
  
}

function draw() {
  background(255);

  float(maxX = float(180)/width*mouseX);
  float(maxY = float(180)/height*mouseX);

  translate(width/2, height/2);
  for (var i = 0; i < 360; i+=5) {
    float(x = sin(radians(i)) * maxX);
    float(y = cos(radians(i)) * maxY);
    
    //Rotating object #1
    push();
    translate(x, y);
    rotate(i-(TWO_PI * noise(0.01*frameCount + 5)));
    stroke(153,204,255);
    rect(50,50,mouseX,mouseY);
    pop();
    
    
    //Rotating object #2
    push();
    translate(x*2,y*2);
    rotate(radians(i-frameCount*.1));
    stroke(204,229,255);
    rect(50,50,mouseX,mouseY);
    pop();
    
    //rotating object #3
    push();
    translate(-x*2, -y*2);
    rotate(radians(i-frameCount*.1));
    stroke(51,153,255);
    rect(50,50,mouseX,mouseY);
    pop();
  }
}
