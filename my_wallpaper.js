//your parameter variables go here!
//position control
let midx=100
let midy=100
//size control
let outerR=50
let innerR=outerR*0.7
//corner style control
let smoothness=0.8
//if control eye direction to show different emotions
let emotionType=1 //0,1,otherNum
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;
let flowerSize=6//background stars
let flowernum=200//background stars
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
  background(245, 193, 233);

 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
c1=color(217, 152, 187,150)//pink light
  c2=color(207, 131, 235,131)//light purple
  c3=color(199, 124, 214,120)//dark purple
  c4=color(184, 123, 170,180)//light pink
  c5=color(255, 94, 167,90)//red pink
  c6=color(224, 245, 157,160)//yello green light
  c7=color(235, 163, 108,200)//orange red
  c8=color(237, 152, 126,180)//light red
  c9=color(245, 103, 174,200)//pink dark
  let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
  let randomColor=random(myColors)
 //draw background stars
 strokeWeight(0.2)
 fill(randomColor) 
for(i=0;i<flowernum;i++){
    let xPos=random(10,195)
    let yPos=random(10,195)
 
 push()
 
translate(xPos,yPos)
  
drawbackgroundflower()
pop()}
function drawbackgroundflower(){
stroke(randomColor)
 strokeWeight(1)
 fill(randomColor)
 
 push() 
 rotate(36)

  for (let i=0; i<5; i++) {
ellipse(0,0,flowerSize/3,flowerSize*1.5)
rotate(72)
  } 
  fill(220,200,200,200)
  ellipse(0,0,flowerSize/2,flowerSize/2) 
  pop()
}
  
 
 strokeWeight(0.2)
 fill(randomColor) 
drawFlower()

  }
  function drawFlower() {
  c1=color(217, 152, 187,150)//pink light
  c2=color(207, 131, 235,131)//light purple
  c3=color(59, 75, 184,120)//dark blue
  c4=color(125, 199, 240,180)//light blue
  c5=color(145, 245, 125,90)//yellow green
  c6=color(219, 205, 96,160)//yello orange
  c7=color(235, 163, 108,200)//orange red
  c8=color(237, 152, 126,180)//light red
  c9=color(245, 103, 174,200)//pink dark
  let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
  let randomColor=random(myColors)
noStroke()

   translate(midx,midy)
   
   angleMode(DEGREES)
   beginShape()
      strokeWeight(0.2)
      fill(232, 135, 188) 
       

      let firstOuterX = outerR * cos(-90);
      let firstOuterY = outerR * sin(-90);
      vertex(firstOuterX, firstOuterY);
      for(let i=0;i<5;i++) {
        //outpoint(present)
        let outerAngle = 360 * i / 5 -180;
        let outerX = outerR * cos(outerAngle);
        let outerY = outerR * sin(outerAngle);
        //innerpoint(present)
        let innerAngle = 360 * (i + 0.5) / 5 -180;
        let innerX = innerR * cos(innerAngle);
        let innerY = innerR * sin(innerAngle);
        //nextinnerpoint
        let nextInnerAngle = 360* (i + 1.5) / 5-90;
        let nextInnerX = innerR * cos(nextInnerAngle);
        let nextInnerY = innerR * sin(nextInnerAngle);
        //caculatet the control point(from inner-outpoint)
        let cp1x = lerp(innerX, outerX, smoothness);
        let cp1y = lerp(innerY, outerY, smoothness);
        let cp2x = lerp(outerX, nextInnerX, smoothness);
        let cp2y = lerp(outerY, nextInnerY, smoothness);
        //drawbezier1
        bezierVertex(cp1x, cp1y, cp2x, cp2y, nextInnerX, nextInnerY)
        //draw next outpoint
        let nextOuterAngle = 360 * (i+1) / 5 -90;
        let nextOuterX = outerR * cos(nextOuterAngle);
        let nextOuterY = outerR * sin(nextOuterAngle);
        //caculate
        let cp3x = lerp(nextInnerX, nextOuterX, smoothness);
        let cp3y = lerp(nextInnerY, nextOuterY, smoothness);
        //draw another bezier
        bezierVertex(cp3x, cp3y, cp3x, cp3y, nextOuterX, nextOuterY);
      }
      
      endShape(CLOSE);
      //draw shadow
      beginShape()
      fill(235, 138, 190,200) 

      let firstOuterX1 = (outerR+2) * cos(-90);
      let firstOuterY1 = (outerR+2) * sin(-90);
      vertex(firstOuterX1, firstOuterY1);
      for(let i=0;i<5;i++) {
        //outpoint(present)
        let outerAngle = 360 * i / 5 -180;
        let outerX1 = (outerR+2) * cos(outerAngle);
        let outerY1 = (outerR+2) * sin(outerAngle);
        //innerpoint(present)
        let innerAngle = 360 * (i + 0.5) / 5 -180;
        let innerX1 = (innerR+2) * cos(innerAngle);
        let innerY1 = (innerR+2) * sin(innerAngle);
        //nextinnerpoint
        let nextInnerAngle = 360* (i + 1.5) / 5-90;
        let nextInnerX1 = (innerR+2) * cos(nextInnerAngle);
        let nextInnerY1 = (innerR+2) * sin(nextInnerAngle);
        //caculatet the control point(from inner-outpoint)
        let cp1x = lerp(innerX1, outerX1, smoothness);
        let cp1y = lerp(innerY1, outerY1, smoothness);
        let cp2x = lerp(outerX1, nextInnerX1, smoothness);
        let cp2y = lerp(outerY1, nextInnerY1, smoothness);
        //drawbezier1
        bezierVertex(cp1x, cp1y, cp2x, cp2y, nextInnerX1, nextInnerY1)
        //draw next outpoint
        let nextOuterAngle = 360 * (i+1) / 5 -90;
        let nextOuterX1 = (outerR+2) * cos(nextOuterAngle);
        let nextOuterY1 = (outerR+2) * sin(nextOuterAngle);
        //caculate
        let cp3x = lerp(nextInnerX1, nextOuterX1, smoothness);
        let cp3y = lerp(nextInnerY1, nextOuterY1, smoothness);
        //draw another bezier
        bezierVertex(cp3x, cp3y, cp3x, cp3y, nextOuterX1, nextOuterY1);
      }
      
      endShape(CLOSE);
      //draw highlight
      beginShape()
      fill(250, 167, 209) 

      let firstOuterX2 = (outerR-10) * cos(-90);
      let firstOuterY2 = (outerR-10) * sin(-90);
      vertex(firstOuterX2, firstOuterY2);
      for(let i=0;i<5;i++) {
        //outpoint(present)
        let outerAngle = 360 * i / 5 -180;
        let outerX2 = (outerR-10) * cos(outerAngle);
        let outerY2 = (outerR-10) * sin(outerAngle);
        //innerpoint(present)
        let innerAngle = 360 * (i + 0.5) / 5 -180;
        let innerX2 = (innerR-10) * cos(innerAngle);
        let innerY2 = (innerR-10) * sin(innerAngle);
        //nextinnerpoint
        let nextInnerAngle = 360* (i + 1.5) / 5-90;
        let nextInnerX2 = (innerR-10) * cos(nextInnerAngle);
        let nextInnerY2 = (innerR-10) * sin(nextInnerAngle);
        //caculatet the control point(from inner-outpoint)
        let cp1x = lerp(innerX2, outerX2, smoothness);
        let cp1y = lerp(innerY2, outerY2, smoothness);
        let cp2x = lerp(outerX2, nextInnerX2, smoothness);
        let cp2y = lerp(outerY2, nextInnerY2, smoothness);
        //drawbezier1
        bezierVertex(cp1x, cp1y, cp2x, cp2y, nextInnerX2, nextInnerY2)
        //draw next outpoint
        let nextOuterAngle = 360 * (i+1) / 5 -90;
        let nextOuterX2 = (outerR-10) * cos(nextOuterAngle);
        let nextOuterY2 = (outerR-10) * sin(nextOuterAngle);
        //caculate
        let cp3x = lerp(nextInnerX2, nextOuterX2, smoothness);
        let cp3y = lerp(nextInnerY2, nextOuterY2, smoothness);
        //draw another bezier
        bezierVertex(cp3x, cp3y, cp3x, cp3y, nextOuterX2, nextOuterY2);
      }
      
      endShape(CLOSE);
     


  drawFlowerInside()    
    } 
    function drawFlowerInside() {
      beginShape()
      fill(247, 101, 213,200) 

      let firstOuterX3 = (outerR/5) * cos(-90);
      let firstOuterY3 = (outerR/5) * sin(-90);
      vertex(firstOuterX3, firstOuterY3);
      for(let i=0;i<5;i++) {
        //outpoint(present)
        let outerAngle = 360 * i / 5 -180;
        let outerX3 = (outerR/5) * cos(outerAngle);
        let outerY3 = (outerR/5) * sin(outerAngle);
        //innerpoint(present)
        let innerAngle = 360 * (i + 0.5) / 5 -180;
        let innerX3 = (innerR/5) * cos(innerAngle);
        let innerY3 = (innerR/5) * sin(innerAngle);
        //nextinnerpoint
        let nextInnerAngle = 360* (i + 1.5) / 5-90;
        let nextInnerX3 = (innerR/5) * cos(nextInnerAngle);
        let nextInnerY3 = (innerR/5) * sin(nextInnerAngle);
        //caculatet the control point(from inner-outpoint)
        let cp1x = lerp(innerX3, outerX3, smoothness);
        let cp1y = lerp(innerY3, outerY3, smoothness);
        let cp2x = lerp(outerX3, nextInnerX3, smoothness);
        let cp2y = lerp(outerY3, nextInnerY3, smoothness);
        //drawbezier1
        bezierVertex(cp1x, cp1y, cp2x, cp2y, nextInnerX3, nextInnerY3)
        //draw next outpoint
        let nextOuterAngle = 360 * (i+1) / 5 -90;
        let nextOuterX3 = (outerR/5) * cos(nextOuterAngle);
        let nextOuterY3 = (outerR/5) * sin(nextOuterAngle);
        //caculate
        let cp3x = lerp(nextInnerX3, nextOuterX3, smoothness);
        let cp3y = lerp(nextInnerY3, nextOuterY3, smoothness);
        //draw another bezier
        bezierVertex(cp3x, cp3y, cp3x, cp3y, nextOuterX3, nextOuterY3);
      }
      
      endShape(CLOSE);
      
      noFill()
      stroke(255, 101, 200)
      strokeWeight(1)
      for(let i=0;i<8;i++) {
        angleMode(DEGREES)
        push()
        curve(10,10,0,0,10,-10,15,-15)
        stroke('yellow')
        strokeWeight(2)
        point(10,-10)
        


        pop()
        rotate(45)
      }}
    

  




