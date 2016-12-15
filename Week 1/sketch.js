//Tu Nguyen
//Week 1 Homework
//Wall Drawing #56


function setup() {
  createCanvas(401,401);
}

function draw() {
  background(255);
  line(0, 0, width, 0);

  //Vertical Lines
  var numLines = 80;
  var gap = 10;
  for (VerLines = 0; VerLines <= numLines; VerLines++){
    line(gap*VerLines, 0, gap*VerLines, height);
  }
  //Horizontal Lines, Half Top Right
  for(HorLines = 0; HorLines <= numLines/2; HorLines++){
    line(width/2, gap*HorLines, width, gap*HorLines);
  }
  //Horizontal Lines, Bottom 
  for(HorLines = 0; HorLines <= numLines/2; HorLines++){
    line(0, height/2 + gap*HorLines, width, height/2 + gap*HorLines);
  }
  //Diagnogal Lines, Half Bottom
  var numDiagLines = 60;
  var DiagLineGap = 10;
  for(var DiagLines = 0; DiagLines < numDiagLines; DiagLines++){
		line(-20 + gap*2, height/2 + DiagLines*DiagLineGap, -20 + gap*2 + DiagLines*DiagLineGap, height/2);
  } 
  
  //Diagnogal Lines, Quarter Bottom
  var numDiagLines3 = 20; //half bottom
  for(var DiagLines3 = 0; DiagLines3 < numDiagLines3; DiagLines3++){
	  line(200, height/2 + DiagLines3*DiagLineGap, 200 + width/2 + height/2 - DiagLines3*DiagLineGap, 200 + width/2 + height/2);
  }
  var numDiagLines2 = 21; //half top
  for(var DiagLines2 = 0; DiagLines2 < numDiagLines2; DiagLines2++){
	  line(200 + width/4 + height/4 - DiagLines2*DiagLineGap, height/2, 200 + width/2 + height/2, height + DiagLines2*DiagLineGap);
  }
}
