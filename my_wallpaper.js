//your parameter variables go here!

let orangeSize=76;
let shinePos=30
let showShine=true;
let x=10
let y=10
let shineX=x-orangeSize/4+shinePos/50;
  let shineY=y-orangeSize/4;
let midX=100
let midY=100






function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255,255,127); //light honeydew green colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//draw orange
drawOrange()
}
function drawOrange(){
  angleMode(DEGREES)
for(var x=orangeSize/2;x<2*midX-orangeSize/2;x=x+orangeSize*1.1) {//first line


push()

fill(255,165,0);
stroke(210,105,30);
strokeWeight(2)
ellipse(x+15,y+orangeSize/2,orangeSize,orangeSize);
stroke('wihte')
strokeWeight(0.2)
ellipse(x+15,y+orangeSize/2,orangeSize-1,orangeSize-1);
stroke(210,117,86)
strokeWeight(1)
point(x+13,y+5)
point(x+20,y+7)
point(x+11,y+10)
let shineX=x+15-orangeSize/4+shinePos/50;
  let shineY=y+5+orangeSize*1/4;
if (showShine){
  
  fill(255,255,200,180)
  noStroke();
  ellipse(shineX,shineY,orangeSize/3,orangeSize/3);

}
//draw leaves
fill(34,139,34);
noStroke();
triangle(x+10,y+5,x,y+5-orangeSize/2,x+10,y-5)

pop()
}
for(var x=orangeSize/2+5;x<2*midX-orangeSize/2;x=x+orangeSize*1.1) {//second line


push()

fill(255,165,0);
stroke(210,105,30);
strokeWeight(2)
ellipse(x,y+2*orangeSize,orangeSize,orangeSize);
stroke('wihte')
strokeWeight(0.2)
ellipse(x,y+2*orangeSize,orangeSize-1,orangeSize-1);
stroke(210,117,86)
strokeWeight(1)
point(x+orangeSize/10,y-5+2*orangeSize)
point(x+orangeSize/5,y-7+2*orangeSize)
point(x+1,y-10+2*orangeSize)
let shineX=x+orangeSize/5+shinePos/50;
  let shineY=y-orangeSize/4+orangeSize/2;
if (showShine){
  
  fill(255,255,200,180)
  noStroke();
  ellipse(shineX,shineY+2*orangeSize,orangeSize/3,orangeSize/3);

}
//draw leaves
fill(34,139,34);
noStroke();
triangle(x-5,y+1.5*orangeSize,x-15,y+1.5*orangeSize-15,x-5,y+1.5*orangeSize-10)

pop()
}
drawSigleSlice()
}
//draw orangeSlice
function drawSigleSlice(){
//orangeskin
angleMode(DEGREES)
for(var x=orangeSize/2+5;x<2*midX-orangeSize/2;x=x+orangeSize*1.3) {
stroke(224,93,49);//skin color
strokeWeight(3.5);//thickness of skin

fill(255,150,0,150);

ellipse(x,y+10+3*orangeSize,orangeSize,orangeSize);//slice position
stroke('white');//highlight
strokeWeight(0.3);
ellipse(x,y+10+3*orangeSize,orangeSize-1,orangeSize-1);
//inside of orange
stroke(254,245,194);
strokeWeight(2);
fill(254,245,194,130);
ellipse(x,y+10+3*orangeSize,orangeSize/10,orangeSize/10);
strokeWeight(0.5);

push()
angleMode(DEGREES)
let angle=45

translate(x,y+10+3*orangeSize)
noFill()
stroke(254,245,194)
strokeWeight(0.5)
for (let i =0; i<8; i+=1){
line(0,0,0,orangeSize-orangeSize/2-1);
rotate(angle)

}
pop()
}

}
