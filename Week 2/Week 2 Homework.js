//Tu Nguyen
//Week 2 Homework
//Artwork: Study for Homage to the Square: Still Remembered
//Artist: Albers Josef
//Year 1956
//https://www.google.com/culturalinstitute/beta/u/0/asset/study-for-homage-to-the-square-still-remembered/GgFKjB6-mBLFzQ

var gap = 100;
var distance = 40;
  
function setup () {
  createCanvas(400,400);

}

function draw (){
  background(253,253,249);
  noStroke();
  
  fill(8,88,83);
  rect(10,10,width-20,height-20);

  fill(252,238,39);
  rect(10+distance,10+distance*1.5,width-gap,height-gap);
  
  fill(201,191,62);
  rect(10+distance*2.25,10+distance*3.5,width-gap*2,height-gap*2);
  
  fill(70,50,10);
  rect(10+distance*3.5,10+distance*5.5,width-gap*3,height-gap*3);
}
  
