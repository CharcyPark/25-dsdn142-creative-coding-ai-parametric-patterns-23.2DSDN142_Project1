//your parameter variables go here!
let W=200
let H=200
let fireLightSize;
let fireCount=33
let fireworkSize=20
let fireworkNum=80
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
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(A3);
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

fireLightSize=random(1,2)

setup_drawSky();


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
let col1=(202, 245, 64)
let col2=(51, 24, 204)
let col3=(236, 235, 242)
let col4=(227, 121, 34)
let groupcolor=[col1,col2,col3,col4]
let randomColor1=color(groupcolor)
stroke(randomColor1)
strokeWeight(1)
for (let i=0; i<500; i++) {
  let x=random(1,W-1)
  let y=random(1,H*3/4)
  point(x,y)
}


setup_drawFires()
}


function setup_drawFires(){
  

  angleMode(DEGREES)
//draw many fire light flying
for (let i=0; i<fireCount;i++) {
  let xPos=random(20,W-20);
  let yPos=random(H/2,H*6/8);//random x,y but in the up part
  push()
  translate(xPos,yPos);
  
  rotate(-150)//turning 
  drawFlyingFire();//draw sigle fire

  pop();
  
}drawFireworksN()}
function drawFireworksN(){
    angleMode(DEGREES)
  for (let i=0; i<fireworkNum;i++) {
  let xPos1=random(20,W-20);
  let yPos1=random(20,H/2);//random x,y but in the up part
  push()
  translate(xPos1,yPos1);
  
  rotate(-150)//turning 
  drawFireworks();//draw sigle fire
  pop()
}

  


  fill(220,200,200,150)
  ellipse(0,0,fireworkSize/2,fireworkSize/2)

}
function drawFlyingFire(){
  c1=color(154,122,204,150)
c2=color(204,122,131,131)
c3=color(122,131,204,120)
c4=color(151,209,145,180)
c5=color(155,210,146,80)
c6=color(220,209,131,160)
c7=color(159,226,245,200)
c8=color(122,131,204,180)
c9=color(231,244,78,200)
let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
  let randomColor=random(myColors)
  stroke(randomColor)
 strokeWeight(1)
 fill(randomColor)
 beginShape()
 curveVertex(0,0)
 curveVertex(0,0)
 curveVertex(0,0)
 curveVertex(-10,-22)
 curveVertex(-30,-50)
 curveVertex(-30,-50)

 endShape()
 push() 
 rotate(45)
 strokeWeight(0.2)
 fill(randomColor,random(150,200)) 
  for (let i=0; i<5; i++) {
ellipse(0,0,fireLightSize/3,fireLightSize*1.5)
noStroke()

fill(randomColor,210)
ellipse(0,0,fireLightSize/3+2,fireLightSize*1.5+2)

rotate(72)
  } 
  fill(220,200,200,200)
  ellipse(0,0,fireLightSize/2,fireLightSize/2) 
  pop()}

function drawFireworks(){
  angleMode(DEGREES)
  c1=color(154,122,204,150)
c2=color(204,122,131,131)
c3=color(122,131,204,120)
c4=color(151,209,145,180)
c5=color(155,210,146,80)
c6=color(220,209,131,160)
c7=color(159,226,245,200)
c8=color(122,131,204,180)
c9=color(231,244,78,200)
let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
  let randomColor=random(myColors)
 push() 
 rotate(45)
 strokeWeight(0.2)
 fill(randomColor,random(150,200))
  
  for (let i=0; i<10; i++) {
ellipse(0,0,fireworkSize/8,fireworkSize*4)
noStroke()

rotate(72)
  } 
  fill(randomColor,200)
  ellipse(0,0,fireworkSize/8,fireworkSize/8) 
  pop()
}







    

  




