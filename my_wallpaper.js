//your parameter variables go here!
let eyeSize=29
let mouthType=0//(0 , 1 or other num)
let earPosition=30
let blush=50
let showSparkle=true
let eyePositionX=65
let eyePositionY=80
let heartNum=50
let size;
let x;
let y;



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
  background(151, 222, 177); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//line(0,50,200,50)
//line(0,100,200,100)
//line(0,150,200,150)
for (let i=0;i<heartNum;i++) {


drawHeart(x,y,size)}
drawPanda()
}

function drawHeart(x,y,size) {
size=random(2,8)
x=random(0,200)
y=random(0,200)
stroke(207, 91, 116)
strokeWeight(1)
    fill(255, 182, 193,random(150, 255))
    push()
    translate(x,y)
    beginShape()
    vertex(0,-size*0.8);
    bezierVertex(size,-size*1.5,size*1.5,0,0,size*1.2)
    bezierVertex(-size * 1.5, 0,-size, -size * 1.5,0, -size * 0.8
      );
      endShape(CLOSE);
      pop();
    
}
function drawPanda() {
    //head
    fill('white')
    stroke(0)
    strokeWeight(2)
    ellipse(100,100,165,150)

    //ears
    fill(0)
    noStroke()
    ellipse(50,50-earPosition/2,60,50)//left
    ellipse(150,50-earPosition/2,60,50)//right
    //eyes
    fill(0)
    ellipse(70,90,eyeSize,eyeSize*1.5)//left black
    ellipse(130,90,eyeSize,eyeSize*1.5)//right black
    fill(46, 37, 29,200)
    ellipse(eyePositionX,eyePositionY,eyeSize/2,eyeSize/2)//left eyes
    ellipse(eyePositionX+60,eyePositionY,eyeSize/2,eyeSize/2)//right eyes
    
    //if
    if (showSparkle) {
        fill(235, 200, 169,80)
        noStroke()
        ellipse(eyePositionX-eyeSize/16,eyePositionY,eyeSize/8,eyeSize/8)//left
        ellipse(eyePositionX+60-eyeSize/16,eyePositionY,eyeSize/8,eyeSize/8)//right      
    }
    //nose
    
    fill(0)
    ellipse(100,115,25,20,190)
    beginShape()
    stroke(48, 47, 47)//light blace
    strokeWeight(1)

    //mouse
    angleMode(DEGREES)
    stroke(0)
    strokeWeight(2)
    noFill()
    if (mouthType === 0) {
        //sm
        arc(100,130,60,40,0,180)

    } else if (mouthType===1) {
        //superised
        stroke(232, 220, 223)
        strokeWeight(2)
        fill(237, 109, 137,180)
        
        ellipse(100,145,40,30,180,360)
} else {
    //UNHAPPY
    strokeWeight(1.3)
    arc(100,145,40,30,180,360)
    let earPosition=30
}
    //BLUSH
    if (blush>0) {
        noStroke()
        fill(255,150,150,blush*2.5)
        //left
        ellipse(50,120,30,20)
        ellipse(150,120,30,20)


    }

}



