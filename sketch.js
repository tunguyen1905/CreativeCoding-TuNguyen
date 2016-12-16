//Tu Nguyen
//Week 7 Homework

var waveLength = 600.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
function setup(){
  createCanvas(400,400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}
function draw(){
  background(255); 
  if(pointCount > 10000){
    noLoop();
  }
  fill(0);
  translate(width/2,height/2);
  
  beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLength * TWO_PI;  
  
  var amplitude = height/4;
    
  angle +=2.0;
  
  var x,y;
    y=sin(angle)* amplitude;
    x=cos(angle) * amplitude;
   
   //Ellipse 
   var h = random(0, 360);
   var radius = 20;
   fill(h, 90, 90);
   ellipse(x,y,radius, radius);
   ellipse(x*.5,y*.5,radius, radius);
   ellipse(x*1.5,y*1.5,radius, radius);
   h = (h + 1) %250;
}
endShape();
pointCount++;
}