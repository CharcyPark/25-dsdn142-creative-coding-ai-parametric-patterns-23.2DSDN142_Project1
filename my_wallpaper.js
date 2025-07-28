//your parameter variables go here!

let orangeSize=30;
let shinePos=30
let showShine=false;
let x=30
let y=30






function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
push()
fill(255,165,0);
stroke(210,105,30);
strokeWeight(2)
ellipse(x,y,orangeSize,orangeSize);
stroke('wihte')
strokeWeight(0.2)
ellipse(x,y,orangeSize-1,orangeSize-1);
stroke(210,117,86)
strokeWeight(1)
point(x*1.3,orangeSize*1.2)
point(x*1.2,orangeSize*1.1)
point(x*1.2,orangeSize*1.2)

if (showShine){
  let shineX=x-orangeSize/4+shinePos/50;
  let shineY=y-orangeSize/4;
  fill(255,255,200,180)
  noStroke();
  ellipse(shineX,shineY,orangeSize/3,orangeSize/3);

}
//draw leaves
fill(34,139,34);
noStroke();
triangle(x-5,y-orangeSize/2,x-15,y-orangeSize/2-15,x-5,y-orangeSize/2-10)

pop()















}
