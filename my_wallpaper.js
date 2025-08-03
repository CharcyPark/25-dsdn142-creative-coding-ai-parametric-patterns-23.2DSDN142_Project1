//your parameter variables go here!
//position control
let midx=100
let midy=100
//size control
let outerR=50
let innerR=outerR*0.9
//corner style control
let smoothness=0.9
//if control eye direction to show different emotions
let emotionType=2 //0,1,2,otherNum
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;
let myColors=[]
let flowerSize=8//background stars
let flowercount=200//background 
let heartsize=8
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
  background(30, 30, 50);

 
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
  let myColors=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
  let randomColor=random(myColors)
 //draw background stars
 strokeWeight(0.2)
 fill(randomColor,random(150,200)) 
for(i=0;i<flowercount;i++){
    let xPos=random(20,180)
    let yPos=random(20,180)
 
 push()
 
translate(xPos,yPos)
  
drawbackgroundstar()
pop()}
function drawbackgroundstar(){
stroke(randomColor)
 strokeWeight(1)
 fill(randomColor)//central star color
  push() 
 rotate(36)
 strokeWeight(0.2)
 fill(randomColor,random(150,200)) 
  for (let i=0; i<5; i++) {
ellipse(0,0,flowerSize/2,flowerSize*1.5)
rotate(72)
  } 
  fill(220,200,200,200)
  ellipse(0,0,flowerSize/3,flowerSize/3) 
  pop()
 

}
  
 

drawStar()

  }
  function drawStar() {
push()
   translate(midx,midy)
   drawStarBody()
   drawStarEmotion()
   pop()}
   function drawStarBody(){
    noStroke()
    fill(255,215,0)
   beginShape()
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
        let nextInnerAngle = 360* (i + 1.5) / 5-45;
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
      
     


     
    } 
  function drawStarEmotion(){
    let eyePosx=-15
    let eyePosy=5
    if (emotionType===0) {
    //middle look right down
    
    
    fill('black')
    noStroke()
    ellipse(eyePosx/2,eyePosy,4,6)//left eye
    ellipse(eyePosx/2+30,eyePosy,4,6)//right eye

    } else if(emotionType===1) {

    //line(midx/40-20,midy/40,midx/40+20,midy/40)
    //look up
     
    //line(midx/40,midy/40,midx/40+25,midy/40)
    fill('black')
    noStroke()
    ellipse(eyePosx/3,eyePosy/2,4,6)//left eye
    ellipse(eyePosx/3+30,eyePosy/2,4,6)//right eye
    stroke(0)
    strokeWeight(2)
    noFill()
    arc(0,15,20,10,0,PI)
    
    }
    else if (emotionType===2) {

     drawHeart(eyePosx,eyePosy,heartsize)    
    //line(midx/40-30,midy/40,midx/40-5,midy/40)
    }
    else {
    //look left down
  
    
    //line(midx/40-30,midy/40,midx/40-5,midy/40)
    fill('black')
    noStroke()
    ellipse(eyePosx,eyePosy,4,6)//left eye
    ellipse(eyePosx+30,eyePosy,4,6)//right eye
    noStroke()
    fill(255, 148, 102)
    ellipse(0,20,15,15)
  }




  
  }  
  function drawHeart(x,y,heartsize) {

 push()
    translate(x,y)
    stroke(207, 91, 116)
    strokeWeight(1)
    fill(255, 182, 193,random(150, 255))
   
    beginShape()
    vertex(0,-heartsize*0.8);
    bezierVertex(heartsize,-heartsize*1.5,heartsize*1.5,0,0,heartsize*1.2)
    bezierVertex(-heartsize * 1.5, 0,-heartsize, -heartsize * 1.5,0, -heartsize * 0.8
      );
      endShape(CLOSE);
      pop();
     push()
    translate(x,y)
    stroke(207, 91, 116)
    strokeWeight(1)
    fill(255, 182, 193,random(150, 255))
   
    beginShape()
    vertex(30,-heartsize*0.8);
    bezierVertex(heartsize+30,-heartsize*1.5,heartsize*1.5+30,0,30,heartsize*1.2)
    bezierVertex(-heartsize * 1.5+30, 0,-heartsize+30, -heartsize * 1.5,30, -heartsize * 0.8
      );
      endShape(CLOSE);
      pop();
}
  




