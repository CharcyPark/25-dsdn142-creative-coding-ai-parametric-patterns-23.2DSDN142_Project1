//your parameter variables go here!
let orangeR = orangeCx = orangeCy=66;




function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
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
//orange 
stroke(254,235,133);
strokeWeight(3.5);


ellipse(orangeCx,orangeCy,orangeR,orangeR);
fill(254,235,133);
stroke('white');
strokeWeight(0.3);
ellipse(orangeCx,orangeCy,orangeR-1,orangeR-1);

stroke(254,245,194);
strokeWeight(2);
fill(254,245,194);
ellipse(orangeCx,orangeCy,orangeR/10,orangeR/10);
strokeWeight(1);
line(orangeCx,orangeCy,orangeCx,orangeCy-orangeR/2+1.3);
line(orangeCx,orangeCy,orangeCx*1.34,orangeCy*1.34)

push()

translate(orangeCx,orangeCy)
line(0,0,0,orangeCy-orangeR/2-1);
rotate(45)
line(0,0,0,orangeCy-orangeR/2-1);
rotate(90)

line(0,0,0,orangeCy-orangeR/2-1);
rotate(135)
line(0,0,0,orangeCy-orangeR/2-1);
rotate(0)
line(0,0,0,orangeCy-orangeR/2-1);

line(0,0,0,orangeCy-orangeR/2-1);
rotate(-45)
line(0,0,0,orangeCy-orangeR/2-1);
rotate(-135)

line(0,0,0,orangeCy-orangeR/2-1);
rotate(90)


pop()










}
