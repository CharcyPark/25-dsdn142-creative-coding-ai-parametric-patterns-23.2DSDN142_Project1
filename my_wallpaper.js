//your parameter variables go here!
let W=200
let H=200
let starSize=10
let starCount=80
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;



}

function wallpaper_background() {
  background(17,24,42); 
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
c1=color(154,122,204,150)
c2=color(204,122,131,131)
c3=color(122,131,204,120)
c4=color(151,209,145,180)
c5=color(155,210,146,80)
c6=color(220,209,131,160)
c7=color(159,226,245,200)
c8=color(122,131,204,180)
c9=color(231,244,78,200)


setup_drawSky();

setup_framework()
}
function setup_framework(){
let borderWidth=10
let spacing=15
angleMode(DEGREES)
if (starCount>40) {
  drawExtraDecoration()

}

for (let i=0; i<starCount;i++) {
  let xPos=random(0,borderWidth-1);
  let yPos=random(0,borderWidth-1);
  push()
  translate(xPos,yPos);
  
  rotate(random(0,180))//turning 

drawCornerDecoration()
  pop();}

}
function drawExtraDecoration() {
  let size=random(4,8)
  let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
  let randomColor=random(myColors)
  noStroke()
  fill(randomColor)
  push()//left corner
  translate(10,H-10)
  rotate(36)
  for(let i=0; i<5; i++) {
    ellipse(0,0,size/2,size*1.2)
    rotate(72)
  }
  pop()
  //right corner
  push()
  translate(W-10,10)
  rotate(36)
  for(let i=0; i<5; i++) {
    ellipse(0,0,size/2,size*1.2)
    rotate(72)
  }
  pop()

}
function drawCornerDecoration() {
let size=random(3,6)

let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
let randomColor=random(myColors)
noStroke()
fill(randomColor)

push()
translate(0,0)
rotate(36)
for(let i=0; i<5; i++) {
  ellipse(0,0,size/2,size*1.2)
  rotate(72)
}
pop()
push()
translate(170,15)
rotate(45)
for(let i=0; i<7; i++) {
  ellipse(40,40,size/2,size*1.2)
  rotate(62)
}
pop()

}
function setup_drawSky(){
let from= color(17,24,42)
let to =color(2,26,42)
let interA= lerpColor(from,to,0.25)
let interB= lerpColor(from,to,0.3)
noStroke()
fill(from)
rect(0,0,W,H/2)//top rec

fill(interA)
rect(0,H/2,W,H/4)

fill(interB)
rect(0,H*3/4,W,H/8)

fill(to)
rect(0,H*7/8,W,H/8)
// draw points
stroke('white')
strokeWeight(1)
for (let i=0; i<500; i++) {
  let x=random(1,W-1)
  let y=random(1,H*3/4)
  point(x,y)
}


setup_drawStars()
}

//draw stars
function setup_drawStars(){
  angleMode(DEGREES)
//draw many stars
if (starCount>70) {
  starSize=5
} else{
  starSize=starSize
}
for (let i=0; i<starCount;i++) {
  let xPos=random(20,W-20);
  let yPos=random(20,H*7/8);//random x,y but in the up part
  push()
  translate(xPos,yPos);
  
  rotate(random(-50,-10))//turning 
  drawMeteor();//draw sigle star

  pop();}}
  

function drawMeteor() {
  //draw star tail (curve/line)
  
let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
let randomColor=random(myColors)
 noFill()
 stroke(randomColor)
 strokeWeight(1)

 //line(0,0,0,random(-60,-30))
 
fill(randomColor)
 beginShape()
 curveVertex(0,0)
 curveVertex(0,0)
 curveVertex(0,0)
 curveVertex(-10,-22)
 curveVertex(-30,-50)
 curveVertex(-30,-50)

 endShape()
 

 //drawstars

strokeWeight(0.2)
 fill(randomColor);
 push()
 rotate(36)

  for (let i=0; i<5; i++) {
ellipse(0,0,starSize/3,starSize*1.5)
rotate(72)
  } 
  pop()
  fill(220,200,200,150)
  ellipse(0,0,starSize/2,starSize/2)

  }





