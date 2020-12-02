




//JBLOGO
let jblogo;

//DIAGRAM
let img0;
var colRosa;


//ARROWINTHECENTER
var xpos;
var ypos;
var sz0 = 35;

//PROJECTSURL
let proyectos = ["https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://studiojamesbrazil.com/PARQUE-DE-TENSEGRIDAD-AMBIENTAL",
"https://studiojamesbrazil.com/crosshairs",
"https://studiojamesbrazil.com/FLUORESCENT-SMOGG",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://studiojamesbrazil.com/PARKLETS-old",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com"];


//PROJECTS SQUARES
var xpos0 = [774,1026,927,915.5,907,908,850,880,1138,
1209,1251,1119,1010,1141,
753,
527,
434,
383,
428,
257,
296,
674.3,
497,
758,
772,
781.5,
748,
777,
757,
769,
832,
840];

var ypos0 = [71,142,213,262,353,397,486,612,561.6,
492,394,356,403,421,
628,
622,
582,
439,
392,
395,
329,
534,
270,
505,
435.3,
426,
419,
194,
251,
285,
258,
225];
var sz1 = 10;


function preload() {
	img0 = loadImage("images/diagram.png");
	flecha0 = loadImage("images/flecha.png");
	jblogo = loadImage("images/jblogo.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  colRosa = color(236,0,140);


  xpos = 840;
  ypos = 349;

}

function draw() {
  background(colRosa);  


  imageMode(CORNERS);
  image(img0,0,0,1535, 753);
  imageMode(CENTER);
  jblogo.resize(370,150);
  image(jblogo,170,40);

  var d0 = dist(170,40,mouseX,mouseY);
  if(d0 <= 50){
    window.open("https://studiojamesbrazil.com");
  }


//ARROWINTHECENTER

  push();
  translate(xpos,ypos);
  strokeWeight(1);
  stroke(255);
  fill(colRosa);
  ellipse(0,0,sz0,sz0);
  let a = atan2(mouseY - ypos, mouseX - xpos);
  rotate(a);
  imageMode(CENTER);
  flecha0.resize(25,25);
  image(flecha0,0,0);
  pop();

//ARROWINTHECENTER
///////////////////////////////////////////////////////////////////////////////////
//PROJECTSQUARES

  for(var i = 0; i<xpos0.length; i++){

  	var d = dist
  	strokeWeight(5);
  	stroke(0);
  	//point(xpos0[i],ypos0[i]);

  	var d = dist(mouseX,mouseY,xpos0[i],ypos0[i]);

  	if(d <= sz1){

  		rectMode(CENTER);
  		noStroke();
  		fill(255);
  		rect(xpos0[i],ypos0[i],sz1,sz1);
  		strokeWeight(1);
  		stroke(255,200);
  		line(mouseX,mouseY,xpos,ypos);
    	if(mouseIsPressed){
      	 window.open(proyectos[i]);
    	}
  	}
  }


 //PROJECTSQUARES
///////////////////////////////////////////////////////////////////////////////////

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseClicked(){
  console.log(mouseX);
  console.log(mouseY);
}