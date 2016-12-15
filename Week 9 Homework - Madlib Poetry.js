//Tu Nguyen
//Madlib Poetry
//Love Song (from 'Vision of Spring, 1921) by William Faulkner
//http://www.pifmagazine.com/2000/10/love-songfrom-vision-in-spring-1921/

var loaded = false;

function preload(){
	var script = document.createElement( 'script' );
  	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/rita/1.1.51/rita-full.js';
  	script.onload = function(){
    	loaded = true;
       lexicon = new RiLexicon();
    }
    document.body.appendChild( script );
}

var lexicon;
function setup() {
	createCanvas(700,700);
	background(255);
	textSize(20);
	textAlign(CENTER,CENTER);
	text("Click to generate the poem",width/2,height/2);
}

function draw (){
}

function mousePressed(){

if (loaded){
  var output =
    //Title
    "'Love " +
	lexicon.randomWord("nn") + "'" + " "+
	"by William Faulkner\n\n" + 
   //1st line
    "Shall I walk, then, through a" + " " +
    lexicon.randomWord("nn") + " " + "of" + " " +
    lexicon.randomWord("nns") + "\n" + 
    //2nd line
    lexicon.randomWord("rb") + " " + "erect (I am" + " " + 
    lexicon.randomWord("jjr") + " " + "[than?] I look)" + "\n" +
    //3d line
    "To a" + " " +
    lexicon.randomWord("jj") + " " + lexicon.randomWord("nn") + " " + "---" + " " + "and shall I dare" + "\n" +
    //4th line
    "To open it? I smoothe my" + " " + lexicon.randomWord("jj") + " " + lexicon.randomWord("nn") + "\n" +
    //5th line
    "With an" + " " + lexicon.randomWord("nn") + " " + "changed" + " " + lexicon.randomWord("nn") + " " + "that I revise again" + "\n" +
    //6th line
    "Unitl I have forgotten what it was at first;" + "\n" + 
    //7th line
    "Settle my" + " " + lexicon.randomWord("nn") + " " + "with: I have brought a" + " " + lexicon.randomWord("nn") + "," + "\n" +
    lexicon.randomWord("nn", 1) + "," + "\n" +
    "Then seat myself with: We have passed the" +
    lexicon.randomWord("jjs") + "." + "\n" 
    
  background(255);
  text(output, 10, 10, width, height-300);
}
    }