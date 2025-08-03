//your parameter variables go here!
let W=200
let H=200
let seedCount=30
let seedLength=30
let stemHeight=80
let fluffiness=1.1//from 0.3-1.5 
//if control
let wind=true
let windPower=50


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
  background(196, 242, 199); 
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//draw ground
let from= color(42, 110, 189)

noStroke()
fill(from)
rect(0,H*9/10,W,H)//bottem


drawsky()
drawStem();


}


function drawsky(){
let from= color(42, 110, 189)
let to =color(84, 150, 220)
let interA= lerpColor(from,to,0.2)
let interB= lerpColor(from,to,0.4)
noStroke()
fill(from)
rect(0,0,W,H*2/10)//top rec

fill(interA)
rect(0,H*2/10,W,H*3/10)

fill(interB)
rect(0,H*3/10,W,H*4/10)

fill(to)
rect(0,H*4/10,W,H*5/10)

  }
function drawStem(){
      stroke(159, 191, 160,170);
      strokeWeight(4);
      beginShape();
      curveVertex(W/2, H);
      curveVertex(W/2, H);
      curveVertex(W/2, H/2+50);
      curveVertex(W/2+5, H/2+20);
      curveVertex(W/2, H - stemHeight);
      curveVertex(W/2, H - stemHeight);
      endShape()
  drawhead()    

}
function drawhead(){
  stroke(242, 240, 235,random(150,200));
  strokeWeight(2);
  for (let i = 0; i < 20; i++) {
      let size = random(1, 3);
      let x = 100 + random(-5, 5);
      let y = 200 - stemHeight + random(-5, 5);
      point(x, y);
            }
  //draw seed
      stroke(255, 255, 255, 180);
      strokeWeight(1);
      angleMode(DEGREES)      
      for (let i = 0; i < seedCount; i++) {
          const angle = (i / seedCount) * 360;
                
   // if control
      let seedAngle = angle;
      if (wind) {
          seedAngle += 180/4 * (windPower/30);
                //seedangle=seedangle+x
                
      const baseX = 100;
      const baseY = 200 - stemHeight;
      const endX = baseX + cos(seedAngle) * seedLength * fluffiness;
      const endY = baseY + sin(seedAngle) * seedLength * fluffiness;
                
      // draw lines
        line(baseX, baseY, endX, endY);
                
      // seed point
        stroke(255, 255, 255);
        point(endX, endY);
      //flying  
      push()
        noFill()
      stroke(247, 240, 220 )
      strokeWeight(1)
      for(let i=0;i<10;i++) {
        angleMode(DEGREES)
        translate(W/3,H/10)
        push()
        curve(0,0,random(3,6),20,20,20,20,-20)
        stroke(247, 240, 220)
        strokeWeight(2)
        point(20,20)
        


        pop()
        rotate(30)}
      
        pop()
        
} else{
  seedAngle += 180/4 * (windPower/30);
                //seedangle=seedangle+x
                
      const baseX = 100;
      const baseY = 200 - stemHeight;
      const endX = baseX + cos(seedAngle) * seedLength * fluffiness;
      const endY = baseY + sin(seedAngle) * seedLength * fluffiness;
                
      // draw lines
        line(baseX, baseY, endX, endY);
                
      // seed point
        stroke(255, 255, 255);
        point(endX, endY);

}
      }
    }
