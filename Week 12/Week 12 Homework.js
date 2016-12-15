var img;
var imgBg;
var numCats = 10;
function preload(){
  img = loadImage('grey-cat.jpg');
  imgBg = loadImage('starry-sky.jpg');
}

function setup() {
  createCanvas(700,350);
}

function draw() {
  background(imgBg);
  
  for(var i=0; i < numCats; i++){
    tint(100,i*15,0,150);
    image(img,i*30,0,img.width,img.height);
  }

}
