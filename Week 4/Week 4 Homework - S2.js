function setup(){
	createCanvas(450,600);
	colorMode(HSB, 360, 100, 100);
	
}

function draw(){
	noStroke();
	
	//large rect #1
  fill(202,61,84);
	rect(0, 0, width, height/3);
	
	//large rect #2
	fill(202,61,50);
	rect(0, height/3, width, height/3);
	
	//large rect #3
	fill(32,100,100);
	rect(0, height/2, width, height);
	
	//large rect #4
	fill(58,100,100);
	rect(0, height/3 + 100, width, 100);

  //top small square
	fill(40,100,30);
	rect(width/2 - 50, 100, 100, 100);
	
	//bottom small square
	fill(40,100,30);
	rect(width/2 - 50, height - 200, 100, 100);
}