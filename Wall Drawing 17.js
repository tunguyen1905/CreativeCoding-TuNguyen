//Tu Nguyen
//Wall Drawing 17 

var rectWidth = 100;
var rectHeight = 460;
var gap = 20;
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  //Rect #1
  var numVerLines = 11;
  var verLineGap = 10;
  for (VerLines = 0; VerLines < numVerLines; VerLines++){
    line(20 + verLineGap*VerLines, 20, 20 + verLineGap*VerLines, 10 + rectHeight);
  }
  //Rect #2 
  var numHorLines = 46;
  var HorLineGap = 10;
  for (HorLines = 0; HorLines < numHorLines; HorLines++){
    line(20 + rectWidth + gap, 20 + HorLineGap*HorLines, 20 + rectWidth*2 + gap, 20 + HorLineGap*HorLines);
  }
  //Rect #3
  var numDiagLines = 10;
  var DiagLineGap = 10;
  for(var DiagLinesTop = 0; DiagLinesTop < numDiagLines; DiagLinesTop++){
		line(20 + rectWidth*2 + gap*2, 20 + DiagLinesTop*DiagLineGap, 20 + rectWidth*2 + gap*2 + DiagLinesTop*DiagLineGap, 20);
	}
	for(var DiagLinesMid = 0; DiagLinesMid < numDiagLines*3.5; DiagLinesMid++){
		line(20 + rectWidth*2 + gap*2, 20 + numDiagLines*DiagLineGap + DiagLinesMid*DiagLineGap, 20 + gap*2 + numDiagLines*3*DiagLineGap, 20 + DiagLinesMid*DiagLineGap);
	}
	for(var DiagLinesBot = 0; DiagLinesBot < numDiagLines; DiagLinesBot++){
		line(20 + rectWidth*2 + gap*2 + DiagLinesBot*DiagLineGap, 20 + numDiagLines*4.5*DiagLineGap, 20 + rectWidth*3 + gap*2, 20 + numDiagLines*3.5*DiagLineGap + DiagLinesBot*DiagLineGap);
	} 
	//Rect #4
	for(var DiagLinesTop = 0; DiagLinesTop < numDiagLines; DiagLinesTop++){
	  line(500 - 20 - DiagLinesTop*DiagLineGap, 20, 500 - 20, 20+ DiagLinesTop*DiagLineGap);
	}
	for(var DiagLinesMid = 0; DiagLinesMid < numDiagLines*3.5; DiagLinesMid++){
	  line(500 - 20, 20 +numDiagLines*DiagLineGap + DiagLinesMid*DiagLineGap, 500 - 20 - rectWidth, 20 + DiagLinesMid*DiagLineGap);
	}
	for(var DiagLinesBot = 0; DiagLinesBot < numDiagLines; DiagLinesBot++){
	  line(500 - 20 - DiagLinesBot*DiagLineGap, 20 + numDiagLines*4.5*DiagLineGap, 500 - 20 - rectWidth, 20 + numDiagLines*3.5*DiagLineGap + DiagLinesBot*DiagLineGap);
	}
}