//your parameter variables go here!
let isRaining=true
let h=200
let w=200
let leafCount=4
let rainCount=60
let pondDepth=0.5
let size=30
let midx=100
let midy=100

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;



}

function wallpaper_background() {
  background(152, 179, 159); 
  
}


function my_symbol() { 
 drawPond()}
 function drawPond(){
for(let y=0;y<h;y++){
  let inter=lerp(pondDepth,0.2,y/h)
  stroke(30,70,100,255*inter)
  line(0,y,w,y)
}
if (isRaining){
  drawRain()
}
drawLotusLeaves()
}
function drawLotusLeaves(){
  
  fill(20,80,50,150)
stroke(10,50,30)
strokeWeight(1)
angleMode(DEGREES)
let yPos=random(80,170)
let xPos=20

for(let leaf=0;leaf<leafCount; leaf++){
  fill(20,80,50,random(140,180))
stroke(10,50,30)
strokeWeight(1)
  xPos +=size+random(10,30)
  yPos=random(80,170)
  beginShape()
  for(let angle=0; angle<360;angle+=180/8){
  let r = size * (0.8 + random(0.2));
  let offsetX = cos(angle) * r;
  let offsetY = sin(angle) * r * 0.7;
  curveVertex(xPos+offsetX,yPos+offsetY)
}
endShape(CLOSE)

//lines on leaves
noFill();
stroke(30, 100, 60); // light green
strokeWeight(0.5);
for (let i = 0; i < 8; i++) {
   let angle = i * 180/4;
  beginShape();
  
    curveVertex(xPos, yPos);
    curveVertex(xPos, yPos);

   
for (let r = 5; r < size * 0.8; r += 5) {
  
  let offsetX = cos(angle) * r;
  let offsetY = sin(angle) * r * 0.7;    
  let bend = sin(r/10) * 5;
      curveVertex(xPos + offsetX + bend, yPos + offsetY + bend);
      }
      curveVertex(xPos + cos(angle) * size * 0.8, yPos + sin(angle) * size * 0.8);
  endShape();}
  
};
 drawTadpole()
}
function drawTadpole(){
 
  
 push()
 fill(0,0,0,190)
 noStroke()
 ellipse(midx,midy,10,6)
 stroke(0,0,0,190)
 strokeWeight(1.5)
 noFill()

 angleMode(DEGREES)
 bezier(midx+4,midy+1,midx+10,midy+8,midx+10,midy-10,midx+15,midy+4)
  translate(midx,midy)
  fill(0,0,0,190)
 noStroke()
 ellipse(midx,midy,10,6)
 bezier(midx+4,midy+1,midx+10,midy+8,midx+10,midy-10,midx+15,midy+4)
rotate(15)
 pop()
}



  
    

function drawRain() {
  
    stroke(180, 220, 255, 100); // light blue
    strokeWeight(1);
            
    for (let i = 0; i < 50; i++) {
        let x = random(w);
        let y = random(h);
        line(x, y, x + 5, y + 15);
            }
}