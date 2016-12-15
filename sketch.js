var numCircles = 40;
var speed = 0; 

function setup(){
  createCanvas(500,500);
  frameRate(5);
  noStroke();
}

function draw(){
  background(255);
  var circleWidth = 250.0;

  for(var cir1 = 0; cir1 <= numCircles; cir1++){
    beginShape();
    noFill();
    stroke(0);
    ellipse(0 + speed, 0 + speed, circleWidth/2, circleWidth/2);
    circleWidth-=20.0;
    endShape();
  }  
    for(var cir2 = 0; cir2 <= numCircles; cir2++){
    beginShape();
    ellipse(500 - speed, 500 - speed, circleWidth/2, circleWidth/2);
    circleWidth+=20.0;
    endShape();
  }

	//Motion reset when reaching speed limit
	if(speed > 300){ //speed is set at 320
		speed = speed - 150;
	}else{
		speed+= 10;
	}
}