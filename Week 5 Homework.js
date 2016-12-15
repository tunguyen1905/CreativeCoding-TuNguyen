function setup() {
  createCanvas(800,800);
}

function draw() {
   //hair  
    fill('Black');
    noStroke();
    ellipse(400,370,90,150);
    
     //neck
    fill('LavenderBlush');
    noStroke();
    rect(390,360,23,40);
    fill('DarkSalmon');
    triangle(380,370, 420, 370, 400, 393);
    
    //face
    fill('LavenderBlush');
    ellipse(400,350,50,65);
    
    
    //nose
    fill('MistyRose');
    stroke('RosyBrown');
    strokeWeight(.2);
    ellipse(400, 355, 7, 15);
    noStroke();
    ellipse(400,360,10,5);
    
    //lips
    fill('Maroon');
    arc(400, 372, 10, 5,PI,TWO_PI);
   
   //eyes
    fill('White');
    ellipse(390,345, 8, 5);
    ellipse(410,345, 8, 5);
    
    //iris 
    fill('Black');
    ellipse(390,345,4,4);
    ellipse(410,345,4,4);
   
   //body
    stroke('Black');
    fill('LightSeaGreen');
    quad(355,400, 445, 400, 425, 500, 375,500);
    
    //arms
    stroke('Black');
    rect(350,400,20,120);
    rect(430,400,20,120);
    
    //hands
    stroke('Black');
    fill('LavenderBlush');
    ellipse(360,530, 20,20);
    ellipse(440,530, 20,20);
}